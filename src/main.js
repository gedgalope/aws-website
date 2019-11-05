import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store/index'
import openlayers from './plugins/openlayers'
import '@mdi/font/css/materialdesignicons.css'
// import moment from 'moment'

Vue.config.productionTip = false
// Vue.use(require('vue-moment'))


new Vue({
  router,
  store,
  vuetify,
  openlayers,
  render: h => h(App)
}).$mount('#app')
 