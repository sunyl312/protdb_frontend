<template>
  <div>
    <vxe-toolbar custom export></vxe-toolbar>
    <slot name="header"></slot>
    <vxe-table
        ref="xTable"
        :data="protein.tableData"
        :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
        :export-config="{}"
        :loading="protein.pageLoading"
        border
        empty-text="Empty"
        height="auto"
        max-height="700"
        round
        stripe
    >
      <vxe-column resizable type="expand" width="50">
        <template #content="{ row, rowIndex }">
          <v-sheet class="pa-3" color="blue lighten-4">
            <v-sheet class="ma-3 pa-3" elevation="1" rounded>
              <browse-protein-table-expanded :row="row"></browse-protein-table-expanded>
            </v-sheet>
          </v-sheet>
        </template>
      </vxe-column>
      <vxe-column field="std_Uniprot_ID" resizable title="Protein ID" width="150px">
        <template #default="{row}">
          <a class="font-weight-bold"
             @click="$commonfunc.openDetailAtNewPage(row.std_Uniprot_ID,'browse/protein')">{{
              row.std_Uniprot_ID
            }}</a>
        </template>
      </vxe-column>
      <vxe-column field="Protein_names" min-width="250px" resizable title="Protein Name">
        <template #default="{row}">
          <span style="display: inline-block">{{ row.Entry_Name }}</span>
          <span style="display: inline-block">
            <v-menu open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-sheet v-bind="attrs"
                       v-on="on">
               <span><v-icon :color="$store.state.mainColor" small>mdi-share</v-icon></span>
              </v-sheet>
            </template>
            <v-sheet outlined rounded class="pa-3">
                <v-row>
                  <v-col cols="12">
                    <v-btn  elevation="0" style="text-transform: none" class="text-body-2" @click="$commonfunc.goOuterLink('https://alphafold.ebi.ac.uk/entry/'+row.std_Uniprot_ID)">
                      <v-icon :color="$store.state.mainColor" small>mdi-alpha</v-icon>Alpha Fold
                    </v-btn>

                    <v-btn  elevation="0" style="text-transform: none" class="text-body-2" @click="$commonfunc.goOuterLink('https://www.uniprot.org/uniprotkb/'+row.std_Uniprot_ID+'/entry')">
                      <v-icon  :color="$store.state.mainColor" > mdi-alpha-p</v-icon>Uniprot
                    </v-btn>
                  </v-col>
                </v-row>
            </v-sheet>
          </v-menu>
          </span>


        </template>
      </vxe-column>
      <vxe-column field="std_Ensembl_ID" resizable title="Gene ID" width="150px"></vxe-column>
      <vxe-column field="Nstudy" resizable title="#Study" width="80px"></vxe-column>
      <vxe-column field="Nsubject" resizable title="#Subject" width="100px">
        <template #default="{row}">
          {{ row.Nsubject == 0 ? 'NA' : row.Nsubject }}
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
      <vxe-column field="std_Uniprot_ID" resizable title="Aggregate Database Rating" width="150px">
        <template #default="{row}">
          <aggr-db-indicator :key="row.std_Uniprot_ID" :uniprot_id="row.std_Uniprot_ID"></aggr-db-indicator>
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
    <slot name="footer"></slot>
  </div>

</template>

<script>
import PercentBarItemsPval from "@/components/percentBarItemsPval";
import CategoryList from "@/components/categoryList";
import AggrDbIndicator from "@/components/aggrDbIndicator";
import AggrDatasetPlot from "@/components/aggrDatasetPlot";
import AggrDatasetAll from "@/components/aggrDatasetAll";
import BrowseProteinTableExpanded from "@/components/browseProteinTableExpanded";

export default {
  components: {
    BrowseProteinTableExpanded,
    AggrDatasetAll, AggrDatasetPlot, AggrDbIndicator, CategoryList, PercentBarItemsPval
  },
  name: "browseProteinTable",
  props: ['protein'],
  data() {
    return {
      tab: 0,
    }
  },
  created() {
    // this.$nextTick(() => {
    //   // 将表格和工具栏进行关联
    //   const $table = this.$refs.xTable
    //   console.log($table)
    //   const $toolbar = this.$refs[this.reftoobar];
    //   console.log($toolbar)
    //   $table.connect($toolbar)
    // })
  }
}
</script>

<style scoped>

</style>