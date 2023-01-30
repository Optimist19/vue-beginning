<template>
  <p>Student Passing Data: </p>
  <button v-on:click="getData(color)">click</button>
</template>

<script>
  export default{
    name: "Student",
    data(){
      return{
        color: "green color"
      }
    },

    props:{
      getData: Function
    }
  }
</script>