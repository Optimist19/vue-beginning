<template>
  <div v-show="notshow">
    <p>Pop 1</p>
    <button @click="notshow = true">toogle out</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        notshow: false
      }
    },
    props:{
      // notShow: String
    }
  }
</script>