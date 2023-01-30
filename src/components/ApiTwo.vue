<!-- <template>
  <div v-for="list in item" :key="list">
    <p>{{list.id}}</p>
    <p>{{list.email}}</p>
  <div>
</template>

<script>
  export default{
    name: "ApiTwo",
    data(){
      return{
        item:[]
      }
    },

    mounted(){
      axios.get("https://reqres.in/api/users/2", {
        headers:{
          Accept: "application/json"
        }
      })
      .then(res => res.json())
      .then(data => this.item = data)

      // const result = fetch("https://reqres.in/api/users/2")
      // this.item = result.data.data
    }
  }
</script> -->