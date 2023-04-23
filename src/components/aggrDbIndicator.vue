<template>
  <div>
    <v-rating
        v-model="rating"
        :color="$store.state.mainColor"
        :length="len"
        readonly
        empty-icon="mdi-circle-outline"
        full-icon="mdi-circle"
        half-icon="mdi-circle-half-full"
    >

    </v-rating>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: "aggrDbIndicator",
  props: {
    uniprot_id: {
      default: null,
    }, ensembl_id: {
      default: null,
    }, pubchem_id: {
      default: null,
    },
  },
  data() {
    return {
      isLoading: false,
      dat: {},
      len: 0,
      rating: 0,
    }
  },
  mounted() {
    this.loadData();

  },
  // updated() {
  //   this.loadData();
  //
  // },
  watch: {
    uniprot_id() {
      this.loadData();

    },
    ensembl_id() {
      this.loadData();

    },
    pubchem_id() {
      this.loadData();

    },
  },
  methods: {
    loadData() {
      this.isLoading = true
      Axios.post(
          baseURL + "/api/aggrdb_get_count_all",
          {},
          {
            params: {
              ensembl_id: this.ensembl_id,
              uniprot_id: this.uniprot_id,
              pubchem_id: this.pubchem_id,
            }
          }
      ).then(res => {
        // console.log(res.data)
        let data = JSON.parse(res.data);
        this.dat = data

        this.changeRating();
        console.log(this.len,this.rating)
        this.isLoading = false;
      }).catch(err => {
        this.isLoading = false;
      })

    },
    changeRating(){
      this.len = Object.keys(this.dat).length;
      // let count = 0;
      Object.values(this.dat).forEach(kkk=>{
        if (kkk > 0){
          this.rating += 1;
        }
      })


      // this.rating = count;
    }
  }
}
</script>

<style scoped>

</style>