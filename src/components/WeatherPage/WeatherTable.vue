<template>
  <v-container fluid class="weather-table text-center">
    {{dateFrom}}-{{dateTo}}--{{selected}}
  </v-container>
</template>

<script>
export default {
  name:'weather-table',
  props:{
    dateFrom:{
      type:String,
      default: function(){
        return null;
      }
    },
    dateTo:{
      type:String,
      default:function(){
        return null;
      }
    },
    selected:{
      type:String,
      default:function(){
        return "AWS Roxas"
      }
    }
  }
}
</script>

<style scoped>

</style>