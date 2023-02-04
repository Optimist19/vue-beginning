<template>
  <!-- <router-view></router-view> -->
  <ComputedPropsOne />
  <ComputedProp />
  <voncepre />
  <ModiFiers />
  <PopUp />
  <ComputedSetterNGetter />
  <CalendarDate />
  <Form3 />
  <MultipleEventHand />
  <CondiListRen />
  <ArrayLoop />
  <If />
  <div id="app">
    <!-- <ApiTwo /> -->
    <ApiCall />
    <Dynamic />
    <Watchers />
    <DataAndNonData  name=" OLUWASEGUN" title="Mr"/>
    <DataAndNonDataOne  name=" OLUWASEGUN" title="Mr"/>
    <Form2 />
    <Form1 />
    <Form />
    <RefTwo />
    <Ref />
    <Teacher />
    <Comp surname="You wanna know my name" />
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Comp from './components/Comp.vue'
import Teacher from './components/Teacher.vue'
import Ref from './components/Ref.vue'
import RefTwo from './components/RefTwo.vue'
import Form from './components/Form.vue'
import Form1 from './components/Form1.vue'
import Form2 from './components/Form2.vue'
import DataAndNonData from './components/DataAndNonDataProps.vue'
import DataAndNonDataOne from './components/DataAndNonDataProps1.vue'
import Watchers from './components/Watchers.vue'
import Dynamic from './components/DynamicComponent.vue'
import If from './components/If.vue'
import ApiCall from './components/Api.vue'
import ArrayLoop from './components/ArrayLoop.vue'
import CondiListRen from './components/CondiListRen.vue'
import MultipleEventHand from './components/MultipleEventHand.vue'
import Form3 from './components/Form3.vue'
import CalendarDate from './components/CalendarDate.vue'
import ComputedSetterNGetter from './components/ComputedSetterNGetter.vue'
import PopUp from './components/PopUp.vue'
import ModiFiers from './components/ModiFiers.vue'
import voncepre from './components/VOnceAndpre.vue'
import ComputedProp from './components/ComputedProp.vue'
import ComputedPropsOne from './components/ComputedPropsOne.vue'
// import ApiTwo from './components/ApiTwo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Comp,
    Teacher,
    Ref,
    RefTwo,
    Form,
    Form1,
    Form2,
    DataAndNonData,
    DataAndNonDataOne,
    Watchers,
    Dynamic,
    If,
    ApiCall,
    ArrayLoop,
    CondiListRen,
    MultipleEventHand,
    Form3,
    CalendarDate,
    ComputedSetterNGetter,
    PopUp,
    ModiFiers,
    voncepre,
    ComputedProp,
    ComputedPropsOne,
    // ApiTwo
  },
  beforeCreate(){
    console.log("beforeCreate")
  },
  Created(){
    console.log("Create")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
