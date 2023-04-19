<template>
  <div>
    <vxe-toolbar custom export></vxe-toolbar>
    <slot name="header"></slot>
    <vxe-table
        :data="trait.tableData"
        :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
        :export-config="{}"
        :loading="trait.pageLoading"
        border
        empty-text="Empty"
        height="auto"
        max-height="700"
        round
        stripe
    >
      <vxe-column resizable type="expand" width="50">
        <template #content="{ row, rowIndex }">

          <vxe-table
              :data="Object.values(row.detail)"
              border>
            <vxe-column resizable type="seq" width="50"></vxe-column>
            <vxe-column resizable title="Biomarker Category" width="180px">
              <template #default="{row}">
                {{ row.Biomarker_category }}
              </template>
            </vxe-column>
            <vxe-column field="protein" resizable title="Protein" width="150px">
              <template #default="{row}">
                <category-list :dat_str_map="row.protein"></category-list>
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
        </template>
      </vxe-column>
      <vxe-column field="Trait_ontology_name" resizable title="Trait" width="150px">
        <template #default="{row}">
          <a class="font-weight-bold"
             @click="$commonfunc.openDetailAtNewPage(row.Trait_ontology_id,'browse/trait')">{{
              row.Trait_ontology_name
            }}</a>
        </template>
      </vxe-column>
      <vxe-column field="Trait_type" min-width="150px" resizable title="Trait Type"></vxe-column>
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
      <vxe-column field="protein" min-width="350px" resizable title="Protein">
        <template #default="{row}">
          <category-list :dat_str_map="row.protein"></category-list>
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
      <vxe-column field="publication" resizable title="Publication" width="150px">
        <template #default="{row}">
                    <span v-for="ppp in Object.keys(row.publication)">
                      {{ ppp }}
                    </span>
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
  name: "browseTraitTable",
  props:['trait']
}
</script>

<style scoped>

</style>