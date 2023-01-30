<template>
  <p> Username: {{myColor}}</p>
  <p>Teacher Passing Data</p>
  <Student :getData="getData"/>
</template>

<script>
  import Student from "./Student.vue"
  export default{
    name: "Teacher",
    components:{
      Student
    },
    data(){
      return{
        myColor: ""
      }
    },

    methods:{
      getData(a){
        this.myColor = a
      }
    }

   
  }
</script>