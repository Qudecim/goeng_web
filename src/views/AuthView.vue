<script setup>
import { ref } from 'vue'
import api from '../api'
import { useStore } from 'vuex'
import QInput from '../components/QInput.vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const login = ref("")
const password = ref("")

async function sign_in() {
  let response = await api.sign_in(login.value, password.value)

  if (response.status === 200) {
    store.commit('authentificate')
    router.push('/')
  }
}

async function sign_up() {
  let response = await api.sign_up(login.value, password.value)

  if (response.status === 200) {
    store.commit('authentificate')
    router.push('/')
  }
}

</script>

<template>
  <main class="auth_main">
    <div class="auth_form">
    <QInput title="Username" v-model="login"/>
    <QInput title="Password" v-model="password" type="password"/>

    <div class="auth_buttons">
      <div class="green auth_up" @click="sign_up">Sign-up</div>
      <div class="green auth_in" @click="sign_in">Sign-in</div>
    </div>
  </div>

  </main>
</template>
