<template>
  <div v-if="notshow">
    <p>Pop 1</p>
    <button @click="notshow = !notshow">toogle out</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        notshow: true
      }
    },
    props:{
      // notShow: String
    }
  }
</script>