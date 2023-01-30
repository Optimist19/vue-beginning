<template>
  <p>Slot two</p>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default{
    name: "SlotTwo",
  }
</script>

<style>
  div{
    color: blue;
  }
</style>