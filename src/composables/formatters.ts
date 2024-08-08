export function useFormatters () {
  function priceFormatter (price: string | number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(+price)
  }

  function dateFormatter (date: string) {
    return new Intl.DateTimeFormat('en-au',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date))
  }

  function timeFormatter (time: string) {
    return time.split(':')[0] + ':' + time.split(':')[1]
  }

  function secondFormatter (second: number) {
    return second > 0 && second < 60 ? 1 : Math.round(second / 60)
  }

  function typeFormatter (type: string) {
    const parts = type.split('\\')
    return parts[parts.length - 1]
  }

  function percentFormatter (completed: number, all: number) {
    if (all === 0) {
      return Math.round(completed * 100)
    }
    return Math.round(completed / all * 100)
  }

  return {
    priceFormatter,
    dateFormatter,
    timeFormatter,
    secondFormatter,
    typeFormatter,
    percentFormatter
  }
}
