<template>
  <v-sheet  >
    <span class="text-left text-body-2 font-weight-bold">{{name}}:&nbsp;</span>
    <v-btn-toggle  active-class="" >
      <v-btn style="text-transform: none" v-for="kkk in Object.keys(colorMap)"  :color="colorMap[kkk]" dark label x-small>{{ $commonfunc.capitalize(kkk) }}</v-btn>
    </v-btn-toggle>
  </v-sheet>

</template>

<script>

export default {
  name: "LegendCategoryCards",
  props:{
    name:{
      default:"",
    },
    colorMap:{
      default:()=>{}
    }
  }
}
</script>

<style scoped>

</style>