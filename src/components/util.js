export function getScrollTop(target) {
  if (target === document) {
    return document.documentElement.scrollTop || document.body.scrollTop || 0
  }
  return target.scrollTop
}

export function debounce(method, delay, context) {
  clearTimeout(method.timer)
  method.timer = setTimeout(function() {
    method.call(context)
  }, delay)
}

export function throttle(func, wait) {
  let lastTime = null
  let timeout
  return function() {
    let context = this
    let now = new Date()
    if (now - lastTime - wait > 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      func.apply(context, arguments)
      lastTime = now
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, arguments)
      }, wait)
    }
  }
}

export default {
  getScrollTop,
  debounce,
  throttle
}
