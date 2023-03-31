<template>
  <v-app
      app
  >
    <header-bar></header-bar>
    <v-sheet class="py-1">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="11">
          <v-tabs centered>
            <v-tab style="text-transform: none">
              <v-icon>mdi-home</v-icon>
              Home
            </v-tab>
            <v-divider class="mx-1" inset vertical></v-divider>
            <!--            <v-tab style="text-transform: none"> <v-icon>mdi-pill-multiple</v-icon> Biomarker</v-tab>-->

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
                    <v-icon>mdi-grain</v-icon>
                    Association
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
                      <v-icon>mdi-clover</v-icon>
                      &nbsp; Protein
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_trait"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-star-four-points</v-icon>
                      &nbsp; Trait
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item

                      to="/browse_study"
                  >
                    <v-list-item-title>
                      <v-icon>mdi-opacity</v-icon>
                      &nbsp; Study
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_publication"

                  >
                    <v-list-item-title>
                      <v-icon>mdi-book</v-icon>
                      &nbsp; Publication
                    </v-list-item-title>
                  </v-list-item>

                </v-list>
              </v-menu>

            </v-tab>


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
                    <v-icon>mdi-pill-multiple</v-icon>
                    Biomarker
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
                      to="/browse_association"
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


            <!--            <v-tab style="text-transform: none">-->
            <!--              <v-icon>mdi-liquid-spot</v-icon>-->
            <!--              Disease-->
            <!--            </v-tab>-->
            <!--            <v-tab style="text-transform: none">-->
            <!--              <v-icon>mdi-human-male-male</v-icon>-->
            <!--              Tissue-->
            <!--            </v-tab>-->


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
                      to="/browse_association"
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


            <v-divider class="mx-1" inset vertical></v-divider>
            <v-tab style="text-transform: none">
              <v-icon>mdi-webhook</v-icon>
              Knowledge Graph
            </v-tab>
            <v-divider class="mx-1" inset vertical></v-divider>
            <v-tab style="text-transform: none">
              <v-icon>mdi-download-multiple</v-icon>
              Downloads&API
            </v-tab>
            <v-tab style="text-transform: none">
              <v-icon>mdi-hammer</v-icon>
              Toolkit
            </v-tab>
            <v-divider class="mx-1" inset vertical></v-divider>
            <v-tab style="text-transform: none">
              <v-icon>mdi-chart-line</v-icon>
              Statistic
            </v-tab>
            <v-tab style="text-transform: none">
              <v-icon>mdi-heart</v-icon>
              Help
            </v-tab>
            <v-divider class="mx-1" inset vertical></v-divider>
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
