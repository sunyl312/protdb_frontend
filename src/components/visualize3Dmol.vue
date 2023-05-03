<template>
  <v-sheet outlined rounded class="pa-1">
    <v-sheet class="py-1">
      <v-autocomplete
          dense
          outlined
          hide-details
      :items="pdb_list"
      v-model="this_pdb_id"
      ></v-autocomplete>
    </v-sheet>
<!--    <div style="height: 400px; width: 400px; position: relative;" class='viewer_3Dmoljs' data-pdb='2POR' data-backgroundcolor='0xdbffe0' data-style='stick' data-ui='true' ></div>-->
    <div :id="this_id"  style="height: 400px; width: 400px; position: relative;" ></div>
  </v-sheet>
</template>

<script>
import Axios from "axios";

export default {
  name: "visualize3Dmol",
  props:{
    uniprot_id:{
      default:null,
    },
    ensembl_id:{
      default:null,
    }
  },
  data() {
    return {
      this_id:  + _.uniqueId("asd3dsa"),
      pdb_list:[],
      this_pdb_id:null,
      viewer:null
    }
  },
  mounted() {
    let element = document.getElementById(this.this_id);
    let config = { backgroundColor: 'white' };
    this.viewer = $3Dmol.createViewer( element, config );

    this.loadPDBList();
    this.loadViewer();
  },
  updated() {
    // this.loadData();
    // this.loadViewer();
  },
  watch:{
    this_pdb_id(newval){
      if(newval != null){
        this.loadViewer();
      }
    }
  },
  methods: {
    loadPDBList(){
      Axios.post(
          baseURL+"/api/get_coordinate",
          {},
          {
            params:{
              ensembl_id:this.ensembl_id,
              uniprot_id:this.uniprot_id,
            }
          }
      ).then(res=>{
        let data = JSON.parse(res.data);
        let pdblist = data.pdb_id;
        if(pdblist != null){
          this.pdb_list = pdblist.split(/\|/);
          this.this_pdb_id = this.pdb_list[0]
        }else{
          this.pdb_list = [];
        }
      })
    },
    loadViewer(){

      Axios.get(
          "https://files.rcsb.org/view/"+this.this_pdb_id+".pdb"
      ).then(res=>{
        let v = this.viewer;
        v.addModel( res.data, "pdb" );                       /* load data */
        v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
        v.zoomTo();                                      /* set camera */
        v.render();                                      /* render scene */
        v.zoom(1.2, 1000);                               /* slight zoom */
      }).catch(err=>{
        console.log("ERR"+err);
      })

    }
  }
}
</script>

<style scoped>

</style>