<template>
<v-sheet>
  <v-tabs v-model="tab">
    <v-tab style="text-transform: none">Biomarker Category</v-tab>
    <v-tab style="text-transform: none">Aggregated Datasets</v-tab>
    <v-tab style="text-transform: none">Genome Browser</v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
    <v-tab-item>
      <v-sheet class="my-3">
        <vxe-table
            :data="Object.values(row.detail).filter(item=>{return item.Nstudy > 0})"
            border>
          <vxe-column resizable type="seq" width="50"></vxe-column>
          <vxe-column resizable title="Biomarker Category" width="180px">
            <template #default="{row}">
              {{ row.Biomarker_category }}
            </template>
          </vxe-column>
          <vxe-column resizable title="#Study" width="180px">
            <template #default="{row}">
              {{ row.Nstudy }}
            </template>
          </vxe-column>
          <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
          <vxe-column field="quality" resizable title="Quality" width="150px">
            <template #default="{row}">
              <category-list :color_map="$store.state.chipColors.quality"
                             :dat_str_map="row.quality"></category-list>
            </template>
          </vxe-column>
          <vxe-column field="tissue" resizable title="Tissue" width="150px">
            <template #default="{row}">
              <category-list :dat_str_map="row.tissue"></category-list>
            </template>
          </vxe-column>
          <vxe-column field="trait" resizable title="Trait" width="150px">
            <template #default="{row}">
              <category-list :dat_str_map="row.trait"></category-list>
            </template>
          </vxe-column>
          <vxe-column field="disease" resizable title="Disease" width="150px">
            <template #default="{row}">
              <category-list :dat_str_map="row.disease"></category-list>
            </template>
          </vxe-column>
          <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
            <template #default="{row}">
              <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
            </template>
          </vxe-column>
        </vxe-table>
      </v-sheet>
    </v-tab-item>
    <v-tab-item>
      <v-sheet outlined class="my-3">
        <aggr-dataset-all :protein_id="row.std_Uniprot_ID" ></aggr-dataset-all>
      </v-sheet>
    </v-tab-item>

    <v-tab-item>
      <visualize-genome-browser :uniprot_id="row.std_Uniprot_ID" ></visualize-genome-browser>
    </v-tab-item>
  </v-tabs-items>

</v-sheet>
</template>

<script>

import PercentBarItemsPval from "@/components/percentBarItemsPval";
import CategoryList from "@/components/categoryList";
import AggrDatasetAll from "@/components/aggrDatasetAll";
import VisualizeGenomeBrowser from "@/components/visualizeGenomeBrowser";
export default {
  name: "browseProteinTableExpanded",
  components: {VisualizeGenomeBrowser, AggrDatasetAll, CategoryList, PercentBarItemsPval},
  props:{
    row:{
      default:()=>{},
    }
  },
  data(){
    return{
      tab:0,
    }
  }
}
</script>

<style scoped>

</style>