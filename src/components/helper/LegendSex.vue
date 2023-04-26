<template>
  <v-sheet>
      <span class="text-left font-weight-bold">Sex:&nbsp;</span>
    <v-btn-toggle>
      <v-btn style="text-transform: none" color="pink" dark label x-small> Female</v-btn>
      <v-btn style="text-transform: none" color="teal" dark label x-small>Male</v-btn>
      <v-btn style="text-transform: none" color="blue" dark label x-small>Female & Male</v-btn>
    </v-btn-toggle>
  </v-sheet>
</template>

<script>
export default {
  name: "LegendSex"
}
</script>

<style scoped>

</style>
