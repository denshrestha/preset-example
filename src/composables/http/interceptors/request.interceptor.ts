import type { AxiosError, AxiosRequestConfig } from 'axios'

// Todo: the following code is just an example. Please write your own project specific interceptors
const requestInterceptor = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
  if (!requestConfig.url?.includes('sanctum')) {
    requestConfig.baseURL = requestConfig.baseURL + '/api/v2'
  }

  return requestConfig
}

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export {
  requestInterceptor,
  requestErrorInterceptor
}
