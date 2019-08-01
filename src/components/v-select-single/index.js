import VSelectSingle from './src/main.vue'

VSelectSingle.install = function(Vue) {
  console.info('VSelectSingle----install----')
  Vue.component(VSelectSingle.name, VSelectSingle)
}

export default VSelectSingle
