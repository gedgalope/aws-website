import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken2, // #1976D2
        secondary: colors.blue.darken4, // #0D47A1
        accent: colors.indigo.base, // #3F51B5
      }
    }
  }
});
