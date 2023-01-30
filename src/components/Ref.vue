<template>
  <p>This is Ref</p>
  <p>Waaaw!!!</p>
  <input v-on:click="focus" type="text" ref="anyname" />
</template>

<script>
export default{
  name: "Ref",
  methods:{
    focus(){
      console.log(this.$refs.anyname.value)
    }
  }
}
</script>