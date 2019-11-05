const state = {
  locations:[
    {
      address:'Roxas Ave, Poblacion District, Davao City',
      imgUrl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/002bcf0c-0001-4fd0-95c3-837156119164/d6g9tr2-19180bc7-aa31-45b1-bedc-ea5b116ad937.jpg/v1/fill/w_1024,h_768,q_75,strp/ateneo_de_davao_by_robbiemelrose_d6g9tr2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvMDAyYmNmMGMtMDAwMS00ZmQwLTk1YzMtODM3MTU2MTE5MTY0XC9kNmc5dHIyLTE5MTgwYmM3LWFhMzEtNDViMS1iZWRjLWVhNWIxMTZhZDkzNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kOuKGV268mBmnrKbiNJ_7l8cKnbgRLsU_qBD1c-blGU',
      coordinates: [125.61244,7.07246]
    },
    {
      address:'Gen. Douglas MacArthur Hwy, Talomo, Davao City',
      imgUrl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/002bcf0c-0001-4fd0-95c3-837156119164/d7uo4pk-f3723800-1a1b-4020-a5fe-500df3421be9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwMmJjZjBjLTAwMDEtNGZkMC05NWMzLTgzNzE1NjExOTE2NFwvZDd1bzRway1mMzcyMzgwMC0xYTFiLTQwMjAtYTVmZS01MDBkZjM0MjFiZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CgL8_ofP2lMRQB_Y1N4WIpMfx7FmI1TMUzXLm9DldO8',
      coordinates:[125.59776,7.06043]
    },
    {
      address:'Km 8 McArthur Highway, Talomo, Davao City',
      imgUrl:'http://www.addu.edu.ph/wp-content/uploads/2017/02/SHS-Perspective.jpg',
      coordinates:[125.55758,7.05827]
    },
    {
      address:'Toril, Davao City',
      imgUrl:'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547',
      coordinates:[125.43717,7.00234]
    },
  ]
}

const mutations = {
}
const getters = {
  getLocation: state=>state.locations
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