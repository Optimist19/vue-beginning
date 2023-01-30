<template>
  <p>This is watchers session</p>
  <p>{{count}}</p>
  <button v-on:click="increase()">count</button>
  <p>{{result}}
</template>


<script>
  export default{
    name: "Watchers",
    data(){
      return{
        count: 1,
        result: ""
      }
    },
    methods:{
      increase(){
        this.count = this.count + 1
        console.log("Been clicked")
      }
    },

    watch:{
      count(newVal, oldVal){
        console.log(`The new val is ${newVal} and the old val is ${oldVal}`)
      }
    }

  }
</script>
