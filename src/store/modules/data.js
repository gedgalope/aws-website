const state = {
  awsData: [
    {
      location: '[125.61244,7.07246]',//college
      temp:'23.5',
      humidity:'75.5',
      rain:'0.00',
      windSpeed:'0.88',
      windDirection:'0'      
    },
    {
      location: '[125.59776,7.06043]',//jhs
      temp:'23.5',
      humidity:'75.5',
      rain:'0.00',
      windSpeed:'0.88',
      windDirection:'90' 
      
    },
    {
      location: '[125.55758,7.05827]',//shs
      temp:'23.5',
      humidity:'75.5',
      rain:'0.33',
      windSpeed:'0.88',
      windDirection:'180' 
    },
    {
      location: '[125.43717,7.00234]', //catigan
      temp:'23.5',
      humidity:'75.5',
      rain:'0.05',
      windSpeed:'0.88',
      windDirection:'270' 
    },

  ]
}

const mutations = {

}
const getters = {

}
const actions = {

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}