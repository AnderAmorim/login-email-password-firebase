import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import { FIREBASE_CREDENTIALS } from './envs'
firebase.initializeApp({"apiKey":"AIzaSyDaBbl51sQ7kZWlSXmaAcIaHaMNc8Ha4AQ","authDomain":"logins-with-fb-ander.firebaseapp.com","projectId":"logins-with-fb-ander","storageBucket":"logins-with-fb-ander.appspot.com","messagingSenderId":"960575239415","appId":"1:960575239415:web:0f245ff41790406dd84ff2","measurementId":"G-4L8NME9481"})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
