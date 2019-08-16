import VDatePicker from './src/main.vue'

VDatePicker.install = function(Vue) {
  console.info('VDatePicker----install----')
  Vue.component(VDatePicker.name, VDatePicker)
}

export default VDatePicker
