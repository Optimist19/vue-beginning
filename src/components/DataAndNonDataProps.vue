<template>
  <div>
    <p v-bind="$attrs">Data And Non Data</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default{
    name: "DataAndNonData",
    inheritAttrs: false,
    props:{
      name: String,
    }
  }
</script>