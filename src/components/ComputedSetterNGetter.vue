<template>
  <p>Computed properties(Getter and Setter)</p>
  <p>data property - {{lastName}} {{firstName}}</p>
  <p>Computed property  - {{fullName}}</p>
  <button @click="change">Set value</button>
</template>

<script>
  export default{
    data(){
      return{
        lastName: "Oluwasegun",
        firstName: "Bamdele"
      }
    },
    methods:{
      change(){
        return this.fullName = "Super Heroes"
      }
    },
    computed:{
      fullName:{
        get(){
         return `${this.lastName}  ${this.firstName}`
        },
        set(value){
          let a = value.split(" ")
          console.log(a)
          this.firstName = a[0]
          this.lastName = a[1]
        }
      }
    }
  }
</script>