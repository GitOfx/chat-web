import Vue from 'vue'
import Router from "vue-router"

import Chat from "./components/Chat.vue"
import Login from "./components/Login.vue"

Vue.use(Router)


export function createRouter() {
  return new Router({
    // mode: "history",
    fallback: false,
    routes: [{
        path: '/chat',
        component: Chat
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        component: Login
      }
    ]
  })

}