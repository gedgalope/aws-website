<template>
  <v-container class="partners" fluid >
    <v-row>
      <v-col cols="3">
        <v-img aspect-ratio="1" contain :src="AdDULogo" :height="partnerStyle"></v-img>
      </v-col>
      <v-col cols="3">
        <v-img aspect-ratio="1" contain :src="apolloLogo" :height="partnerStyle"></v-img>
      </v-col>
      <v-col cols="3">
        <v-img aspect-ratio="1" contain :src="CGOD" :height="partnerStyle"></v-img>
      </v-col>
      <v-col aspect-ratio="1" cols="3">
        <v-img contain :src="sevenEleven" :height="partnerStyle"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdDULogo from "../../assets/AdDU.png";
import apolloLogo from "../../assets/apollo.png";
import CGOD from "../../assets/cgod.png";
import sevenEleven from "../../assets/seven.png";
export default {
  name: "partners",
  data() {
    return {
      AdDULogo: AdDULogo,
      apolloLogo: apolloLogo,
      CGOD: CGOD,
      sevenEleven: sevenEleven
    };
  },
  props:{
    partnerStyle:{
      type:String,
      default: ()=>{
        return null;
      }
    }
  }
};
</script>

<style scoped>
</style>