<template>
  <div>
    <v-row :align="align">
      <v-col class="text-body-1 font-weight-bold " :cols="leftCol">
        <slot name="name"></slot>
      </v-col>
      <v-col  :cols="rightCol" :class="[textAlign]">
        <v-sheet :min-height="minHeight" :outlined="outlined" :max-height="maxHeight" class="overflow-y-auto ">
          <v-sheet class="pa-1">
            <slot name="content" ></slot>
          </v-sheet>

        </v-sheet>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "detailPageBlock",
  props:{
    textAlign:{
      default:'text-right'
    },
    maxHeight:{
      default:300
    },
    minHeight:{
      default:null
    },
    outlined:{
      default:false
    },
    rounded:{
      default:false
    },
    leftCol:{
      default:3
    },
    rightCol:{
      default:9
    },
    align:{
      default:"center"
    }
  },
}
</script>

<style scoped>

</style>