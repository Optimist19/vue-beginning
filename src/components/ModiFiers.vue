<template>
  <h1>Trim | Number | lazy</h1>
  <form>
      <h6>{{form}}</h3>
      <br />

    <!-- The trim is good for mostly forms, where the whitespaces in the input by the user are trim to just one space -->
    <label for="trim"> 
      <input type="text" id="trim" v-model="form.trim" placeholder="trim"/>
    </label>
    <br />

    <!-- The number provided by the user is supposed to be in string, due to the varaible. Cases, where you check a data from from an Api, the number input is always in string, so the .number helps to convert it to number -->

    <label for="number">
      <input type="number" id="number" v-model.number="form.number" placeholder="number"/>
    </label>
    <br />

    <!-- This will something like lazy-load user's input until it clicks the outer part of the input after typing the input -->
    <label for="sample">
      <input type="text" id="sample" v-model.lazy="form.sample" />
    </label>
  </form>
</template>

<script>
  export default{
    data(){
      return{
        form:{
          trim: "",
          number: "",
          sample: ""
        }

      }
    }
  }
</script>