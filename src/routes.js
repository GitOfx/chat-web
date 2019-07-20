import Vue from 'vue'
import Router from "vue-router"

import Chat from "./components/Chat.vue"
import Login from "./components/Login.vue"
import edit from "./components/Editer.vue"
import PreviewPage from './components/PreviewPage.vue'
import ShowPage from './components/ShowPage.vue'

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
        component: ShowPage
      },
      {
        path: '/edit',
        component: edit
      },
      {
        path: '/preview',
        component: PreviewPage
      },
      {
        path: '/showpage',
        component: ShowPage
      },
    ]
  })

}