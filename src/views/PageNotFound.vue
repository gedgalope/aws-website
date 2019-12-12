<template>
  <v-img :src="backgnd" contain>
    <v-container fluid class="page-not-found">
      <v-row justify="center">
        <v-card color="transparent" flat>
          <v-container>
            <v-row>
              <v-container
                class="text-center display-3 text-uppercase font-weight-bold"
                style="color"
              >page not found</v-container>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
      <v-row justify="center">
        <icon-container iconName="acid-rain" viewBox="0 -36 512.0008 512" width="300" height="300">
          <acid-rain-icon></acid-rain-icon>
        </icon-container>
      </v-row>
      <v-row justify="center">
        <v-col
          class="title font-weight-medium"
          align="center"
          cols="10"
        >We can’t seem to find the page you’re looking for.</v-col>
      </v-row>
      <!-- <v-row class="row-container" align="center" justify="center">
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
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-container>
          </v-row>
        </v-col>
      </v-row>-->
    </v-container>
  </v-img>
</template>

<script>
import AcidRain from "../components/Icons/AcidRain";
import IconVue from "../components/utils/Icon.vue";
import backgnd from "../assets/pexels.jpg";
export default {
  name: "page-not-found",
  data() {
    return {
      backgnd: backgnd
    };
  },
  components: {
    "acid-rain-icon": AcidRain,
    "icon-container": IconVue
  }
};
</script>

<style scoped>
</style>