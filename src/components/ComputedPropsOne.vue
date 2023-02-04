<template>
  <h1>Computed Property example 1 </h1>
  <p>{{getPrice}}</p>
</template>


<script>
  export default{
    data(){
      return{
        items: [
          {
          id: 1,
          item: "Tv",
          price: "100"
          },
          {
          id: 2,
          item: "Phone",
          price: "200"
          },
          {
          id: 1,
          item: "Monitor",
          price: "300"
          }
        ]
      }
    },
    computed:{
      // this isn't working well, it's not adding up
      getPrice(){
        return this.items.reduce((acc, curr) => (acc = acc + curr.price), 0)
      }
    }
  }
</script>