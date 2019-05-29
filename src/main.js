import Vue from 'vue'
import App from './App.vue'
import {createRouter} from "./routes"

Vue.config.productionTip = false

const router = createRouter()

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
