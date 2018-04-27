import Vue from 'vue'
import Router from 'vue-router'
import ChuckPunch from '@/components/ChuckPunch'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChuckPunch',
      component: ChuckPunch
    },
    {
      path: '*',
      name: 'NotFoundComponent',
      component: NotFoundComponent
    }
  ]
})
