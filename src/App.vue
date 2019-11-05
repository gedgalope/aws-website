<template>
  <v-app>
    <page-toolbar v-if="!checkRoute()" ></page-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ToolbarVue from './views/Toolbar';

export default {
  name: 'App',
  components:{
    'page-toolbar':ToolbarVue
  },
  methods: {
    checkRoute(){
      var currRoute = this.$router.currentRoute.path;
      if(currRoute == "/bulletin"){
        return true;
      }else{
        return false;
      }
    }
  },
};
</script>
