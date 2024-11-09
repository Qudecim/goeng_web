<script setup>
import { ref } from 'vue'
import api from '../api'
import QInput from '../components/QInput.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref("")

async function create() {
  let response = await api.dict_create(name.value)

  if (response.status === 200) {
    router.push('/')
  } else {
    console.log(response.data)
  }
}

</script>

<template>
  <main class="default_main">

    <RouterLink class="dict_back" :to="'/'">back</RouterLink>

    <div class="default_form">
    <QInput title="Name" v-model="name"/>

    <div class="default_buttons">
      <div class="green default_button" @click="create">Create</div>
    </div>
    

  </div>

  </main>
</template>
