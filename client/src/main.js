import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import { FIREBASE_CREDENTIALS } from './envs'
firebase.initializeApp(FIREBASE_CREDENTIALS)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
