<template>
  <h1>MultipleEventHand</h1>
  <p>{{count}}</p>
  <p>{{name}}</p>
  <!-- <button @click="change">Change name</button> -->
  <button @click="plus(4, $event), change()">Plus and change</button>
</template>

<script>
export default{
  data(){
    return{
      count: 0,
      name: "Abdul-Kareem"
    }
  },
  methods:{
    plus(b, event){
      this.count = this.count + 1 * b
      console.log(event)
      
    },
    change(){
      this.name = 'oluwasegun'
      console.log(event)
    }
  }
}
</script>