<template>
  <p>Form2</p>
  <p>{{ form }}</p>
  <form>
    <div>
      <label
        >Email:
        <input type="text" v-model="form.email" />
      </label>
    </div>
    <div>
      <label
        >Address:
        <input type="text" v-model="form.address" />
      </label>
    </div>
    <div>
      <label
        >Number:
        <input type="text" v-model="form.number" />
      </label>
    </div>
    <div>
      <label
        >Nationality:
        <select v-model="form.Nationality">
          <option value="USA">USA</option>
          <option value="CANADA">CANADA</option>
          <option value="NIGERIA">NIGERIA</option>
        </select>
      </label>
      <!-- <p>{{form.Nationality}}</p> -->
    </div>
    <div>
      <label
        >Female:
        <input
          type="radio"
          v-model="form.gender"
          value="female"
          name="gender"
        />
      </label>
      <label
        >Male:
        <input type="radio" v-model="form.gender" value="male" name="gender" />
      </label>
    </div>

    <button v-on:click="Data()" type="button">Data</button>
  </form>
</template>

<script>
export default {
  name: 'Form2',
  data() {
    return {
      form: {
        email: '',
        address: '',
        number: '',
        Nationality: '',
        gender: '',
      },
    };
  },
  methods: {
    Data() {
      // event.preventDefault()
      console.log(this.form);
    },
  },
};
</script>
