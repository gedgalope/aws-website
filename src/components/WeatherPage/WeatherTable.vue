<template>
  <v-container fluid class="weather-table text-center">
    <v-card>
      <v-card-title>
        <v-container class="text-center display-1 text-uppercase font-weight-bold pa-0 ma-0" fluid>Tabular Data</v-container>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "weather-table",
  props: {
    dateFrom: {
      type: String,
      default: function() {
        return null;
      }
    },
    dateTo: {
      type: String,
      default: function() {
        return null;
      }
    },
    selected: {
      type: String,
      default: function() {
        return "AWS Roxas";
      }
    }
  }
};
</script>

<style scoped>
</style>