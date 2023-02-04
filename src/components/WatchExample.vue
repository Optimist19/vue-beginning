<template>
  <h1>watcher</h1>
  <p>{{count}}</p>
  <button @click="count++">Increase</button>
  <button @click="count--">Decrease</button>
</template>

<script>
  export default{
    data(){
      return{
        count: 0
      }
    },
    // methods:{
    //   incre(){

    //   }
    // }
    watch:{
      count(newVal, oldVal){
       if(newVal > oldVal && newVal === 16){
         alert("Too much for the ear")
       }
      }
      // count(newVal, oldVal){
      //   alert(`old Val is ${oldVal}  new val is ${newVal}`)
      // }
    } //console.log did not work in line 27 and 23. I don't know why
  }
</script>