<template>
  <p>Conditional List rendering</p>
  <template v-for="name in names" :key="name">
    <p>{{name}}</p>
    <p v-if="name === 'Clark'">{{name}}</p>
  </template>
</template>

<script>
  export default{
    name: "CondiListRen",
    data(){
      return{
        names:["Bruce", "Clark", "Diana"]
      }
    }
  }
</script>