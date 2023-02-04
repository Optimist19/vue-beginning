<template>
  <p>Pop</p>
  <button @click="data = true">toggle in</button>
  <PopUpExample v-show="data" />
</template>

<script>

  import PopUpExample from "./PopUpExample.vue"

  export default{
    data(){
      return{
        data: false,
        // notShow: false
      }
    },
    components:{
      PopUpExample
    },
    // methods:{
    //   change(){
    //     this.data = !this.data
    //   }
    // }
  }
</script>