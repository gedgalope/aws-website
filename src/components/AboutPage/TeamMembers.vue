<template>
  <v-container fluid class="team-members">
    <v-row>
      <template v-for="(member,index) in awsMembers">
        <v-col :key="index" xs="12" sm="12" md="4" lg="3" xl="3">
          <v-card>
            <v-card-title>
              <v-hover v-slot:default="{hover}" >
                <v-container fluid>
                  <v-row justify="center">
                    <icon-handler
                      class="img-container"
                      viewBox="0 0 444.059 444.059"
                      iconName="male-graduate"
                      width="300px"
                      height="300px"
                      iconColor="primary"
                      v-if="member.gender === male"
                      v-show="!hover"
                    >
                      <male-graduate-icon></male-graduate-icon>
                    </icon-handler>
                    <icon-handler
                      class="img-container"
                      viewBox="0 0 420.609 420.609"
                      iconName="female-graduate"
                      v-else
                      width="300px"
                      height="300px"
                      iconColor="primary"
                      v-show="!hover"
                    >
                      <female-graduate-icon></female-graduate-icon>
                    </icon-handler>
                  </v-row>
                  <v-row>
                    <v-img
                      class="img-container"
                      :src="member.imgURL"
                      v-show="hover"
                      width="300px"
                      height="300px"
                    ></v-img>
                  </v-row>
                </v-container>
              </v-hover>
            </v-card-title>
            <v-container>
              <v-row>
                <v-container fluid class="text-center subtitle-1">{{member.name}}</v-container>
              </v-row>
              <v-row>
                <v-container fluid class="text-center subtitle-2 mb-4">{{member.position}}</v-container>
              </v-row>
              <v-row justify="center">
                <v-divider vertical></v-divider>
                <v-col class="pa-0 ma-0" align="center" cols="2">
                  <v-btn text icon color="#1877f2">
                    <v-icon :disabled="member.social.fb === null" dmedium @click="pushSocial(member.social.fb,false)">mdi-facebook</v-icon>
                  </v-btn>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="pa-0 ma-0" align="center" cols="2">
                  <v-btn text icon color="#1da1f2">
                    <v-icon :disabled="member.social.twitter === null" dmedium @click="pushSocial(member.social.twitter,false)">mdi-twitter</v-icon>
                  </v-btn>
                </v-col>
                <v-divider vertical></v-divider>

                <v-col class="pa-0 ma-0" align="center" cols="2">
                  <v-btn text icon>
                    <v-icon :disabled="member.social.email === null" dmedium @click="pushSocial(member.social.email,true)">mdi-email-box</v-icon>
                  </v-btn>
                </v-col>
                <v-divider vertical></v-divider>
              </v-row>
            </v-container>
          </v-card>
          <v-container class="text-center"></v-container>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import IconVue from "../utils/Icon.vue";
import MaleGraduate from "../Icons/MaleGraduate";
import FemaleGraduate from "../Icons/FemaleGraduate";

export default {
  name: "team-members",
  data() {
    return {
      male: "male"
    };
  },
  components: {
    "icon-handler": IconVue,
    "male-graduate-icon": MaleGraduate,
    "female-graduate-icon": FemaleGraduate
  },
  computed: {
    ...mapGetters({
      awsMembers: "data/getMembers"
    })
  },
  methods:{
    pushSocial(url,mail){
      if(mail){
        window.open(`mailto:${url}?subject=AWS Inquiries`)
      }
      window.open(url);
    }
  }
};
</script>

<style scoped>
.img-container {
  border-radius: 50%;
  background-color: #E3F2FD;
}
</style>