<template>
  <v-container class="page-not-found">
    <v-row justify="center">
      <v-alert :icon="false" type="error">
        <v-container>
          <v-row justify="center">
            <v-container class="text-center display-4" style="color">404!</v-container>
          </v-row>
          <v-row>
            <v-container
              class="text-center display-4 text-uppercase font-weight-bold"
              style="color"
            >page not found</v-container>
          </v-row>
        </v-container>
      </v-alert>
    </v-row>
    <v-row justify="center">
      <icon-container iconName="acid-rain" viewBox="0 -36 512.0008 512" width="500" height="500">
        <acid-rain-icon></acid-rain-icon>
      </icon-container>
    </v-row>
    <v-row justify="center">
      <v-col cols="2" align="right">
        <v-container fluid class="title">Go back:</v-container>
      </v-col>
      <v-col cols="2">
        <v-btn large color="primary" exact to="/">Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AcidRain from "../components/Icons/AcidRain";
import IconVue from "../components/utils/Icon.vue";
export default {
  name: "page-not-found",
  components: {
    "acid-rain-icon": AcidRain,
    "icon-container": IconVue
  }
};
</script>

<style scoped>
</style>