<template>
  <div>
    <p>Data And Non Data</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default{
    name: "DataAndNonData",
    data(){
      return{

      }
    },
    props:{
      name: String
    }
  }
</script>