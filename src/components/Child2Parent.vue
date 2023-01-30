<template>
  <p>Child to parent data sharing</p>
  <p>Be cool boy: {{shareData}}</p>
  <button @click="dataToGet(shareData)">Get Data</button>
</template>

<script>
  export default{
    data(){
      return{
        shareData: "here is the data i want to share"
      }
    },

    props:{
      dataToGet: Function
    }
  }
</script>