import VImage from './src/main.vue'

VImage.install = function(Vue) {
  console.info('VImage----install----')
  Vue.component(VImage.name, VImage)
}

export default VImage
