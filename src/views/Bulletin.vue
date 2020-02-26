<template>
  <div class="bulletin-view">
    <v-container fluid class="hidden-sm-and-down">
      <v-row no-gutters align-start>
        <v-col style="min-width:75%; height:100%">
          <bulletin-map></bulletin-map>
        </v-col>
        <v-col style="min-width:25%; min-height:100%">
          <bulletin-values></bulletin-values>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="hidden-md-and-up">
      <page-not-found bodyMessage="This page is only available for large viewports"></page-not-found>
    </v-container>
  </div>
</template>

<script>
import BulletinMap from "../components/BulletinPage/BulletinMap";
import BulletinValuesVue from "../components/BulletinPage/BulletinValues.vue";
import PageNotFoundVue from './PageNotFound.vue';
export default {
  name: "bulletin-view",
  components: {
    "bulletin-map": BulletinMap,
    "bulletin-values": BulletinValuesVue,
    "page-not-found":PageNotFoundVue
  },
  computed: {
  },
};
</script>

<style scoped>
</style>