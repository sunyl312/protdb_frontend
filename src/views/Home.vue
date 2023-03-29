<template>
  <v-sheet height="60%"  :style="{backgroundImage:'url('+bgurl+')',backgroundSize:'100%' }" >
    Home
  </v-sheet>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      bgurl:require("../assets/img/background8.jpg")
    }
  }
}
</script>

<style scoped>

</style>