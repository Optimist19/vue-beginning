<template>
  <h1>Watcher Deep</h1>
  <input type="text" v-model="data.data" />
  <button @click="data.count++">+</button>
  <p>{{data.count}}</p>
</template>

<script>
  export default{
    name: "Deep",
    data(){
      return{
        data:{
          data:" ",
          count: 0
        }
      }
    },
    watch:{
      data:{
        handler(newVal){
        console.log(`${newVal.data} ${newVal.count}`)
        },
        deep:true
      },
      
    }
  }
</script>