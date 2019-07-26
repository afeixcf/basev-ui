import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/pages'
import Components from '@/components/index'

Vue.use(Components)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/v-image-page',
      name: 'VImagePage',
      component: Pages.VImagePage
    },
    {
      path: '/v-mask-layer-page',
      name: 'VMaskLayerPage',
      component: Pages.VMaskLayerPage
    },
    {
      path: '/v-col-page',
      name: 'VColPage',
      component: Pages.VColPage
    },
    {
      path: '/v-select-page',
      name: 'VSelectPage',
      component: Pages.VSelectPage
    },
    {
      path: '/v-scroll-load-page',
      name: 'VScrollLoadPage',
      component: Pages.VScrollLoadPage
    },
    {
      path: '/v-pull-refresh-page',
      name: 'VPullRefreshPage',
      component: Pages.VPullRefreshPage
    },
    {
      path: '/v-toast-page',
      name: 'VToastPage',
      component: Pages.VToastrPage
    }
    // {
    //   path: '/component1',
    //   name: 'component1',
    //   component: Components.component1
    // },
    // {
    //   path: '/component2',
    //   name: 'component2',
    //   component: Components.component2
    // }
  ]
})
