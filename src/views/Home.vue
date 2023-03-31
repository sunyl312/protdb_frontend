<template>
  <!--  <v-sheet height="60%"  :style="{backgroundImage:'url('+bgurl+')',backgroundSize:'100%' }" >-->
  <v-sheet>
    <v-sheet class="d-flex align-center " color="green lighten-3" style="padding-bottom: 105px">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" cols="11">
          <div style="display: flex;flex-display:column; align-items: center;height: 100px">
            <h1 class="black--text lighten-1 font-weight-bold">Protdb: curated protein biomarker in disease</h1>
          </div>
          <v-card class="pa-8">
            <v-row>
              <v-col cols="8">
                <v-row>
                  <v-col cols="12">
                    <v-card elevation="0">
                      <v-card-subtitle class="px-0">About</v-card-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque magni molestiae
                      repudiandae sapiente temporibus velit. Cum eligendi explicabo fugiat laboriosam modi nesciunt
                      omnis quibusdam, quod suscipit tempora voluptas!
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur cum minus
                      obcaecati quia quo reiciendis sed totam. Doloribus expedita fugit, illo labore minima quae
                      quisquam repudiandae. Enim, eos, fugiat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid aut, consequuntur
                      delectus dolor ducimus eos harum mollitia officiis omnis pariatur placeat, praesentium quis
                      ratione repellendus sunt? Dicta, suscipit?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at, autem delectus, illo iste
                      minima minus odio placeat provident repellendus tempora ut velit voluptas voluptatem voluptatum.
                      Atque autem laborum ut.
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card elevation="0">
                      <v-card-subtitle class="px-0">Search</v-card-subtitle>
                      <v-text-field dense flat full-width hide-details outlined clearable ></v-text-field>

                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-sheet class="body-2">
                      <v-icon>mdi-information-outline</v-icon>
                      To get the best experience, please visit us using the latest version of Google Chrome, Firefox,
                      Safari or Opera.
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-hover v-slot="{hover}">
                  <v-card
                      :elevation="hover?1:0"
                      class="pa-2"
                  >

                    <v-card-subtitle>Statistics</v-card-subtitle>

                    <v-row no-gutters>


                      <v-col v-for='item in statistic_data' cols="4">
                        <v-hover v-slot="{ hover }">
                          <a href="" style="text-decoration: none">
                            <v-card :elevation="hover?1:0" class="text-center px-2 py-3 ma-1">

                              <div
                                  class="text-h4"
                              >
                                <v-icon :color="item.color">{{ item.icon }} mdi-36px</v-icon>
                                {{ item.num }}
                              </div>
                              <v-divider dark></v-divider>

                              <div :class="[item.fontsize]"
                                   v-html="item.name"></div>


                            </v-card>

                          </a>

                        </v-hover>


                      </v-col>
                    </v-row>

                  </v-card>
                </v-hover>

              </v-col>
            </v-row>
          </v-card>

        </v-col>
        <v-spacer></v-spacer>
      </v-row>


    </v-sheet>
    <v-sheet color="blue lighten-3 pb-16">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="11">
          <v-row>
            <v-col cols="3">
              <v-card height="300" style="margin-top: -80px">
                <v-card-subtitle class="text-center">Tookit</v-card-subtitle>
                <v-card-text></v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card height="300" style="margin-top: -80px">
                <v-card-subtitle class="text-center">Updates</v-card-subtitle>
                <v-card-text></v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card height="300" style="margin-top: -80px">
                <v-card-subtitle class="text-center">How to Cite</v-card-subtitle>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci architecto
                  blanditiis corporis cumque debitis delectus earum facilis illo, modi nam optio perferendis provident
                  quam quasi sed velit veritatis, voluptatem!
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card height="300" style="margin-top: -80px">
                <v-card-subtitle class="text-center">Related Links</v-card-subtitle>
                <v-card-text></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-sheet>
  </v-sheet>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bgurl: require("../assets/img/background8.jpg"),

    }
  },
  computed: {
    statistic_data() {
      return [
        {
          to: "/",
          icon: "mdi-information",
          name: "Protein",
          color: "teal",
          fontsize: 'text-h5',
          num: 123
        }, {
          to: "/",
          icon: "mdi-clock",
          name: "Study",
          color: "purple",
          fontsize: 'text-h5',
          num: 45
        }, {
          to: "/",
          icon: "mdi-account",
          name: "Trait",
          color: "yellow",
          fontsize: 'text-h5',
          num: 553
        }, {
          to: "/",
          icon: "mdi-book",
          name: "Publication",
          color: "teal",
          fontsize: 'text-h5',
          num: 123
        }, {
          to: "/",
          icon: "mdi-timer",
          name: "Disease",
          color: "pink",
          fontsize: 'text-h5',
          num: 225
        }, {
          to: "/",
          icon: "mdi-cloud",
          name: "Biomarker",
          color: "blue",
          fontsize: 'text-h5',
          num: 5324
        }, {
          to: "/",
          icon: "mdi-chemical-weapon",
          name: "Tissue",
          color: "red",
          fontsize: 'text-h5',
          num: 14435
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>