import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css"
import "@fortawesome/fontawesome-free/css/all.css"
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import keys from './utils/keys'
import i18n from './i18n'

Vue.config.productionTip = false

let socket = io(keys.API_BASE_PATH)
let client = feathers()

client.configure(socketio(socket, {
    timeout: 3000000
}))

client.configure(auth())
Vue.prototype.$client = client

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
