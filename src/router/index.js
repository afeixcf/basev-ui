import Vue from 'vue'
import Router from 'vue-router'
import Components from '../../lib/index'
import Pages from '@/pages'
import '@/theme/component1.less'
import '@/theme/component2.less'
import '@/theme/v-image.less'

Vue.use(Router)
Vue.use(Components)

export default new Router({
  routes: [
    {
      path: '/v-image-page',
      name: 'VImagePage',
      component: Pages.VImagePage
    },
    {
      path: '/component1',
      name: 'component1',
      component: Components.component1
    },
    {
      path: '/component2',
      name: 'component2',
      component: Components.component2
    }
  ]
})
