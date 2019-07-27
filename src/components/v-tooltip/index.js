import VTooltip from './src/main.vue'

VTooltip.install = function(Vue) {
  console.info('VTooltip----install----')
  Vue.component(VTooltip.name, VTooltip)
}

export default VTooltip
