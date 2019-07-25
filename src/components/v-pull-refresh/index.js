import VPullRefresh from './src/main.vue'

VPullRefresh.install = function(Vue) {
  console.info('VPullRefresh----install----')
  Vue.component(VPullRefresh.name, VPullRefresh)
}

export default VPullRefresh
