<template>
  <h1>Dynamic Component</h1>
  <button @click="tab='Java'">Java</button>
  <button @click="tab='Node'">Node</button>
  <button @click="tab='Php'">Php</button>
  <component :is="tab"/>
  <!-- <p>Java</p>
  <p>Node</p>
  <p>Php</p> -->
</template>

<script>
  import Java from "./JavaDC.vue"
  import Node from "./NodeDC.vue"
  import Php from "./PhpDC.vue"

  export default{
    name: "Dynamic",
    data(){
      return{
        tab: 'java'
      }
    },
    components:{
      Java,
      Node,
      Php
    }
  }
</script>