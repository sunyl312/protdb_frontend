<template>
  <v-sheet class="ma-3">
    <v-tabs centered v-model="tab">
      <v-tab>
        TCGA RNA
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <aggr-dataset-plot :uniprot_id="protein_id" dbname="aggr_ds_rna_tcga"></aggr-dataset-plot>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import AggrDatasetPlot from "@/components/aggrDatasetPlot";

export default {
  name: "aggrDatasetAll",
  components: {AggrDatasetPlot},

  props: {
    protein_id: {
      default:()=>null,
    }
  },
  data() {
    return {
      tab: 0,
    }
  }
}
</script>

<style scoped>

</style>