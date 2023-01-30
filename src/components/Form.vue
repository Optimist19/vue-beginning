<template>
  <p>Want to get an email and a password<p>
  <input type="text" v-model="email" placeholder="Your Email" />
  <p> Above for email: {{email}}</p>
  <input type="password" v-model="password" placeholder="Your password" />
  <p> Above for password: {{password}}</p>
  <button v-on:click="Data()">Data</button>
</template>

<script>
  export default{
    name: "Form",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      Data(){
        console.log(`email: ${this.email} password: ${this.password}`)
      }
    }
  }
</script>