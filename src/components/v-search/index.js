import VSearch from './src/main.vue'

VSearch.install = function(Vue) {
  console.info('VSearch----install----')
  Vue.component(VSearch.name, VSearch)
}

export default VSearch
