import VSelectGroup from './src/main.vue'

VSelectGroup.install = function(Vue) {
  console.info('VImage----install----')
  Vue.component(VSelectGroup.name, VSelectGroup)
}

export default VSelectGroup
