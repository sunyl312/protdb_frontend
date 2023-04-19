<template>
  <div>
    <!--    selectedItem {{ selectedItem }}-->
    <!--    <br/>-->
    <!--    selectedOntology {{ selectedOntology }}-->
    <!--    &lt;!&ndash;    {{items}}&ndash;&gt;-->
    <!--    <br/>-->
    <!--    topCategory {{ topCategory }}-->
    <v-sheet class="px-2 py-1" color="grey lighten-3" outlined>
      <v-sheet class="my-2 d-flex justify-end" color="grey lighten-3">
        <v-btn class="mx-1" @click="toggleTreeview(true)" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Open All
        </v-btn>
        <v-btn class="mx-1" @click="toggleTreeview(false)" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Collapse All
        </v-btn>
        <v-btn @click="resetall" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Reset
        </v-btn>
      </v-sheet>
      <v-sheet class="pa-2" outlined>
        <v-select
            v-model="selectedOntology"
            :items="topCategory"
            :loading="isLoading"
            clearable
            dense
            hide-details
            item-text="name"
            item-value="id"
            label="Category"
            outlined
        ></v-select>
      </v-sheet>
      <v-sheet class="pa-2" outlined>

        <v-text-field
            v-model="search"
            :loading="isLoading"
            clearable
            dense
            hide-details
            label="Search"
            outlined
        ></v-text-field>
        <v-sheet class="overflow-y-auto my-2" max-height="700" min-height="300">
          <v-treeview
              v-model="selectedItem"
              :filter="filter"
              :items="itemsToShow"
              :search="search"
              item-key="id"
              ref="myTreeview"
              open-on-click
              return-object
              selectable
              selection-type="all"
          >
<!--            selection-type 如果是leaf 或者independent 之外的任何值，则会默认选择当前节点和所有的子节点，如果父节点只有一个子节点（当前节点）则也会被选择-->

            <template v-slot:label="{ item,leaf }">

            <span
                class="float-start "

            >{{item.name}}</span>
              <!--            <span-->
              <!--            v-else-->
              <!--            class="float-start"-->
              <!--            >-->
              <!--              {{item.name}}-->
              <!--            </span>-->
            </template>
          </v-treeview>
        </v-sheet>

      </v-sheet>
      <v-sheet class="my-2 d-flex justify-end" color="grey lighten-3">
        <v-btn class="mx-1" @click="toggleTreeview(true)" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Open All
        </v-btn>
        <v-btn class="mx-1" @click="toggleTreeview(false)" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Collapse All
        </v-btn>
        <v-btn @click="resetall" :color="$store.state.mainColor" dark small style="text-transform: none">
          <v-icon>mdi-reset</v-icon>
          Reset
        </v-btn>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>

export default {
  name: "ontologyTree",
  props:{
    isLoading:{
      default:false,
    },
    items:{
      default:()=>{
        return []
      },
    }
  },
  data() {
    return {
      isOpen:true,
      selectedItem: [],
      selectedOntology: null,
      // items: [],
      itemsToShow: [],
      // isLoading: false,
      search: null,
    }
  },
  mounted() {
    // this.loadData()
    this.updateTree();
    this.toggleTreeview(true);
  },
  beforeUpdate() {
    this.updateTree();
    this.toggleTreeview(true);
  },
  computed: {
    filter() {
      return (item, search, textKey) => item[textKey].indexOf(search) > -1
    },
    topCategory() {
      let x = [];
      this.items.forEach(item => {
        x.push({
          id: item.id,
          name: item.name,
        });
      })
      return x
    },

  },
  watch: {
    selectedOntology() {
      this.updateTree()
    },
    selectedItem(){
      this.$emit("selectedDOIDchange",this.selectedItem);
    }

  },
  methods: {
    resetall(){
      this.selectedItem = [];
      this.selectedOntology = null
      this.search = null;
    }
,
    toggleTreeview(isOpen) {
      // 调用函数updateAll()来展开或者关闭所有节点
      this.isOpen = isOpen;
      this.$refs.myTreeview.updateAll(isOpen);
    },
    updateTree() {
      if (this.selectedOntology == null) {
        this.itemsToShow = this.items
      } else {
        let data = this.items.filter(res => {
          return res.id == this.selectedOntology
        })
        this.itemsToShow = data[0].children;
      }
    },
    handleSelected(array) {
      console.log(array)
      this.selectedItem = array;
    },

  }
}
</script>

<style scoped>

</style>