import Vue from 'vue'
import Vuex from 'vuex'
import utils from './modules/utils'
import maps from './modules/maps'
import data from './modules/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    utils,
    maps,
    data
    },
  strict: true
});

export default store;
