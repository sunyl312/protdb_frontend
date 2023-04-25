<template>
  <div>
    <expand-panel  :expand_at_start="false" title-name="Help">
      <template #title>
        <v-icon small :color="$store.state.mainColor" >mdi-heart</v-icon>  Help
      </template>
      <v-sheet outlined rounded class=" px-3 py-6">
        <legend-pval-summary></legend-pval-summary>
<!--        <legend-category-cards name="Biomarker Category" :color-map="$store.state.chipColors.biomarker_category" ></legend-category-cards>-->
<!--        <legend-category-cards name="Quality" :color-map="$store.state.chipColors.quality" ></legend-category-cards>-->
        <legend-hint-hidden-table-columns></legend-hint-hidden-table-columns>
      </v-sheet>
    </expand-panel>
    <vxe-toolbar custom export></vxe-toolbar>
    <slot name="header"></slot>
    <vxe-table
      :data="study.tableData"
      :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
      :export-config="{}"
      :loading="study.pageLoading"
      border
      empty-text="Empty"
      max-height="700"
      round
      stripe
  >
    <vxe-column field="Study_id" resizable title="Study" width="150px">
      <template #default="{row}">
        <a class="font-weight-bold"
           @click="$commonfunc.openDetailAtNewPage(row.Study_id,'browse/study')">{{
            row.Study_id
          }}</a>
      </template>
    </vxe-column>
    <vxe-column field="Nsubject" resizable title="#Subject" width="80px">
      <template #default="{row}">
        {{row.Nsubject == 0 ? 'NA' : row.Nsubject}}
      </template>
    </vxe-column>
    <vxe-column field="PMID" resizable title="Publication" width="100px"></vxe-column>
    <vxe-column field="Condition" min-width="250px" resizable title="Condition"></vxe-column>
    <vxe-column field="Disease_type" resizable title="Disease" width="180px">
    </vxe-column>
    <vxe-column field="protein" min-width="350px" resizable title="Protein">
      <template #default="{row}">
        <category-list :dat_str_map="row.protein"  :max_number_show="10" ></category-list>
      </template>
    </vxe-column>
    <vxe-column field="Trait_ontology_name" min-width="200px" resizable title="Trait">
    </vxe-column>
    <!--                <vxe-column field="Tissue" resizable title="Tissue" width="150px">-->
    <!--                  <template #default="{row}">-->
    <!--                    <category-list :dat_str_map="row.tissue"></category-list>-->
    <!--                  </template>-->
    <!--                </vxe-column>-->
    <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
      <template #default="{row}">
        <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
      </template>
    </vxe-column>

  </vxe-table>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import PercentBarItemsPval from "@/components/percentBarItemsPval";
import CategoryList from "@/components/categoryList";
import ExpandPanel from "@/components/expandPanel";
import LegendHintHiddenTableColumns from "@/components/helper/LegendHintHiddenTableColumns";
import LegendCategoryCards from "@/components/helper/LegendCategoryCards";
import LegendPvalSummary from "@/components/helper/LegendPvalSummary";
export default {
  components: {
    LegendPvalSummary,
    LegendCategoryCards, LegendHintHiddenTableColumns, ExpandPanel, CategoryList, PercentBarItemsPval},
  name: "browseStudyTable",
  props:['study']
}
</script>

<style scoped>

</style>