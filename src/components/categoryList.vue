<template>
  <div>
    <!--    {{ dat_list }}-->
    <span v-for="item in dat_list">
      <v-chip :color="getColor(item.term)" class="ma-1" dark small>
        {{ item.term }}({{ item.count }})
      </v-chip>
    </span>
    <v-btn v-if=" max_number_show != null &&  dat_list_all.length > max_number_show " elevation="0" small tile
           @click="is_short=!is_short">
      <span v-show="is_short==true"> ({{ dat_list_all.length - max_number_show }}) <v-icon
          :color="$store.state.mainColor" small>mdi-chevron-double-down</v-icon></span>
      <span v-show="is_short==false"><v-icon :color="$store.state.mainColor" small>mdi-chevron-double-up</v-icon></span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "categoryList",
  props: {
    dat_str_map: {
      default: undefined,
    },
    href: {},
    color_map: {},
    max_number_show: {
      default: null
    }
  },
  data() {
    return {
      is_short: true,
      show_expand_btn: false,
      dat_list: [],
    }
  },
  computed: {
    dat_list_all() {
      let results = [];
      if (this.dat_str_map == undefined) {
        // console.log(this.dat_str_map);
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
  mounted() {
    this.switchData(this.is_short)
  },
  watch: {
    is_short(newval) {
      // console.log(newval)
      this.switchData(newval);
    },
    dat_str_map(){
      this.switchData(this.is_short)
    }
  },

  methods: {
    getColor(term) {
      let term_lower = term.toLowerCase();
      // console.log(term_lower,this.color_map)
      return (this.color_map != null) && this.color_map[term_lower] || "grey"
    },
    switchData(short) {

      if (this.max_number_show == null) {
        this.dat_list = this.dat_list_all
      } else {
        if (short) {
          // console.log(short)
          // 是缩减程度
          this.dat_list = this.dat_list_all.slice(0, this.max_number_show);
        } else {
          this.dat_list = this.dat_list_all;
        }
      }

    }
  }
}
</script>

<style scoped>

</style>