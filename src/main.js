// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/Index'
import VueResource from 'vue-resource'
import Detail from './pages/Detail'

import Any from './pages/details/Any.vue'
import Cou from './pages/details/Cou.vue'
import For from './pages/details/For.vue'
import Pub from './pages/details/Pub.vue'
import Orders from './pages/Orders.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orders',
      component: Orders
    },
    {
      redirect:('/detail/any'),
      path: '/detail',
      component: Detail,
      children:[
        {
          path: 'any',
          component: Any
        },
        {
          path: 'cou',
          component: Cou
        },
        {
          path: 'for',
          component: For
        },
        {
          path: 'pub',
          component: Pub
        }
      ]

    }
    ]

});


new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
