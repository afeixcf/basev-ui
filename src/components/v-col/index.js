import VCol from './src/main.vue'

VCol.install = function(Vue) {
  console.info('VCol----install----')
  Vue.component(VCol.name, VCol)
}

export default VCol
