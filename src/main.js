// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/theme/index.less'

Vue.prototype.defaultUrl =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563773770694&di=e422dfa35746def39a9b4d2ac5b15e0a&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F18%2F68%2F16pic_1868354_b.jpg'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
