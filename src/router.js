import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BulletinView from './views/Bulletin'
import MOHome from './views/MOHome'
import Weather from './views/Weather'
import Contact from './components/AboutPage/Contact'
import AboutPage from './components/AboutPage/AboutContent'
import About from './views/About'
import PageNotFound from './views/PageNotFound'
import sevenEleven from './views/sevenEleven'

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
      component: About,
      children: [
        {
          path: 'contact-us',
          name: 'contact-us',
          component: Contact
        },
        {
          path: 'AWS',
          name: 'AWS',
          component: AboutPage,
        }
      ]
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component: BulletinView
    },
    {
      path: '/MO',
      name: 'MOHome',
      component: MOHome
    },
    {
      path: '/7Eleven',
      name:'sevenEleven',
      component:sevenEleven
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path:'*',
      name:'PageNotFound',
      component: PageNotFound,
    }
  ]
})

export default router;