import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BulletinView from './views/Bulletin'
import MOHome from './views/MOHome'
import Weather from './views/Weather'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/bulletin',
      name:'bulletin',
      component:BulletinView
    },
    {
      path:'/MO',
      name:'MOHome',
      component:MOHome
    },{
      path:'/weather',
      name:'Weather',
      component:Weather
    }
  ]
})

export default router;