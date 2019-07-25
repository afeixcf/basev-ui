export function getScrollTop(target) {
  if (target === document) {
    return document.documentElement.scrollTop || document.body.scrollTop || 0
  }
  return target.scrollTop
}

export default {
  getScrollTop
}
