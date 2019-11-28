const state = {
  locations: [
    {
      name: 'AWS Roxas',
      status: "Active",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor" }, { name: "SHT 15", purpose: "Temperature" }, { name: "Davis Tipping Bucket", purpose: "Rainfall" }, { name: "Davis Anemometer", purpose: "Solar Irradiance" }],
      installed: "August 24, 2017",
      maintenance: "August 2019",
      address: 'Roxas Ave, Poblacion District, Davao City',
      coordinates: [125.61244, 7.07246],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: 'AWS Matina',
      status: "Active",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor" }, { name: "SHT 15", purpose: "Temperature" }, { name: "Davis Tipping Bucket", purpose: "Rainfall" }, { name: "Davis Anemometer", purpose: "Solar Irradiance" }],
      installed: "April 30, 2009",
      maintenance: "November 2019",
      address: 'Gen. Douglas MacArthur Hwy, Talomo, Davao City',
      coordinates: [125.59776, 7.06043],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: 'AWS Bangkal',
      status: "Inactive",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor" }, { name: "SHT 15", purpose: "Temperature" }, { name: "Davis Tipping Bucket", purpose: "Rainfall" }, { name: "Davis Anemometer", purpose: "Solar Irradiance" }],
      installed: "May 24, 2019",
      maintenance: "January 2019",
      address: 'Km 8 McArthur Highway, Talomo, Davao City',
      coordinates: [125.55758, 7.05827],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: 'AWS Catigan',
      status: "Idle",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor" }, { name: "SHT 15", purpose: "Temperature" }, { name: "Davis Tipping Bucket", purpose: "Rainfall" }, { name: "Davis Anemometer", purpose: "Solar Irradiance" }],
      installed: "January 30, 2018",
      maintenance: "August 2019",
      address: 'Toril, Davao City',
      coordinates: [125.43717, 7.00234],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ]
}

const mutations = {
}
const getters = {
  getLocation: state => state.locations,
  getAWSDesc: state => state.locations
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