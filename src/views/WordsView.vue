<script setup>
import { ref } from 'vue'
import api from '../api'
import QIconTrashBlack from '../components/icons/QIconTrashBlack.vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import QControll from '../components/QControll.vue'


const route = useRoute()
const router = useRouter()
const words = ref([])

onMounted(async () => {
  let response = await api.word_list(route.params.id)
  if (response.status === 200) {
    let data = []
    for (const key in response.data) {
      const item = response.data[key]
      data.push({id: item.id, first: item.first, second: item.second})
    }
    words.value = data
  }
})

function remove(word_id, word_index) {
  let response = api.word_remove(route.params.id, word_id)

  if (response.status === 200) {
    router.push('/web/dict/' + route.params.id)
    
  }
  words.value.splice(word_index, 1)
}

function add() {
  router.push('/web/word/add/' + route.params.id)
}

</script>

<template>
  <main style="height: 100%;">
    <QControll title="" add="1"  @event_add="add"></QControll>
    <div class="words_list">
      <div v-for="(word, index) in words" class="words_list_line">
        <div class="words_list_line_item" style="width: calc(50% - 10px);">{{ word.first }}</div>
        <div class="words_list_line_item" style="width: calc(50% - 10px);">{{ word.second }}</div>
        <div class="words_list_line_item" style="width: 20px;"><div style="width: 20px; height: 20px;"  @click="remove(word.id, index)"><QIconTrashBlack/></div></div>
      </div>
      

    </div>

  </main>
</template>