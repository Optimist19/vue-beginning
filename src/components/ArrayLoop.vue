<template>
  <p>Array Loop</p>
  <div v-for="actor in actors" :key="actor">
    <p>{{actor.employer1}}</p>
    <p v-for="info in actor.info" :key="info">{{info}}</p>
  </div>
</template>

<script>
  export default{
    name: "ArrayLoop",
    data(){
      return{
        actors:[
          {
            name: "Christiaon Dior",
            info:["level", "position"]
          },
          {
            name: "Di Carpio",
            movies:["Titanic", "Inception"]
          },
          {employer1: "Ekweme"},
          {employer2: "Chioma"},
          {employer3: "Johnson"},
          
        ]
      }
    }
  }
</script>