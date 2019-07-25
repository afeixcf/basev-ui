import VCol from './src/main.vue'

VCol.install = function(Vue) {
  console.info('VMaskLayer----install----')
  Vue.component(VCol.name, VCol)
}

export default VCol
