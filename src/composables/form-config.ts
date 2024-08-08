import type { FormInstance, FormItemRule, FormRules } from 'element-plus'

// --------------------------------------------- F O R M  R E F --------------------------------------------------------
export function useElFormRef (initialValue: any = null) {
  const formRef = ref<FormInstance>(initialValue)

  async function validateForm (onSuccess: () => (void | Promise<void>), onError?: () => void) {
    if (!formRef.value) return

    try {
      await formRef.value.validate()
      await onSuccess()
    } catch (e) {
      onError ? onError() : console.log(e)
    }
  }

  return {
    formRef,
    validateForm,
    clearValidate: () => formRef.value?.clearValidate()
  }
}

// --------------------------------------------- F O R M  M O D E L ----------------------------------------------------
export function useElFormModel<T extends object> (model: T) {
  return reactive<T>(model)
}

// ------------------------------------------- F O R M  R U L E S ------------------------------------------------------
export function useElFormRules (model: FormRules) {
  return reactive(model)
}

export function useRequiredRule ({ required = true } = {}) {
  const { t } = useI18n()
  return { required, message: t('validation.required'), trigger: 'change' } as FormItemRule
}

export function useEmailRule () {
  const { t } = useI18n()
  return { type: 'email', message: t('validation.email'), trigger: ['change', 'blur'] } as FormItemRule
}

export function useMinLenRule (min: number): FormItemRule {
  const { t } = useI18n()
  return { min, message: t('validation.minLength', { number: min }), trigger: 'change' }
}

export function useAHPRARule (country: string): FormItemRule {
  if (country === 'Australia') {
    // Australian AHPRA rule
    return {
      validator: (rule, value, callback) => {
        if (!value.match(/^[A-Za-z]{3}\d{10}$/)) {
          callback(new Error('Please enter a valid AHPRA registration number.'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  } else if (country === 'New Zealand') {
    // New Zealand MCNZ rule
    return {
      min: 5,
      message: 'Your MCNZ registration number must consist of at least 5 characters.',
      trigger: 'change'
    }
  } else {
    // Other countries
    return {
      min: 5,
      message: 'Your Medical Licence registration number must consist of at least 5 characters.',
      trigger: 'change'
    }
  }
}

export function useMaxLenRule (max: number): FormItemRule {
  const { t } = useI18n()
  return { max, message: t('validation.maxLength', { number: max }), trigger: 'change' }
}
