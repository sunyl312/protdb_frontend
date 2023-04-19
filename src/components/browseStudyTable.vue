<template>
  <div>
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
        <category-list :dat_str_map="row.protein"></category-list>
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
export default {
  components: {CategoryList, PercentBarItemsPval},
  name: "browseStudyTable",
  props:['study']
}
</script>

<style scoped>

</style>