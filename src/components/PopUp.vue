<template>
  <p>Pop</p>
  <button @dblclick="data=!data">toggle in</button>
  <PopUpExample v-if="data" />
</template>

<script>

  import PopUpExample from "./PopUpExample.vue"

  export default{
    data(){
      return{
        data: true,
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