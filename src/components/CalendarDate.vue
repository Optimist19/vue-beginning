<template>
 <form>
    <label for="date">
      <input type="date" id="date" v-model="reminder.date" id="first"/>
    </label>
    <br>
    <label for="text">Reminder description
      <textarea v-model.number="reminder.description" id="text">
      </textarea>
    <label>
    <button @click="setReminder()">Set Reminder</button>
  <form>
  <p>{{reminder}}</p>
  <!-- <button></button> -->

</template>

<script>
  export default{
    name: "CalendarDate",
    data(){
      return{
        reminder:{
          date: "",
          description: ""
        }
      }
    },
    methods:{
      setReminder(){
          fetch.post("url", {
          header:{
            Accept: "application/json"
          }
        })
        .then()
        .then()
        .error()
        .finally(() => {return Number(this.date)})
      }

      
    }
  }
</script>