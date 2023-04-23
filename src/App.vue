<template>
  <v-app
      app
  >
    <header-bar></header-bar>
    <v-sheet class="py-1">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="11">
          <v-tabs centered
                  :color="$store.state.mainColor"
                  v-model="$store.state.currtab"
                  class="mt-2"
                  centered
                  grow
                  show-arrows
          >
<!--            key=0-->
            <v-tab
                style="text-transform: none"
                to="/">
              <v-icon>mdi-home</v-icon>
              Home
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <!--            key=1-->
            <v-tab
                style="text-transform: none"
                to="/browse"
            >
              <v-icon>mdi-pill-multiple</v-icon>
              Biomarker
            </v-tab>
            <!--            key=2-->
            <v-tab
                class="px-0"
                style="text-transform: none"
            >
              <v-menu close-delay="400" offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      id="browseTabID"
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                  >
                    <v-icon>mdi-shape-plus</v-icon>
                    Category
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list
                    class="text-left"
                >
                  <v-list-item
                      to="/browse_association"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-eye-outline</v-icon>
                      &nbsp; Diagnosis
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_trait"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-cryengine</v-icon>
                      &nbsp; Prognosis
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item

                      to="/browse_study"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-eyedropper-variant</v-icon>
                      &nbsp; Drug Response
                    </v-list-item-title>
                  </v-list-item>


                </v-list>
              </v-menu>
            </v-tab>
            <!--            key=3-->
            <v-tab
                class="px-0"
                style="text-transform: none"
            >
              <v-menu close-delay="400" offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      id="browseTabID"
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                  >
                    <v-icon>mdi-liquid-spot</v-icon>
                    Disease
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list
                    class="text-left"
                >
                  <v-list-item
                      to="/disease/all"
                      @click="changeTabKey(3)"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-chemical-weapon</v-icon>
                      &nbsp; All Diseases
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>

                  <div class="mx-1 mt-1 text-body-2 text-center ">
                    <v-icon small>mdi-star</v-icon>
                    Featured
                    <v-icon small>mdi-star</v-icon>
                  </div>

                  <v-list-item
                      to="/browse_trait"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-zodiac-cancer</v-icon>
                      &nbsp; Cancer
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tab>
            <!--            key=4-->
            <v-tab
                class="px-0"
                style="text-transform: none"
            >
              <v-menu close-delay="400" offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      id="browseTabID"
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                  >
                    <v-icon>mdi-human-male-male</v-icon>
                    Tissue
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list
                    class="text-left"
                >


                  <v-list-item
                      to="/tissue/all"
                      @click="changeTabKey(4)"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-lungs</v-icon>
                      &nbsp; All Tissue
                    </v-list-item-title>
                  </v-list-item>

                  <v-divider></v-divider>

                  <div class="mx-1 mt-1 text-body-2 text-center ">
                    <v-icon small>mdi-star</v-icon>
                    Featured
                    <v-icon small>mdi-star</v-icon>
                  </div>
                  <v-list-item
                      to="/browse_association"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-water-circle</v-icon>
                      &nbsp; Blood
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_trait"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-water-opacity</v-icon>
                      &nbsp;
                      Urine
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tab>
            <v-tab style="text-transform: none">
              <v-icon>mdi-leaf</v-icon>
              Sample
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab style="text-transform: none">
              <v-icon>mdi-webhook</v-icon>
              Knowledge Graph
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab
                class="px-0"
                style="text-transform: none"
            >
              <v-menu close-delay="400" offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      id="browseTabID"
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                  >
                    <v-icon>mdi-hammer</v-icon>
                    Toolkit
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list
                    class="text-left"
                >

                  <v-list-item
                      to="/browse_trait"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-star-four-points</v-icon>
                      &nbsp; Enrichment
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item

                      to="/browse_study"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-opacity</v-icon>
                      &nbsp; Batch Annotation
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_association"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-download-multiple</v-icon>
                      &nbsp; Downloads&API
                    </v-list-item-title>
                  </v-list-item>

                </v-list>
              </v-menu>
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab to="/statistic" style="text-transform: none">
              <v-icon>mdi-chart-line</v-icon>
              Statistic
            </v-tab>
            <v-tab style="text-transform: none">
              <v-icon>mdi-heart</v-icon>
              Help
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab style="text-transform: none">
              <v-icon>mdi-arrow-top-right-bold-box-outline</v-icon>
              MACdb
            </v-tab>
          </v-tabs>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-sheet>
    <router-view/>

    <v-btn :color="$store.state.mainColor2" dark elevation="1" x-small fab style="position: fixed;bottom: 100px;right: 50px;z-index: 99999999"
           @click="backToTop"  v-if="$route.name != 'home' && $route.name != 'home2'"  ><v-icon small >mdi-format-vertical-align-top</v-icon>
    </v-btn>

    <v-btn :color="$store.state.mainColor2" dark elevation="1" x-small fab style="position: fixed;bottom: 60px;right: 50px;z-index: 99999999"
           v-if="$route.name != 'home' && $route.name != 'home2'"  >
      <citation-download-side-bar></citation-download-side-bar>

    </v-btn>
    <v-sheet class="my-2"></v-sheet>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>

import HeaderBar from "@/views/HeaderBar";
import FooterBar from "@/views/FooterBar";
import citationDownloadSideBar from "@/components/citationDownloadSideBar";
export default {
  name: 'App',
  components: {FooterBar, HeaderBar,citationDownloadSideBar},
  data: () => ({
    //
  }),
  methods:{
    backToTop(){
      window.scrollTo(0,0)
    },
    changeTabKey(key){
      this.$store.state.currtab = key
    }
  },
  mounted() {


  },
};
</script>
