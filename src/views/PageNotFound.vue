<template>
  <v-container fluid class="page-not-found">
    <!-- <v-row justify="center">
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
    </v-row>-->
    <v-row class="row-container" align="center" justify="center">
      <v-col class="col-container" xl="6" lg="8" md="8" sm="12">
        <v-row>
          <v-container>
            <v-card>
              <v-container fluid>
                <v-row justify="center">
                  <v-col xl="3" lg="4" md="4" sm="6">
                    <icon-container
                      iconName="acid-rain"
                      viewBox="0 -36 512.0008 512"
                      width="200"
                      height="200"
                    >
                      <acid-rain-icon></acid-rain-icon>
                    </icon-container>
                  </v-col>
                  <v-divider vertical class="hidden-xs-only"></v-divider>
                  <v-col cols="8" xl="8" lg="7" md="7" sm="5">
                    <!-- <v-container> -->
                      <v-row align="center">
                        <v-col cols="12" class="text-left display-3 hidden-xs-only">404</v-col>
                        <v-col
                          cols="12"
                          class="text-center title text-uppercase font-weight-bold hidden-sm-and-up"
                        >404 page not found</v-col>
                      </v-row>
                      <v-row>
                        <v-container
                          class="text-left display-2 text-uppercase font-weight-bold hidden-xs-only"
                        >page not found</v-container>
                      </v-row>
                    <!-- </v-container> -->
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-container>
        </v-row>
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