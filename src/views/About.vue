<template>
  <v-container fluid class="about">
    <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="9" xl="8">
        <v-card>
          <v-card-title>
            <v-container
              class="display-1 font-weight-bold text-center"
            >Automated Weather Station (AWS)</v-container>
          </v-card-title>
          <v-container>
            <v-row>
              <v-container>
                The Automated Weather Station (AWS) Project of the Ateneo de Davao University aims to contribute in increasing of adaptive capacities of communities. This can be done through data collection and analysis of data for future forecasting and modelling.
                The long term over-all objective of the research is to create models and forecasts on climate patterns and changes of the city and its nearby communities which can be used as management tools in the future in terms of disaster risk reduction and climate change adaptation.
                The data that will be collected from the study could be used for risk management and planning tools for watershed management and can be basis for future payment for environmental services proposals.
              </v-container>
            </v-row>
            <v-row>
              <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <v-img :src="image"></v-img>
              </v-col>
              <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <v-container>
                  <v-row>
                    <v-container
                      class="pa-0 ma-0"
                    >There are four main components to consider in the design of the Automatic Weather Station.</v-container>
                  </v-row>
                  <v-row>
                    <v-container class="pa-0 ma-0">
                      <v-row>
                        <v-col cols="1">
                          <v-icon x-small class>mdi-record</v-icon>
                        </v-col>
                        <v-col
                          cols="11"
                        >First, an AWS should contain a series of automated sensors interconnected to one or more data collecting terminals, or a set of sensors installed in close combination, but not affecting each other, directly connected to a central processing unit (CPU) (Part I, Chapter 1, WMO 2010: WMO Guide to Meteorological Instruments and Methods of Observation).</v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                  <v-row>
                    <v-container class="pa-0 ma-0">
                      <v-row>
                        <v-col cols="1">
                          <v-icon x-small class>mdi-record</v-icon>
                        </v-col>
                        <v-col
                          cols="11"
                        >Second, it must include a CPU to facilitate data acquisition and conversion into a suitable format, proper processing of data for checking and correction, the temporary storage of processed data, and their transmission to a central server.</v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                  <!-- <v-row>
                    <v-container class="pa-0 ma-0">
                      <v-row>
                        <v-col cols="1">
                          <v-icon x-small class="">mdi-record</v-icon>
                        </v-col>
                        <v-col
                          cols="11"
                        >Third, it should include peripheral equipment such as a robust and stable power supply providing sufficient power to the various parts of the station, a real-time clock ensuring precise sequencing of operation, and back-up memory storage for needed redundancy. Topographical description of the city was also taken into account in the identification of the meteorological stations’ locations. Topography pertains to the arrangement of the natural and physical features of an area. According to World Meteorological Organization (WMO) standards, the location should be as flat as possible with minimum obstruction so as not to impede ventilation at the site. Areas of homogeneity, non-homogeneity and areas of transition were roughly estimated using geographical information system (GIS) tools alongside with the identification of the watersheds and elevations of the city.</v-col>
                      </v-row>
                    </v-container>
                  </v-row>-->
                  <v-row>
                    <v-container class="pa-0 ma-0">
                      <v-row>
                        <v-col cols="1">
                          <v-icon x-small class>mdi-record</v-icon>
                        </v-col>
                        <v-col
                          cols="11"
                        >Lastly, for site description process, community partners must be identified within the location for the sustainability of the installed devices. These community partners may be a local government unit (LGU), non-government organizations (NGOs), colleges and universities, privately owned land or industries. A well-founded ground support plays as crucial part in the operation of the system in the long run; therefore the commitment of a community partner is imperative.</v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <team-members></team-members>
    </v-row>
  </v-container>
</template>

<script>
import image from "../assets/aws.jpg";
import TeamMembersVue from "../components/AboutPage/TeamMembers.vue";
export default {
  name: "about",
  data() {
    return {
      image: image
    };
  },
  components: {
    "team-members": TeamMembersVue
  }
};
</script>

<style scoped>
</style>
