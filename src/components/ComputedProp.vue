<template>
  <h1>Computed property example</h1>
  <p>Full name: {{lastName}} {{firstName}}</p>
  <p>Computed property: {{fullName}}</p>
  <button @click=" change">Change name</button>
</template>

<script>
  export default{
    data(){
      return{
        firstName: "Oluwasegun",
        lastName: "Bamidele"
      }
    },
    computed:{
      fullName(){
      return `${this.lastName} ${this.firstName} `
      }
    },
    methods:{
      change(){
        return this.firstName = "Beyonce"
        // this.lastName = "Rihana"
      }
    }
  }
</script>