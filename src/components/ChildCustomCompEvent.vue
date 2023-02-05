<template>
  
  <h1>Child of where emit is used</h1>
  <p>I am the child</p>
  
  <button @click="$emit('display')">Close child</button>
</template>

<script>
  export default{
    emits:["display"]
    // display: true
  }
</script>