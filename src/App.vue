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
                  grow
                  show-arrows
          >
<!--            key=0-->
            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                to="/">
              <v-icon color="#000000" >mdi-home</v-icon>
              Home
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <!--            key=1-->
            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                to="/browse">
              <v-icon color="#000000" >mdi-pill-multiple</v-icon>
              Biomarker
            </v-tab>
            <!--            key=2-->
<!--            <v-tab-->
<!--                class="px-0"-->
<!--                style="text-transform: none"-->
<!--            >-->
<!--              <v-menu close-delay="400" offset-y open-on-hover>-->
<!--                <template v-slot:activator="{ on, attrs }">-->
<!--                  <v-btn-->
<!--                      id="browseTabID"-->
<!--                      color="white"-->
<!--                      elevation="0"-->
<!--                      height="100%"-->
<!--                      style="text-transform: none"-->
<!--                      v-bind="attrs"-->
<!--                      width="100%"-->
<!--                      v-on="on"-->
<!--                  >-->
<!--                    <v-icon>mdi-shape-plus</v-icon>-->
<!--                    Category-->
<!--                    <v-icon>mdi-menu-down</v-icon>-->
<!--                  </v-btn>-->
<!--                </template>-->
<!--                <v-list-->
<!--                    class="text-left"-->
<!--                >-->
<!--                  <v-list-item-->
<!--                      to="/browse_association"-->
<!--                  >-->
<!--                    <v-list-item-title>-->
<!--                      <v-icon>mdi-eye-outline</v-icon>-->
<!--                      &nbsp; Diagnosis-->
<!--                    </v-list-item-title>-->
<!--                  </v-list-item>-->
<!--                  <v-list-item-->
<!--                      to="/browse_trait"-->
<!--                  >-->
<!--                    <v-list-item-title>-->
<!--                      <v-icon>mdi-cryengine</v-icon>-->
<!--                      &nbsp; Prognosis-->
<!--                    </v-list-item-title>-->
<!--                  </v-list-item>-->
<!--                  <v-list-item-->

<!--                      to="/browse_study"-->
<!--                  >-->
<!--                    <v-list-item-title>-->
<!--                      <v-icon>mdi-eyedropper-variant</v-icon>-->
<!--                      &nbsp; Drug Response-->
<!--                    </v-list-item-title>-->
<!--                  </v-list-item>-->


<!--                </v-list>-->
<!--              </v-menu>-->
<!--            </v-tab>-->
            <!--            key=3-->
            <v-tab
                class="px-0"
                style="text-transform: none"
            >
              <v-menu close-delay="400" offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                      :style="{color:$store.state.currtab == 2 ?'black' : 'black' }"
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
                      @click="changeTabKey($store.state.currtab)"
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
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                      :style="{color:$store.state.currtab == 3 ? 'black' : 'black' }"
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
                      @click="changeTabKey($store.state.currtab)"
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

            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                to="/">
              <v-icon color="#000000" >mdi-leaf</v-icon>
              Sample
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab
                class="mt-2 "
                style="text-transform: none;color: #000000"
                to="/knowledgegraph">
              <v-icon color="#000000" >mdi-webhook</v-icon>
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
                      color="white"
                      elevation="0"
                      height="100%"
                      style="text-transform: none"
                      v-bind="attrs"
                      width="100%"
                      v-on="on"
                      :style="{color:$store.state.currtab == 6 ? 'black' : 'black' }"

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
                      to="/tookit/enrichment"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-star-four-points</v-icon>
                      &nbsp; Enrichment
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item

                      to="/tookit/batchanno"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-opacity</v-icon>
                      &nbsp; Batch Annotation
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/tookit/downloads"
                      @click="changeTabKey($store.state.currtab)"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-download-multiple</v-icon>
                      &nbsp; Downloads
                    </v-list-item-title>
                  </v-list-item>                  <v-list-item
                      to="/tookit/api"
                      @click="changeTabKey($store.state.currtab)"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-satellite-uplink</v-icon>
                      &nbsp; API
                    </v-list-item-title>
                  </v-list-item>

                </v-list>
              </v-menu>
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                to="/statistic">
              <v-icon color="#000000" >mdi-chart-line</v-icon>
              Statistic
            </v-tab>
            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                to="/">
              <v-icon color="#000000" >mdi-heart</v-icon>
              Help
            </v-tab>
<!--            <v-divider class="mx-1" inset vertical></v-divider>-->
            <v-tab
                class="mt-2 "

                style="text-transform: none;color: #000000"
                href="https://ngdc.cncb.ac.cn/macdb/home" target="_blank">
              <v-icon color="#000000" >mdi-arrow-top-right-bold-box-outline</v-icon>
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
