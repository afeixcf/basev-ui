import VScrollLoad from './src/main.vue'

VScrollLoad.install = function(Vue) {
  console.info('VScrollLoad----install----')
  Vue.component(VScrollLoad.name, VScrollLoad)
}

export default VScrollLoad
