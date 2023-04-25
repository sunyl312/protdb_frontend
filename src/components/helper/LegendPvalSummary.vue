<template>
<!--  <v-row align="center" class="mb-1" no-gutters style="display: block">-->
<!--    <v-col class="text-left">-->
      <v-sheet  >
        <span class="text-left text-body-2 font-weight-bold">Pval Summary:&nbsp;</span>
        <v-btn-toggle  active-class="" >
        <v-btn  color="pink" dark label x-small>p ≤ 0.001</v-btn>
        <v-btn  color="blue" dark label x-small>0.001 < p ≤ 0.01</v-btn>
        <v-btn  color="teal" dark label x-small>0.01 < p ≤ 0.05</v-btn>
        <v-btn  color="yellow darken-3" dark label x-small>p > 0.05</v-btn>
        <v-btn  color="grey" dark label x-small>NA</v-btn>
        </v-btn-toggle>
      </v-sheet>

<!--    </v-col>-->
<!--    <v-spacer></v-spacer>-->
<!--  </v-row>-->
</template>

<script>
export default {
  name: "LegendPvalSummary"
}
</script>

<style scoped>

</style>
