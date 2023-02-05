<template>
  <h1>Emit</h1>
  <button @click="show = true">Open Child</button>
  <ChildCustomCompEvent v-show="show" @display = "faceShow = false" />
</template>

<script>
  import ChildCustomCompEvent from "./ChildCustomCompEvent.vue"
  export default{
    data(){
      return{
        show: false,
        // faceShow:""
      }
    },
    components:{
      ChildCustomCompEvent
    }
  }
</script>