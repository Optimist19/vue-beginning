<template>
  <h1>Watcher Immediate</h1>
  <input type="text" v-model="data" />
</template>

<script>
  export default{
    name: "WatcherImmediate",
    data(){
      return{
        data: "data"
      }
    },
    watch:{
      data:{
        handler(value){
        console.log(value)
        },
        immdiate:true
      }
    }
  }
</script>