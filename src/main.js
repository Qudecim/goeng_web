import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import api from './api.js'
import store from './store'




axios.defaults.withCredentials = true
axios.defaults.validateStatus = function (status) {
  return status < 500; // Resolve only if the status code is less than 500
}

const app = createApp(App)

router.beforeEach(async (to, from, next) => {
    if (!store.state.isAuthenticated) {
      let auth_response = await api.auth()
      if (auth_response.status === 200) {
        store.commit('authentificate')
      }
    }

    if (
      !store.state.isAuthenticated && (to.name !== 'sign-in' && to.name !== 'sign-up')
    ) {
        next('/web/sign-in')
    } else {
        next()
    }
})

app.use(router)
app.use(store)

app.mount('#app')
