<template>
  <div class="bulletin-map pa-1 ma-1">
    <vl-map
      class="vlmap"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <!-- <template v-for="(coordinates, index) in awsLocations">
        <vl-overlay :key="index" :position="coordinates">
          <v-icon x-large color="#D32F2F">mdi-map-marker</v-icon>
        </vl-overlay>
      </template>-->
      <vl-overlay
        :position="getLocation[currentCoordinate].coordinates"
        positioning="bottom-center"
      >
        <v-container class="pa-0">
          <v-row no-gutters align-content="center">
            <v-col cols="12" align="center">
              <v-img
                :src="getLocation[currentCoordinate].imgUrl"
                max-width="500px"
                height="300px"
                class="py-0 my-0"
                style="border-radius:5px;"
              >
                <v-container fluid class="pa-0 ma-0" style="height:100%;">
                  <v-row align="end" justify="end" style="height:100%">
                    <v-card tile class="card-overlay">
                      <span class="subtitle-2 text-capitalize" style="color:#F5F5F5;" >{{getLocation[currentCoordinate].address}}</span>
                    </v-card>
                  </v-row>
                </v-container>
              </v-img>
            </v-col>
            <v-col cols="12" class="text-center" align-center>
              <icon-box iconName="placeholder-logo" height="50" width="50" viewBox="0 0 512 512">
                <placeholder-icon></placeholder-icon>
              </icon-box>
            </v-col>
          </v-row>
        </v-container>
      </vl-overlay>
    </vl-map>
  </div>
</template>

<script>
// import marker from '../../assets/logo.png'
import { mapState, mapMutations, mapGetters } from "vuex";
import Icon from "../utils/Icon";
import PlaceholderIcon from "../Icons/Placeholder";
var showLocation = 0;

export default {
  name: "bulletin-map",
  data() {
    return {
      zoom: 18,
      center: [125.56013488455194, 7.078142575643639],
      rotation: 0
    };
  },
  computed: {
    ...mapState({
      nextDataset: state => state.utils.nextDataset
    }),
    ...mapGetters({
      getLocation: "maps/getLocation"
    }),
    currentCoordinate: function() {
      var locationCount = this.getLocation.length;

      /*eslint-disable*/
      if (this.nextDataset) {
        // this.tickCurrentDataset(locationCount);
        if (showLocation != locationCount - 1) {
          showLocation++;
        } else {
          showLocation = 0;
        }
      }
      this.tickCurrentDataset(showLocation);
      this.center = this.getLocation[showLocation].coordinates;
      this.zoom = 18;
      return showLocation;
    }
  },
  methods: {
    ...mapMutations({
      tickCurrentDataset: "utils/TICK_CURRENT_DATASET"
    })
  },
  components: {
    "icon-box": Icon,
    "placeholder-icon": PlaceholderIcon
  }
};
</script>

<style scoped>
/* .vlmap{
  max-width: 75%;
  max-height: 100%;
} */
.card-overlay {
  background-color: rgba(97, 97, 97, 0.7) !important;
  height: 15%;
  width: 100%;
}
</style>