import VMaskLayer from './src/main.vue'

VMaskLayer.install = function(Vue) {
  console.info('VMaskLayer----install----')
  Vue.component(VMaskLayer.name, VMaskLayer)
}

export default VMaskLayer
