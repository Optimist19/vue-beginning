const { createApp } = require('vue');
import App from "./App.vue";
// import {createRouter, createWebHistory} from "vue-router"
// import Watchers from './components/Watchers.vue'
// import Dynamic from './components/DynamicComponent.vue'
// const router = createRouter({
//   history: createWebHistory(),
//   routes:[{
//     path: "/",
//     name: "Watchers",
//     component: Watchers
//   },
//   {
//     path: "/dynamic",
//     name: "Dynamic",
//     component: Dynamic
//   }]
// })

createApp(App).mount("#app");
