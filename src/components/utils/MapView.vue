<template>
  <vl-map
    class="vlmap"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    data-projection="EPSG:4326"
    :style="mapStyle"
  >
    <vl-view :zoom.sync="mapZoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
    
     <vl-overlay
        :position="location"
        positioning="bottom-center"
      >
      <v-container class="pa-0">
          <v-row no-gutters align-content="center">
            <v-col cols="12" class="text-center" align-center>
              <icon-box iconName="placeholder-logo" height="50" width="50" viewBox="0 0 512 512">
                <placeholder-icon></placeholder-icon>
              </icon-box>
            </v-col>
          </v-row>
        </v-container>
     </vl-overlay>
  </vl-map>
</template>

<script>
import Icon from "../utils/Icon";
import PlaceholderIcon from "../Icons/Placeholder";
export default {
  name: "map-view",
  data() {
    return {
      rotation:0,
      buffer:0,
    }
  },
  props:{
    location:{
      value:Array,
      default:()=>{
        return [125.61244, 7.07246]
      }
    },
    zoom:{
      value:Number,
      default:()=>{
        return 17
      }
    },
    mapStyle:{
      value:String,
      default:()=>{
        return null;
      }
    }
  },
  computed: {
    center:{
      get:function(){
        return this.location        
      },
      set:function(newval){
        this.buffer = newval
      }
    },
    mapZoom:{
      get:function(){
        return this.zoom        
      },
      set:function(newval){
        this.buffer = newval
      }
    },
  },
  components:{
    'icon-box':Icon,
    'placeholder-icon':PlaceholderIcon
  }
};
</script>

<style scoped>

</style>