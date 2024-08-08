export const useScrollToElement = (el: any, behavior: 'smooth' | 'auto' = 'smooth') => {
  el.parentNode.scrollTo({ left: el.offsetLeft - el.parentElement.offsetLeft, behavior })
}
