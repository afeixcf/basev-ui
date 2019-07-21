import VImage from './src/v-image.vue'

VImage.install = function(Vue) {
  console.info('VImage----install----')
  Vue.component(VImage.name, VImage)
}

export default VImage
