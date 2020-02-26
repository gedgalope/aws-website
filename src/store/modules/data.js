import galope from '../../assets/galope.jpg'
import duro from '../../assets/duro.jpg'


const state = {
  awsData: [
    {
      location: '[125.61244,7.07246]',//college
      temp: '23.5',
      humidity: '75.5',
      rain: '0.00',
      windSpeed: '0.88',
      windDirection: '0'
    },
    {
      location: '[125.59776,7.06043]',//jhs
      temp: '23.5',
      humidity: '75.5',
      rain: '0.00',
      windSpeed: '0.88',
      windDirection: '90'

    },
    {
      location: '[125.55758,7.05827]',//shs
      temp: '23.5',
      humidity: '75.5',
      rain: '0.33',
      windSpeed: '0.88',
      windDirection: '180'
    },
    {
      location: '[125.43717,7.00234]', //catigan
      temp: '23.5',
      humidity: '75.5',
      rain: '0.05',
      windSpeed: '0.88',
      windDirection: '270'
    }
  ],
  awsDummy: [
    {
      location: 'AWS Matina',
      coordinates: [125.59776, 7.06043],
      data: {
        temperature: [30.39, 30.47, 30.29, 30.22, 30.61, 30.11, 30.97, 30.02, 30.33, 30.41, 30.31, 30.6, 30.89, 30.9, 30.32, 30.44, 30.74, 30.83, 30.29, 30.81, 30.59, 30.41, 30.49, 30.5, 30.16, 30.3, 30.96, 30.86, 30.42, 30.79, 30.56, 30.52, 30.84, 30.18, 30.16, 30.75, 30.76, 30.83, 30.76, 30.45, 30.7, 30.1, 30.55, 30.28, 30.52, 30.34, 30.31, 30.1, 30.44, 30.06, 30.19, 30.64, 30.52, 31.0, 30.81, 30.2, 30.6, 30.48, 30.37, 30.3, 30.21, 30.33, 30.04, 30.99, 30.18, 30.36, 30.07, 30.32, 30.82, 30.33, 30.62, 30.06, 30.7, 30.61, 30.48, 30.81, 30.6, 30.98, 30.35, 30.87, 30.85, 30.3, 30.23, 30.86, 30.43, 30.04, 30.22, 30.71, 30.63, 30.08, 30.72, 30.14, 30.21, 30.35, 30.79, 30.89, 30.53, 30.71, 30.36, 30.55, 30.46, 30.57, 30.09, 30.42, 30.22, 30.33, 30.51, 30.52, 30.29, 31.0, 30.55, 30.14, 30.19, 30.2, 30.47, 30.03, 30.83, 30.66, 30.04, 30.68, 31.0, 30.91, 30.91, 30.4, 30.86, 30.51, 30.32, 30.92, 30.72, 30.94, 30.81, 30.38, 30.74, 30.45, 30.33, 30.89, 30.15, 30.8, 30.3, 30.32, 30.32, 30.3, 30.43, 30.29,],
        humidity: 75,
        pressure: 1500,
        rain15: 0.05,
        rain24: 0.51,
        windDirection: 150,
        windSpeed: 1.50,
        irradiance10: 500,
        irradiance24: 1250
      }
    },
    {
      location: 'AWS Roxas',
      coordinates: [125.61244, 7.07246],
      data: {
        temperature: [30.39, 30.47, 30.29, 30.22, 30.61, 30.11, 30.97, 30.02, 30.33, 30.41, 30.31, 30.6, 30.89, 30.9, 30.32, 30.44, 30.74, 30.83, 30.29, 30.81, 30.59, 30.41, 30.49, 30.5, 30.16, 30.3, 30.96, 30.86, 30.42, 30.79, 30.56, 30.52, 30.84, 30.18, 30.16, 30.75, 30.76, 30.83, 30.76, 30.45, 30.7, 30.1, 30.55, 30.28, 30.52, 30.34, 30.31, 30.1, 30.44, 30.06, 30.19, 30.64, 30.52, 31.0, 30.81, 30.2, 30.6, 30.48, 30.37, 30.3, 30.21, 30.33, 30.04, 30.99, 30.18, 30.36, 30.07, 30.32, 30.82, 30.33, 30.62, 30.06, 30.7, 30.61, 30.48, 30.81, 30.6, 30.98, 30.35, 30.87, 30.85, 30.3, 30.23, 30.86, 30.43, 30.04, 30.22, 30.71, 30.63, 30.08, 30.72, 30.14, 30.21, 30.35, 30.79, 30.89, 30.53, 30.71, 30.36, 30.55, 30.46, 30.57, 30.09, 30.42, 30.22, 30.33, 30.51, 30.52, 30.29, 31.0, 30.55, 30.14, 30.19, 30.2, 30.47, 30.03, 30.83, 30.66, 30.04, 30.68, 31.0, 30.91, 30.91, 30.4, 30.86, 30.51, 30.32, 30.92, 30.72, 30.94, 30.81, 30.38, 30.74, 30.45, 30.33, 30.89, 30.15, 30.8, 30.3, 30.32, 30.32, 30.3, 30.43, 30.29,],
        humidity: 75,
        pressure: 1050,
        rain15: 0.00,
        rain24: 0.21,
        windDirection: 135,
        windSpeed: 1.25,
        irradiance10: 1000,
        irradiance24: 1800

      }
    },
    {
      location: 'AWS Bangkal',
      coordinates: [125.55758, 7.05827],
      data: {
        temperature: [30.39, 30.47, 30.29, 30.22, 30.61, 30.11, 30.97, 30.02, 30.33, 30.41, 30.31, 30.6, 30.89, 30.9, 30.32, 30.44, 30.74, 30.83, 30.29, 30.81, 30.59, 30.41, 30.49, 30.5, 30.16, 30.3, 30.96, 30.86, 30.42, 30.79, 30.56, 30.52, 30.84, 30.18, 30.16, 30.75, 30.76, 30.83, 30.76, 30.45, 30.7, 30.1, 30.55, 30.28, 30.52, 30.34, 30.31, 30.1, 30.44, 30.06, 30.19, 30.64, 30.52, 31.0, 30.81, 30.2, 30.6, 30.48, 30.37, 30.3, 30.21, 30.33, 30.04, 30.99, 30.18, 30.36, 30.07, 30.32, 30.82, 30.33, 30.62, 30.06, 30.7, 30.61, 30.48, 30.81, 30.6, 30.98, 30.35, 30.87, 30.85, 30.3, 30.23, 30.86, 30.43, 30.04, 30.22, 30.71, 30.63, 30.08, 30.72, 30.14, 30.21, 30.35, 30.79, 30.89, 30.53, 30.71, 30.36, 30.55, 30.46, 30.57, 30.09, 30.42, 30.22, 30.33, 30.51, 30.52, 30.29, 31.0, 30.55, 30.14, 30.19, 30.2, 30.47, 30.03, 30.83, 30.66, 30.04, 30.68, 31.0, 30.91, 30.91, 30.4, 30.86, 30.51, 30.32, 30.92, 30.72, 30.94, 30.81, 30.38, 30.74, 30.45, 30.33, 30.89, 30.15, 30.8, 30.3, 30.32, 30.32, 30.3, 30.43, 30.29,],
        humidity: 70,
        pressure: 1520,
        rain15: 0.15,
        rain24: 1.56,
        windDirection: 110,
        windSpeed: 1.44,
        irradiance10: 1000,
        irradiance24: 1200
      }
    },
    {
      location: 'AWS Catigan',
      coordinates: [125.43717, 7.00234],
      data: {
        temperature: [30.39, 30.47, 30.29, 30.22, 30.61, 30.11, 30.97, 30.02, 30.33, 30.41, 30.31, 30.6, 30.89, 30.9, 30.32, 30.44, 30.74, 30.83, 30.29, 30.81, 30.59, 30.41, 30.49, 30.5, 30.16, 30.3, 30.96, 30.86, 30.42, 30.79, 30.56, 30.52, 30.84, 30.18, 30.16, 30.75, 30.76, 30.83, 30.76, 30.45, 30.7, 30.1, 30.55, 30.28, 30.52, 30.34, 30.31, 30.1, 30.44, 30.06, 30.19, 30.64, 30.52, 31.0, 30.81, 30.2, 30.6, 30.48, 30.37, 30.3, 30.21, 30.33, 30.04, 30.99, 30.18, 30.36, 30.07, 30.32, 30.82, 30.33, 30.62, 30.06, 30.7, 30.61, 30.48, 30.81, 30.6, 30.98, 30.35, 30.87, 30.85, 30.3, 30.23, 30.86, 30.43, 30.04, 30.22, 30.71, 30.63, 30.08, 30.72, 30.14, 30.21, 30.35, 30.79, 30.89, 30.53, 30.71, 30.36, 30.55, 30.46, 30.57, 30.09, 30.42, 30.22, 30.33, 30.51, 30.52, 30.29, 31.0, 30.55, 30.14, 30.19, 30.2, 30.47, 30.03, 30.83, 30.66, 30.04, 30.68, 31.0, 30.91, 30.91, 30.4, 30.86, 30.51, 30.32, 30.92, 30.72, 30.94, 30.81, 30.38, 30.74, 30.45, 30.33, 30.89, 30.15, 30.8, 30.3, 30.32, 30.32, 30.3, 30.43, 30.29,],
        humidity: 78,
        pressure: 1499,
        rain15: 1.05,
        rain24: 2.51,
        windDirection: 250,
        windSpeed: 0.50,
        irradiance10: 800,
        irradiance24: 1000
      }
    }
  ],
  awsDummyPeople: [
    {
      name: 'Engr. Josef Rene Villanueva',
      position: 'Lead Researcher',
      gender: 'male',
      social: { fb: "https://www.facebook.com/josef.r.villanueva", twitter: null, email: "jrvillanueva22@gmail.com" },
      imgURL: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Engr. Nathaniel Duro',
      position: 'Asst. Lead Researcher',
      gender: 'male',
      social: { fb: "https://www.facebook.com/nathanielduro", twitter: null, email: "nathanielduro@gmail.com" },
      imgURL: duro
    },
    {
      name: 'Engr. Arby Christy Mascariñas',
      position: 'Lead Programmer',
      gender: 'female',
      social: { fb: "https://www.facebook.com/arbychristy", twitter: null, email: "arby.mascarinas@gmail.com" },
      imgURL: 'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Engr. Gabriel Earl Galope',
      position: 'Frontend Developer',
      gender: 'male',
      social: { fb: "https://www.facebook.com/earl.galope", twitter: 'https://twitter.com/hukplanupu', email: "gedgalope@gmail.com" },
      imgURL: galope
    }

  ]
}

const mutations = {

}
const getters = {
  getAddress: state => {
    return state.awsDummy.map(data => data.location)
  },
  getCoordinates: state => {
    return state.awsDummy.map(data => data.coordinates)
  },
  getData: state => state.awsDummy,
  getMembers: state => state.awsDummyPeople,

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