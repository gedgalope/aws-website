<template>
  <div class="page-toolbar">
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>TAWS</span>
        <span class="font-weight-light">Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-xs-only">
        <v-tabs color="transparent">
          <v-tab optional exact large class="vtab text-capitalize">Home</v-tab>
          <v-tab optional exact large class="vtab text-capitalize">Services</v-tab>
          <v-tab optional exact large class="vtab text-capitalize">About Us</v-tab>
          <v-tab optional exact large class="vtab text-capitalize">Contact Us</v-tab>
        </v-tabs>
      </span>
      <span class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn icon color="transparent" v-on="on">
              <v-icon color="black">mdi-apps</v-icon>
            </v-btn>
          </template>
          <!-- <v-list>
            <v-list-item @click="testfunc()">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="testfunc()">
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
            <v-list-item @click="testfunc()">
              <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "page-toolbar",
  methods:{
    testfunc(){
      //do nothing
    }
  }
};
</script>