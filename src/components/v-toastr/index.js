import VToastr from './src/main.vue'

let toastrComponents = []
VToastr.install = function(Vue) {
  console.info('VToastr----install----')
  function addToastr() {
    const ToastrComponent = Vue.extend(VToastr)
    let component = new ToastrComponent({
      el: document.createElement('div')
    })
    toastrComponents.push(component)
    return component
  }
  Vue.prototype.$toastr = {
    show(message, options = {}) {
      return addToastr().show(message, options)
    },
    hide() {
      toastrComponents.forEach(t => t.hide())
      toastrComponents = []
    }
  }
}

export default VToastr
