<template>
  <!--  <v-sheet height="60%"  :style="{backgroundImage:'url('+bgurl+')',backgroundSize:'100%' }" >-->
  <v-sheet>
    <v-sheet class="d-flex align-center " color="green lighten-3" style="padding-bottom: 105px">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" cols="11">
          <v-sheet min-height="100" class="d-flex flex-row justify-start align-center z-transparent" >
            <img  height="60" class="ma-3" width="60" src="../assets/logo.png" ></img>
            <h1   style="display: inline-block" class=" black--text lighten-1 font-weight-bold"> Protdb: curated protein biomarker in disease</h1>
          </v-sheet>
          <v-card class="pa-8">
            <v-row>
              <v-col cols="12" lg="8" md="8" sm="12" xl="8">
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
                      Atque autem laborum ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et
                      nisi, quas reiciendis saepe sapiente ut! At consectetur dignissimos illo sint. Aperiam assumenda
                      beatae consectetur dolore, eaque libero natus odio! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Aliquam aliquid eius esse est nemo neque nobis nulla odit qui. Commodi debitis
                      eos id inventore libero modi nemo non quasi tempore? Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Accusantium aut beatae dicta dolor esse hic illo maiores non, obcaecati
                      officiis, placeat quae qui quia, quo reprehenderit rerum tenetur ullam voluptas? Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Aliquid doloremque magnam necessitatibus nisi quibusdam.
                      Aliquid culpa cum cumque dignissimos non quasi quia. Eaque expedita incidunt inventore labore
                      minima praesentium voluptas!
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card elevation="0">
                      <v-card-subtitle class="px-0">Search</v-card-subtitle>
                      <v-text-field clearable dense flat full-width hide-details outlined></v-text-field>

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
              <v-col cols="12" lg="4" md="4" sm="12" xl="4">
                <v-hover v-slot="{hover}">
                  <v-card
                      :elevation="hover?1:0"
                      class="pa-2"
                  >
                    <v-card-subtitle>Statistics</v-card-subtitle>
                    <v-row  no-gutters>
                      <v-col   v-for='item in statistic_data' cols="12" lg="4" md="4" sm="6" xl="4">
                        <v-hover v-slot="{ hover }">
                          <a href="" style="text-decoration: none">
                            <v-card class="text-center px-1 py-1   " elevation="0" height="100%">
                              <v-sheet :elevation="hover?1:0" :outlined="hover?true:false"
                                       class=" d-flex align-center px-3 "
                                       min-height="150">
                                <v-sheet :style="{borderBottom: `${$store.state.mainColor} 2px solid`}"
                                         class="mx-auto py-2 "
                                         width="100%">
                                  <div
                                      class="text-h5"
                                  >
                                    <v-icon :color="item.color">{{ item.icon }} mdi-36px</v-icon>
                                    <br/>
                                    {{ item.num.toLocaleString() }}
                                  </div>
                                  <v-divider dark></v-divider>

                                  <div :class="[item.fontsize]"
                                       v-html="item.name"
                                  >

                                  </div>
                                </v-sheet>

                              </v-sheet>


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
            <v-col cols="12" lg="3" md="6" sm="12" xl="3">
              <v-card
                  :style="{marginTop: (( $vuetify.breakpoint.name == 'lg' ||  $vuetify.breakpoint.name == 'xl') ? '-80px' : '12px')}"
                  height="300">
                <v-card-subtitle class="text-center">Tookit</v-card-subtitle>
                <v-card-text>
                  <v-list class="overflow-y-auto overflow-x-hidden" max-height="280">

                    <v-list-item class="align--center" @click="$router.push({name:'knowledgegraph'})">
                      <v-icon :color="$store.state.mainColor">mdi-state-machine</v-icon> &nbsp; &nbsp;
                      <div class="black--text font-weight-bold mr-3">Knowledge Graph</div>
                    </v-list-item>

                    <v-list-item class="align--center" @click="$router.push({name:'tools',query:{subtoolindex:0}})">
                      <v-icon :color="$store.state.mainColor">mdi-key-variant</v-icon> &nbsp; &nbsp;
                      <div class="black--text font-weight-bold mr-3">NameToCid</div>
                    </v-list-item>
                    <v-list-item class="align--center" @click="$router.push({name:'tools',query:{subtoolindex:1}})">
                      <v-icon :color="$store.state.mainColor">mdi-chart-timeline</v-icon> &nbsp; &nbsp;
                      <div class="black--text font-weight-bold mr-3">Enrichment</div>
                      &nbsp;
                    </v-list-item>

                  </v-list>

                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12" xl="3">
              <v-card
                  :style="{marginTop: (( $vuetify.breakpoint.name == 'lg' ||  $vuetify.breakpoint.name == 'xl') ? '-80px' : '12px')}"
                  height="300">
                <v-card-subtitle class="text-center">Updates</v-card-subtitle>
                <v-card-text>
                  <v-sheet class="overflow-y-auto mx-2" height="220">
                    <v-timeline align-top  dense>
                      <v-timeline-item :color="$store.state.mainColor" v-for="(item,idx) in news" :key="idx"  fill-dot icon="mdi-star" small>
                        <v-row class="mr-2" justify="space-between">
                          <v-col class="text-left" cols="12">
                            {{ item.date }} &nbsp;
                            {{ item.text }}
                          </v-col>
                        </v-row>
                      </v-timeline-item>

                    </v-timeline>
                  </v-sheet>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12" xl="3">
              <v-card
                  :style="{marginTop: (( $vuetify.breakpoint.name == 'lg' ||  $vuetify.breakpoint.name == 'xl') ? '-80px' : '12px')}"
                  height="300">
                <v-card-subtitle class="text-center">How to Cite</v-card-subtitle>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci architecto
                  blanditiis corporis cumque debitis delectus earum facilis illo, modi nam optio perferendis provident
                  quam quasi sed velit veritatis, voluptatem!
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12" xl="3">
              <v-card
                  :style="{marginTop: (( $vuetify.breakpoint.name == 'lg' ||  $vuetify.breakpoint.name == 'xl') ? '-80px' : '12px') }"
                  height="300">
                <v-card-subtitle class="text-center">Related Links</v-card-subtitle>
                <v-card-text>
                  <v-list class="overflow-y-auto overflow-x-hidden" max-height="220">
                    <v-list-item v-for="(item,idx) in relatedlinks" :key="idx" :href="item.href" class="align--center"
                                 target="_blank">
                      <v-sheet class="text-left align--center">
                        <v-icon>mdi-link-variant</v-icon> &nbsp;
                        <span class="black--text font-weight-bold mr-3" style="white-space: nowrap">{{ item.name }}</span>

                        <img :src="item.logo" height="20" style="display: inline-block;border: 1px solid darkgrey"></img>

                      </v-sheet>

                    </v-list-item>


                  </v-list>
                </v-card-text>
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
      news: [

        {
          date: "[2023/04/11]",
          text: "Version 1 was released."
        },
      ],
      relatedlinks: [
        {
          href: "https://pubchem.ncbi.nlm.nih.gov/",
          icon: "mdi-link-variant",
          name: "PubChem",
          logo: require('../../public/imgs/related_resource_pubchem.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/ccas/#/",
          icon: "mdi-link-variant",
          name: "CCAS",
          logo: require('../../public/imgs/CCASlogo.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/ascancer/home",
          icon: "mdi-link-variant",
          name: "ASCancer Atlas",
          logo: require('../../public/imgs/ascancer_atlas.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/gsa-human/",
          icon: "mdi-link-variant",
          name: "GSA-Human",
          logo: require('../../public/imgs/gsahuman.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/omix/",
          icon: "mdi-link-variant",
          name: "OMIX",
          logo: require('../../public/imgs/omix.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/cancerscem/",
          icon: "mdi-link-variant",
          name: "CancerSCEM",
          logo: require('../../public/imgs/cancersem.png'),
        },

      ]
    }
  },
  computed: {
    statistic_data() {
      return [
        {
          to: "/",
          icon: "mdi-information",
          name: "Biomarker",
          color: "teal",
          fontsize: 'text-body-1',
          num: 123
        }, {
          to: "/",
          icon: "mdi-clock",
          name: "Study",
          color: "purple",
          fontsize: 'text-body-1',
          num: 45
        }, {
          to: "/",
          icon: "mdi-account",
          name: "Trait",
          color: "yellow",
          fontsize: 'text-body-1',
          num: 553
        }, {
          to: "/",
          icon: "mdi-book",
          name: "Publication",
          color: "teal",
          fontsize: 'text-body-1',
          num: 123
        }, {
          to: "/",
          icon: "mdi-timer",
          name: "Sample",
          color: "pink",
          fontsize: 'text-body-1',
          num: 225
        }, {
          to: "/",
          icon: "mdi-cloud",
          name: "Aggregated Term",
          color: "blue",
          fontsize: 'text-body-2',
          num: 5324
        }, {
          to: "/",
          icon: "mdi-chemical-weapon",
          name: "Disease",
          color: "red",
          fontsize: 'text-body-1',
          num: 14435
        }, {
          to: "/",
          icon: "mdi-chemical-weapon",
          name: "Tissue",
          color: "red lighten-3",
          fontsize: 'text-body-1',
          num: 14435
        },
      ]
    }
  },
  methods: {
    toggleOffSet() {
      if ($vuetify.breakpoint.name == 'md' || $vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl') {
        return '-80px'
      } else {
        return '8px'
      }
    }
  }
}
</script>

<style scoped>
.z-transparent {
  background-color: transparent !important;
  opacity: 2;
  border-color: transparent !important;
}

</style>