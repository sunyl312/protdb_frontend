<template>
  <div>
<!--    {{ dat_list }}-->
    <span v-for="item in dat_list">
      <v-chip class="ma-1" dark small   :color="getColor(item.term)"  >
        {{item.term}}({{item.count}})
      </v-chip>
    </span>

  </div>
</template>

<script>
export default {
  name: "categoryList",
  props: ["dat_str_map", "href", "color_map"],
  data() {
    return {}
  },
  computed: {
    dat_list() {
      let results = [];
      if (this.dat_str_map == undefined){
        console.log(this.dat_str_map);
        return results

      }

      for (const [one, onev] of Object.entries(this.dat_str_map)) {
        let term_list = one.split(/&/);
        // console.log(one,onev)
        let out = {
          term: null,
          id: null,
          type: null,
          meta: {},
          count: onev
        }
        out.term = term_list[0];
        term_list.shift();
        if (term_list.length > 0) {
          term_list.forEach(term => {
            let k, v = term.split(/=/);
            if (k == 'id') {
              out.id = v;
            } else if (k == "type") {
              out.type = v
            } else {
              out.meta[k] = v
            }
          })
        }
        results.push(out)
      }

      return results
    }
  },
  methods:{
    getColor(term){
      let term_lower = term.toLowerCase();
      // console.log(term_lower,this.color_map)
     return (this.color_map != null) &&   this.color_map[term_lower] || "grey"
    }
  }
}
</script>

<style scoped>

</style>