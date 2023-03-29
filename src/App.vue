<template>
  <v-app
  app
  >
    <header-bar></header-bar>
    <v-sheet class="py-1">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="10">
          <v-tabs centered >
            <v-tab style="text-transform: none"> <v-icon >mdi-home</v-icon> Home</v-tab>
            <v-divider  class="mx-1" vertical inset></v-divider>
            <v-tab style="text-transform: none"> <v-icon>mdi-pill-multiple</v-icon> Biomarker</v-tab>
            <v-tab style="text-transform: none"> <v-icon>mdi-liquid-spot</v-icon> Disease</v-tab>
            <v-tab style="text-transform: none"> <v-icon>mdi-human-male-male</v-icon> Tissue</v-tab>
            <v-divider  class="mx-1" vertical inset></v-divider>
            <v-tab style="text-transform: none"> <v-icon>mdi-webhook</v-icon> Knowledge Graph</v-tab>

            <v-divider  class="mx-1" vertical inset></v-divider>
            <v-tab style="text-transform: none"> <v-icon>mdi-hammer</v-icon> Toolkit</v-tab>
            <v-divider  class="mx-1" vertical inset></v-divider>
            <v-tab style="text-transform: none"> <v-icon>mdi-heart</v-icon> Help</v-tab>
            <v-divider  class="mx-1" vertical inset></v-divider>
            <v-tab style="text-transform: none"> <v-icon>mdi-arrow-top-right-bold-box-outline</v-icon> MACdb</v-tab>
          </v-tabs>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

    </v-sheet>

    <v-main>
      <router-view/>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>

import HeaderBar from "@/views/HeaderBar";
import FooterBar from "@/views/FooterBar";
export default {
  name: 'App',
  components: {FooterBar, HeaderBar},
  data: () => ({
    //
  }),
};
</script>
