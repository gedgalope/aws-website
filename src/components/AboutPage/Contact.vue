<template>
  <v-container fluid class="contact">
    <custom-divider label="Contact Us"></custom-divider>
    <v-row class="pt-4 mt-4" justify="center">
      <v-col xs="12" sm="12" md="6" lg="6" xl="7">
        <map-view></map-view>
      </v-col>
    </v-row>
    <v-row>
      <contact-form></contact-form>
    </v-row>
  </v-container>
</template>

<script>
import DividerVue from "../utils/Divider";
import MapViewVue from "../utils/MapView.vue";
import ContactFormVue from "../ContactPage/ContactForm.vue";
export default {
  name: "contact",
  components: {
    "custom-divider": DividerVue,
    "map-view": MapViewVue,
    "contact-form": ContactFormVue
  }
};
</script>

<style scoped>
</style>