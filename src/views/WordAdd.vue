<script setup>
import { ref } from 'vue'
import api from '../api'
import QInput from '../components/QInput.vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const first = ref("")
const second = ref("")

async function create() {
  let response = await api.word_create(route.params.dict_id, first.value, second.value)

  if (response.status === 200) {
    router.push('/web/dict/' + route.params.dict_id)
  } else {
    console.log(response.data)
  }
}

</script>

<template>
  <main class="default_main">

    <RouterLink class="dict_back" :to="'/'">back</RouterLink>

    <div class="default_form">
    <QInput title="Foregin" v-model="first"/>
    <QInput title="Local" v-model="second"/>

    <div class="default_buttons">
      <div class="green default_button" @click="create">Create</div>
    </div>
    

  </div>

  </main>
</template>
