import VSelect from './src/main.vue'

VSelect.install = function(Vue) {
  console.info('VSelect----install----')
  Vue.component(VSelect.name, VSelect)
}

export default VSelect
