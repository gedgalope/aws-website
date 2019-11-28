import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store/index'
import openlayers from './plugins/openlayers'
import '@mdi/font/css/materialdesignicons.css'
import vueChart from 'vue-chartjs'

Vue.config.productionTip = false
Vue.use(vueChart)

new Vue({
  router,
  store,
  vuetify,
  openlayers,
  vueChart,
  render: h => h(App)
}).$mount('#app')
 