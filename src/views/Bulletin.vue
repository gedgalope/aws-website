<template>
  <div class="bulletin-view">
    <v-container fluid>
      <v-row no-gutters align-start>
        <v-col style="min-width:75%; min-height:100%">
          <bulletin-map></bulletin-map>
        </v-col>
        <v-col style="min-width:25%; min-height:100%">
          <bulletin-values></bulletin-values>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BulletinMap from "../components/BulletinPage/BulletinMap";
import BulletinValuesVue from "../components/BulletinPage/BulletinValues.vue";
export default {
  name: "bulletin-view",
  components: {
    "bulletin-map": BulletinMap,
    "bulletin-values": BulletinValuesVue
  },
  computed: {
  },
};
</script>

<style scoped>
</style>