<template>
  <p v-if="display">This is vue</p>
  <button @click="display = !display">Show</button>
</template>

<script>
  export default{
    name: "If",
    data(){
      return{
        display: false
      }
    }
  }
</script>