<template>
  <div>
    <SlotTwo>
      <template v-slot:header>
        <h1>You getting good bro</h1>
      </template>
      <template v-slot:body>
        <h1>You getting better bro</h1>
      </template>
      <template v-slot:footer>
        <h1 >You are the best bro</h1>
      </template>
    </SlotTwo>
    <SlotOne>
      <h1>Good work done bro</h1>
    </SlotOne>
  </div>
  <DataSharing :dataToGet="dataToGet" />
  <p>Show some work: {{takeData}}</p>
  <div>
    <ul>
     <li v-for="detail in tel" :key="detail">
      <SecondChild :data="detail" />
     </li>
    </ul>
  </div>
  <Child name="bruce"/>
  <p>{{tel}}</p>
  <p v-if="show">nice work</p>
  <p v-else>better work</p>
  <button v-on:click="show=!show">click me</button>

  <p v-if="show">{{seNumber("name")}}</p>
  <div>
    <label for="iron">Iron
      <input type="checkbox" value="iron" v-model="technologies" id="iron">
    </label>

    <label for="plate">Plate
      <input type="checkbox" value="plate" v-model="technologies" id="plate">
    </label>

    <label for="spoon">Spoon
      <input type="checkbox" value="spoon" v-model="technologies" id="spoon">
    </label>
    <p>{{technologies}}</p>
  </div>
  <div>
    <label for="car">Car
      <input type="radio" value="car" v-model="things" name="things" id="car">
    </label>

    <label for="mustang">Mustang
      <input type="radio" value="mustang" v-model="things" name="things" id="mustang">
    </label>

    <label for="muscle">Muscle
      <input type="radio" value="muscle" v-model="things" name="things" id="muscle">
    </label>
    <p>{{things}}</p>
  
  </div>
  <p  v-else>{{takeDotThis().address}}</p>
  <input type="text"  v-model="name"/>
  <input type="text"  v-model="get"/>
  <p>{{get}}</p>
  <p>{{name}}</p>
  <ul>
    <li v-for="item in tel" :key="item">
      {{item.email}}
    </li>
  </ul>
  <p v-for="digit in digits" :key="digit">{{digit}}</p>
  <p v-if="isBedTime">It is bed time!!!</p>
  <p v-else>Stay out to play!!!</p>
</template>

<script>
 import Child from "../components/Child.vue" //"./Child.vue"
 import SecondChild from "./SecondChild.vue"
 import DataSharing from "./Child2Parent.vue"
 import SlotOne from "./SlotOne.vue"
 import SlotTwo from "./SlotTwo.vue"

 export default{
   name: 'HelloWorld',
    components:{
     Child,
     SecondChild,
     DataSharing,
     SlotOne,
     SlotTwo
    },
  data(){
    return{
      digits: [1, 2, 3, 4, 5, 6, 8, 7],
      name: 100,
      isBedTime: true,
      technologies: [],
      things: null,
      takeData: "",
      get: "",
      tel: [{
       email: "oluwasegunbamidele3@gmail.com", 
       number: 999
      },
      {
        email: "oluwas@gmail.com",
        number: 569
      }],
      show: true,
      seNumber(c){
        return c
      },
      details: "No 12, Alhaji Shokoya street, Mafoluku Oshodi, Lagos State",
      takeDotThis(){
        return{
          address: this.details,
        }
      },
    }

  },
  methods: {
    getData()
    {
      console.log(`The password is : ${this.get}`)
    },

    dataToGet(data){
      this.takeData = data
    }
  }  
}
</script>