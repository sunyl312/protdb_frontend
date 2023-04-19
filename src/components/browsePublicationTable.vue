<template>
  <div>
    <vxe-toolbar custom export></vxe-toolbar>
    <slot name="header"></slot>
    <vxe-table
        :data="publication.tableData"
        :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
        :export-config="{}"
        :loading="publication.pageLoading"
        border
        empty-text="Empty"
        height="auto"
        max-height="700"
        round
        stripe
    >
      <vxe-column resizable type="expand" width="50">
        <template #content="{ row, rowIndex }">

          <v-sheet class="mx-4 my-2">
            <b>Abstract</b><br/>
            <v-sheet class="text-justify">
              {{ row.Abstract }}
            </v-sheet>

          </v-sheet>

        </template>
      </vxe-column>
      <vxe-column field="Title" resizable title="Title" width="450px">
        <template #default="{row}">
        <a class="font-weight-bold"
           @click="$commonfunc.openDetailAtNewPage(row.PMID,'browse/publication')">{{
            row.Title
          }}</a>
        </template>
      </vxe-column>
      <vxe-column field="Nstudy" resizable title="#Study" width="80px"></vxe-column>
      <vxe-column field="Nsubject" resizable title="#Subject" width="100px">
        <template #default="{row}">
          {{row.Nsubject == 0 ? 'NA' : row.Nsubject}}
        </template>
      </vxe-column>
      <vxe-column field="Biomarker_category" resizable title="Biomarker Category" width="180px">
        <template #default="{row}">
                    <span><category-list :color_map="$store.state.chipColors.biomarker_category"
                                         :dat_str_map="row.Biomarker_category"></category-list></span>
        </template>
      </vxe-column>
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
      <vxe-column field="Journal_Title" resizable title="Journal" width="150px">

      </vxe-column>
      <vxe-column field="publish_info" resizable title="Publish Information" width="150px">
        <template #default="{row}">
          <div>Volume:&nbsp;{{ row.publish_info.vol }}</div>
          <div>Issue:&nbsp;{{ row.publish_info.issue }}</div>
          <div>Pages:&nbsp;{{ row.publish_info.page }}</div>
          <div>Date:&nbsp;{{ row.publish_info.date }}</div>
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
  name: "browsePublicationTable",
  props:['publication']
}
</script>

<style scoped>

</style>