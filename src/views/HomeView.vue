<script setup>
import { ref } from 'vue'
import api from '../api'
import { onMounted } from 'vue'
import QControll from '../components/QControll.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dicts = ref([])

onMounted(async () => {
    let response = await api.dict_list()
    if (response.status === 200) {
      dicts.value = response.data
    }
})

function add() {
  router.push('/web/dict/add')
}

</script>

<template>
  <main>
    <QControll title="Dictionaries" add="1" @event_add="add"></QControll>
    <div class="container">
      <RouterLink v-for="dict in dicts" class="dict-item" :to="'/web/dict/' + dict.id">
          <div>{{ dict.name }}</div>
          <div class="dict_discribes"><div class="dict_discribe">create: 2024 ferbruary 16</div><div class="dict_discribe">last: yeasterday</div></div>
      </RouterLink>
    </div>
  </main>
</template>
