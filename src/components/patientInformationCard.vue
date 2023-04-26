<template>
  <v-sheet>
    <div v-for="kkk in Object.keys(patientInfo)" :key="kkk" > <b> {{$commonfunc.capitalize(kkk)  }}:&nbsp;</b> {{patientInfo[kkk]}}</div>
  </v-sheet>
</template>
<script>
export default {
  name: "patientInformationCard",
  props:{
    patientInfo:{
      default:()=>{}
    }
  }
}
</script>

<style scoped>

</style>