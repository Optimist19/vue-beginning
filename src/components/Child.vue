<template>
<h1>This is child component</h1>
 <h1 v-text="name"></h1>
</template>

<script>
  export default{
    name: "Child",
    props:{
     name : String
    }
  }
</script>