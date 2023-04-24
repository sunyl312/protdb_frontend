<template>
  <div class="px-4">
    <v-row>
      <v-col v-for="item in dat" :key="item.name" cols="3">
        <v-card
            elevation="0"
            outlined
        >
          <v-card-title class=" font-weight-bold text-body-2">
            {{ Capitalize(item.name) }}
          </v-card-title>

          <v-divider></v-divider>

          <v-list class="overflow-y-auto" dense height="250">
            <v-list-item v-if="item.top1 != null" @click="$commonfunc.openAtNewPageProteinDetail(item.top1.protein_entry)">
              <v-list-item-icon>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-left ">

                {{ item.top1 && item.top1.protein_name || "" }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.top2 != null" @click="$commonfunc.openAtNewPageProteinDetail(item.top2.protein_entry)">
              <v-list-item-icon>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-left">
                {{ item.top2 && item.top2.protein_name || "" }}
                <!--              ({{item.top2 && item.top2.cid || ""}})-->
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.top3 != null" @click="$commonfunc.openAtNewPageProteinDetail(item.top3.protein_entry)">
              <v-list-item-icon>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-left">
                {{ item.top3 && item.top3.protein_name || "" }}
                <!--              ({{item.top3 && item.top3.cid || ""}})-->
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.top4 != null" @click="$commonfunc.openAtNewPageProteinDetail(item.top4.protein_entry)">
              <v-list-item-icon>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-left">
                {{ item.top4 && item.top4.protein_name || "" }}
                <!--              ({{item.top4 && item.top4.cid || ""}})-->
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.top5 != null" @click="$commonfunc.openAtNewPageProteinDetail(item.top5.protein_entry)">
              <v-list-item-icon>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-left">
                {{ item.top5 && item.top5.protein_name || "" }}
                <!--              ({{item.top5 && item.top5.cid || ""}})-->
              </v-list-item-content>
            </v-list-item>

          </v-list>

        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "topProteinBy",
  props: {
    dat: {
      default: () => []
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    Capitalize(t) {
      return _.capitalize(t)
    }
  }
}
</script>

<style scoped>

</style>
