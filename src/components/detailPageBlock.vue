<template>
  <div>

    <v-sheet>
      <span class="font-weight-bold"> <slot name="name"></slot>:&nbsp; </span>
      <slot name="content"></slot>
    </v-sheet>

    <!--    <v-row :align="align">-->
    <!--      <v-col class="text-body-1 font-weight-bold " :cols="leftCol">-->
    <!--        <slot name="name"></slot>-->
    <!--      </v-col>-->
    <!--      <v-col  :cols="rightCol" :class="[textAlign]">-->
    <!--        <v-sheet :min-height="minHeight" :outlined="outlined" :max-height="maxHeight" class="overflow-y-auto ">-->
    <!--          <v-sheet class="pa-1">-->
    <!--            <slot name="content" ></slot>-->
    <!--          </v-sheet>-->

    <!--        </v-sheet>-->

    <!--      </v-col>-->
    <!--    </v-row>-->
  </div>
</template>

<script>
export default {
  name: "detailPageBlock",
  props: {
    textAlign: {
      default: 'text-right'
    },
    maxHeight: {
      default: 300
    },
    minHeight: {
      default: null
    },
    outlined: {
      default: false
    },
    rounded: {
      default: false
    },
    leftCol: {
      default: 4
    },
    rightCol: {
      default: 8
    },
    align: {
      default: "center"
    }
  },
}
</script>

<style scoped>

</style>