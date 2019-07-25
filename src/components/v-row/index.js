import VRow from './src/main.vue'

VRow.install = function(Vue) {
  console.info('VRow----install----')
  Vue.component(VRow.name, VRow)
}

export default VRow
