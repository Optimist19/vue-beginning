<template>
   <div>
   <p>The lord is good</p>
   <p>{{data.email}}</p>
   <p>{{data.number}}</p>
   <button v-on:click='getData()'>Click</button>
   </div>
</template>

<script>
  export default{
    name: "SecondChild",
    props:{
      data: Object
    },
    methods:{
      getData(){
        alert(this.data.email)
      }
    }
  }
</script>
