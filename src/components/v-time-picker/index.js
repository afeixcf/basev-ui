import VTimePicker from './src/main.vue'

VTimePicker.install = function(Vue) {
  console.info('VTimePicker----install----')
  Vue.component(VTimePicker.name, VTimePicker)
}

export default VTimePicker
