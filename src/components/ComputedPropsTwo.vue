<template>
  <h1>Computed Property example 2 </h1>
  <p>{{getPrice}}</p>
  <p v-for="item in getPrice" :key="id">{{item.price}}</p>
</template>


<script>
  export default{
    data(){
      return{
        items: [
          {
          id: 1,
          title: "Tv",
          price: "100"
          },
          {
          id: 2,
          title: "Phone",
          price: "200"
          },
          {
          id: 3,
          title: "Monitor",
          price: "300"
          }
        ]
      }
    },
    computed:{
      getPrice(){
        return this.items.filter(a => a.price > 200)
      }
    }
  }
</script>