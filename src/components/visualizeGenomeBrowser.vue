<template>
  <div :id="this_id">
    <div id="aaa" ref="aaa" style="height: 500px"></div>
  </div>

</template>

<script>

import _ from 'lodash'
// import * as biodallance from "../plugins/dalliance-compiled.js"
// require('../plugins/dalliance-compiled.js');
// import Browser from '../plugins/dalliance-wrapper'
import Axios from 'axios'
export default {
  name: "visualizeGenomeBrowser",
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
      this_id: "asd" + _.uniqueId(),
      chr:"3",
      start:923923,
      end:944575,
      bbb:null
    }
  },
  beforeCreate() {
    // this.this_id = this.this_id +  ;
  },
  mounted() {
    this.loadCoordinate();

  },
  updated() {
    this.loadCoordinate();
  },
  methods: {
    loadCoordinate(){
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
        this.chr = data.chr;
        this.start = data.start;
        this.end = data.end;

        this.$nextTick(()=>{
          this.loadBrowser();
        })

      })
    },
    loadBrowser() {

      /*
      * 如何引入例如 Biodalliance.js这种外部的非ES6，且不在npm中发布的js包？
      * 直接通过index.html全局引入即可。
      * 注意这些包一般都需要一个div作为挂载点，参考下边的方式来写不会报错。
      *
      * */
      // console.log(this.chr,this.start,this.end)
    this.bbb =   new Browser({
        pageName: this.this_id,
        chr: ""+this.chr,
        viewStart: this.start,
        viewEnd: this.end,
        // cookieKey: 'human-grc_h38' + _.uniqueId(),
        noPersist:true,
        coordSystem: {
          speciesName: 'Human',
          taxon: 9606,
          auth: 'GRCh',
          version: '38',
          ucscName: 'hg38'
        },

        chains: {
          hg19ToHg38: {
            uri: '//www.biodalliance.org/datasets/hg19ToHg38.bb',
            type: 'bigbed',
            coords: {
              speciesName: 'Human',
              taxon: 9606,
              auth: 'GRCh',
              version: 37,
              ucscName: 'hg19'
            }
          }
        },

        sources: [{
          name: 'Genome',
          twoBitURI: '//www.biodalliance.org/datasets/hg38.2bit',
          tier_type: 'sequence'
        }


          , {
            name: 'GENCODE',
            desc: 'Gene structures from GENCODE 21',
            bwgURI: '//www.biodalliance.org/datasets/GRCh38/gencode.v21.annotation.bb',
            stylesheet_uri: '//www.biodalliance.org/stylesheets/gencode2.xml',
            collapseSuperGroups: true,
            trixURI: '//www.biodalliance.org/datasets/GRCh38/gencode.v21.annotation.ix'
          }

          , {
            name: 'GENCODEv19',
            disabled: true,
            desc: 'Gene structures from GENCODE 19',
            bwgURI: '//www.biodalliance.org/datasets/gencode.bb',
            stylesheet_uri: '//www.biodalliance.org/stylesheets/gencode.xml',
            collapseSuperGroups: true,
            pennant: '//genome.ucsc.edu/images/19.jpg',
            trixURI: '//www.biodalliance.org/datasets/gene-index.ix',
            mapping: 'hg19ToHg38'
          }

          , {
            name: 'Repeats',
            desc: 'Repeat annotation from UCSC',
            bwgURI: '//www.biodalliance.org/datasets/GRCh38/repeats.bb',
            stylesheet_uri: '//www.biodalliance.org/stylesheets/bb-repeats2.xml'
          }
        ],

        prefix: '//www.biodalliance.org/release-0.13/',
        fullScreen: true,

        // hubs: ['http://ngs.sanger.ac.uk/production/ensembl/regulation/hub.txt', {url: 'http://ftp.ebi.ac.uk/pub/databases/ensembl/encode/integration_data_jan2011/hub.txt', genome: 'hg19', mapping: 'hg19ToHg38'}],
      });
    }
  }
}
</script>

<style scoped>

</style>