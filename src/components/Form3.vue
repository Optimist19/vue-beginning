<template>
  <p>{{JSON.stringify(form, null, 2)}}</p>
  <form>
    <div>
      <label for="name">Name:
        <input type="text" id="name" v-model="form.name"/>
      <label>
    </div>

    <div>
      <label for="profileSummary">Profile Summary:
        <textarea id="profileSummary" v-model="form.profileSummary"></textarea>
      <label>
    </div>

    <div>
      <label for="country">Country:
        <select id="country" v-model="form.country">
          <option value="">select a country</option>
          <option value="singapore">Singapore</option>
          <option value="china">China</option>
          <option value="nigeria">Nigeria</option>
          <option value="maldives">Maldives</option>
          <option value="dubai">Dubai</option>
        </select>
      </label>
    </div>

    <div>
      <label for="jobplace">Country:
        <!-- In this place, to select multiple
        options you hold on control and click
          on the options you want -->
        <select id="jobplace" v-model="form.jobplace" multiple>
          <option value="">select a country</option>
          <option value="singapore">Singapore</option>
          <option value="china">China</option>
          <option value="nigeria">Nigeria</option>
          <option value="maldives">Maldives</option>
          <option value="dubai">Dubai</option>
        </select>
      <label>
    </div>
    
    <div>
      <label for="remote">Remote work:
        <input type="checkbox" v-model="form.remoteWork" id="remote">
      </label>
    </div>
    
    <div><label for="senior">Senior Staff:
        <input type="checkbox" v-model="form.seniorStaff" id="senior" true-value="yes" false-value="no">
      </label>
    </div>
    
    <!-- <input type="text"> -->
  </form>
</template>

<script>
  export default{
    data(){
      return{
        form:{
          name: "",
          profileSummary: "",
          country: '',
          jobplace: [],
          remoteWork: false,
          seniorStaff: "no"
        }
      }
    }
  }
</script>