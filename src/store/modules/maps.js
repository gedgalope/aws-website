const state = {
  locations: [
    {
      name: 'AWS Roxas',
      status: "Active",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor", installed: true }, { name: "SHT 15", purpose: "Temperature", installed: true }, { name: "Davis Tipping Bucket", purpose: "Rainfall", installed: true }, { name: "Davis Anemometer", purpose: "Wind Speed", installed: true }, { name: "Apogee Pyrnamometer", purpose: "Solar Irradiance", installed: true }, { name: "Davis Solar Irradiance", purpose: "Solar Irradiance", installed: false }],
      installed: "August 24, 2017",
      maintenance: "August 2019",
      address: 'Roxas Ave, Poblacion District, Davao City',
      coordinates: [125.61244, 7.07246],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: "https://live.staticflickr.com/7493/16084287976_99f156371d_b.jpg"
    },
    {
      name: 'AWS Matina',
      status: "Active",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor", installed: false }, { name: "SHT 15", purpose: "Temperature", installed: true }, { name: "Davis Tipping Bucket", purpose: "Rainfall", installed: true }, { name: "Davis Anemometer", purpose: "Wind Speed", installed: true }, { name: "Apogee Pyrnamometer", purpose: "Solar Irradiance", installed: true }, { name: "Davis Solar Irradiance", purpose: "Solar Irradiance", installed: false }],
      installed: "April 30, 2009",
      maintenance: "November 2019",
      address: 'Gen. Douglas MacArthur Hwy, Talomo, Davao City',
      coordinates: [125.59776, 7.06043],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: "https://fastly.4sqi.net/img/general/600x600/147580347_U4ibdSzzNfy1dYYMRgsR0daYpeI5PSIHfcAw7rT3Vps.jpg"
    },
    {
      name: 'AWS Bangkal',
      status: "Inactive",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor", installed: true }, { name: "SHT 15", purpose: "Temperature", installed: true }, { name: "Davis Tipping Bucket", purpose: "Rainfall", installed: true }, { name: "Davis Anemometer", purpose: "Wind Speed", installed: true }, { name: "Apogee Pyrnamometer", purpose: "Solar Irradiance", installed: false }, { name: "Davis Solar Irradiance", purpose: "Solar Irradiance", installed: true }],
      installed: "May 24, 2019",
      maintenance: "January 2019",
      address: 'Km 8 McArthur Highway, Talomo, Davao City',
      coordinates: [125.55758, 7.05827],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: "http://www.addu.edu.ph/wp-content/uploads/2017/02/SHS-Perspective.jpg"
    },
    {
      name: 'AWS Catigan',
      status: "Idle",
      sensors: [{ name: "BMP 1500", purpose: "Pressure Sensor", installed: true }, { name: "SHT 15", purpose: "Temperature", installed: true }, { name: "Davis Tipping Bucket", purpose: "Rainfall", installed: false }, { name: "Davis Anemometer", purpose: "Wind Speed", installed: true }, { name: "Apogee Pyrnamometer", purpose: "Solar Irradiance", installed: true }, { name: "Davis Solar Irradiance", purpose: "Solar Irradiance", installed: false }],
      installed: "January 30, 2018",
      maintenance: "August 2019",
      address: 'Toril, Davao City',
      coordinates: [125.43717, 7.00234],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547"
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