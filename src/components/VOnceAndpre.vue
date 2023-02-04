<template>
  <h1>v-once and v-pre</h1>
  <div>
    <p>v-once</p>
    <p v-once>{{name}}</p>
    <button @click="name = 'Snoop Dog'">Change</button>
  </div>

  <div>
  <p>v-pre</p>
    <p v-pre>{{name}}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        name: "Oluwasegun",
      }
    }
  }
</script>