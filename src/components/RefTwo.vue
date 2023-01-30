<template>
  <p>Good work done</p>
  <p v-html="text"></p>
  <input type="text"  ref="input"/>
  <button @click="takeMe()">take me</button>
  <button @click="bringMe()">bring Me</button>
  <p>{{data}}</p>
  <ul>
    <li v-for="data in datas" :key="data">{{data}}</li>
  </ul>
</template>

<script>
  export default{
    name: "RefTwo",
    data(){
      return{
        data: "",
        datas: [],
        text: 456
        // prac: ""
      }
    },

    methods:{
      takeMe(){
        this.data =this.$refs.input.value
        this.data
        this.datas.push(this.data)
      },

      bringMe(){
        this.data =this.$refs.input.value
      }
    }
  }
</script>