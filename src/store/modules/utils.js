const state = {
  currentTime: '',
  timeNow:'',
  dateNow:'',
  nextDataset:false,
  currentDataset:0,
}

const mutations = {
    /*eslint-disable*/
  TIME_TICK(state) {
    state.currentTime= new Date();
    var utNow = new Date();
    state.timeNow = utNow.toTimeString().substring(0,8);
    state.dateNow = utNow.toDateString();
    if(utNow.getSeconds() % 15 == 0){
      state.nextDataset = true;
    }else{
      state.nextDataset = false;
    }
    // console.log(state.currentTime)
    // state.timeNow = moment(state.currentTime)
    // console.log(state.timeNow)    
    // return null;
  },
  TIME_INIT(state) {
    state.currentTime = new Date().getTime();
    // return null;
  },
  TICK_CURRENT_DATASET(state,payload){
    // console.log(state.currentDataset)
    state.currentDataset = payload;
  }
}
const getters = {
  getNow: state => state.currentTime
}
const actions = {
  init({ commit }) {
    commit('TIME_INIT');
    setInterval(() => {
      commit('TIME_TICK');
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}