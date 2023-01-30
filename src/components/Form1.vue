<template>
  <p>Form One</p>
  <div>
    <p>Technology</p>
    <label for="java">Java</label>
    <input type="checkbox" v-model="technology" value="java" id="java" />

    <label for="javascript">Javascriot</label>
    <input type="checkbox" v-model="technology" value="javascript" id="javascript" />

    <label for="python">Python</label>
    <input type="checkbox" v-model="technology" value="python" id="python" />

    <label for="ruby">Ruby</label>
    <input type="checkbox" v-model="technology" value="ruby" id="ruby" />

    <label for="c++">C++</label>
    <input type="checkbox" v-model="technology" value="c++" id="c++" />

    <p>{{technology}}</p>
  </div>
  <div>
    <p>Profession</p>
    <label for="teacher">Teacher</label>
    <input type="radio" v-model="profession" value="teacher" name="profession" id="teacher" />

    <label for="footballer">Footballer</label>
    <input type="radio" v-model="profession" value="footballer" name="profession" id="footballer" />

    <label for="doctor">Doctor</label>
    <input type="radio" v-model="profession" value="doctor" name="profession" id="doctor" />

    <label for="nurse">Nurse</label>
    <input type="radio" v-model="profession" value="nurse" name="profession" id="nurse" />

    <label for="engineer">Engineer</label>
    <input type="radio" v-model="profession" value="engineer" name="profession" id="engineer" />

    <p>{{profession}}</p>

     <button v-on:click="Data">Data</button>
  </div>
</template>

<script>
  export default{
    name: "Form1",
    data(){
      return{
        technology:[],
        profession: null
      }
    },
    methods:{
      Data(){
        console.log(`technology: ${this.technology} profession: ${this.profession}`)
      }
    }
  }
</script>