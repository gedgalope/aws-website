<template>
  <div class="page-toolbar">
    <v-toolbar dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>TAWS</span>
        <span class="font-weight-light">Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-xs-only">
        <v-tabs>
          <v-menu open-on-click bottom persistent offset-y dark>
            <template v-slot:activator="{ on }">
              <!-- <v-btn color="primary" dark v-on="on">Dropdown</v-btn> -->
              <v-tab optional exact large class="vtab text-capitalize" v-on="on">
                Home
                <v-icon right x-small>mdi-chevron-down</v-icon>
              </v-tab>
            </template>
            <v-list>
              <v-list-item replace to="/">
                <v-list-item-title>AdDU AWS</v-list-item-title>
              </v-list-item>
              <v-list-item replace to="/MO">
                <v-list-item-title>Manila Observatory</v-list-item-title>
              </v-list-item>
              <v-list-item replace to="/7Eleven">
                <v-list-item-title>7Eleven</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/weather">Weather</v-tab>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/about/AWS">About Us</v-tab>
        </v-tabs>
      </span>
      <span class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn icon color="transparent" v-on="on">
              <v-icon color="black">mdi-apps</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item replace to="/">
              <v-list-item-title>AdDU AWS</v-list-item-title>
            </v-list-item>
            <v-list-item replace to="/MO">
              <v-list-item-title>Manila Observatory</v-list-item-title>
            </v-list-item>
            <v-list-item replace to="/7Eleven">
              <v-list-item-title>7Eleven</v-list-item-title>
            </v-list-item>
            <v-list-item replace to="/weather">
              <v-list-item-title>Weather</v-list-item-title>
            </v-list-item>
            <v-list-item replace to="/about/AWS">
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "page-toolbar",
  methods: {
    testfunc() {
      //do nothing
    }
  }
};
</script>