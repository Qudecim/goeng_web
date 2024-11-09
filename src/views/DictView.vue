<script setup>
import { ref } from 'vue'
import api from '../api'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import QControll from '../components/QControll.vue'

const words = ref([])
const route = useRoute()
const router = useRouter()
const current_word = ref(0)
const is_first = ref(true)
const left = ref(0)

onMounted(async () => {
  let response = await api.word_list(route.params.id)
  if (response.status === 200) {
    let data = []
    for (const key in response.data) {
      const item = response.data[key]
      data.push({id: item.id, first: item.first, second: item.second})
    }
    for (const key in response.data) {
      const item = response.data[key]
      data.push({id: item.id, first: item.second, second: item.first})
    }
  
    words.value = data
  }
})

function translate() {
  is_first.value = !is_first.value
}

function next(know) {

  if (know) {
    words.value.splice(current_word.value, 1)
  } else {
    current_word.value++
  }

  if (current_word.value > words.value.length - 1) {
    current_word.value = 0
  }
  is_first.value = true
}

function add() {
  router.push('/web/word/add/' + route.params.id)
}

async function controll_list() {
  router.push('/web/words/' + route.params.id)
}

let start_position = 0;
function start(e) {
  if (e.touches.length == 1) {
    start_position = e.touches[0].clientX
  }
}

const word_color = ref('rgb(255, 255, 255)')
function move(e) {
  let t = e.touches[0].clientX - start_position
  let percentage = Math.abs(t) / 300
  left.value = t

  // rgb(39, 174, 96)
  // rgb(231, 76, 60)
  let red = 255
  let green = 255
  let blue = 255
 
  if (t > 0) {
    red = 255 - Math.floor(percentage * (255 - 39))
    green = 255 - Math.floor(percentage * (255 - 174))
    blue = 255 - Math.floor(percentage * (255 - 96))
  } else {
    red = 255 - Math.floor(percentage * (255 - 231))
    green = 255 - Math.floor(percentage * (255 - 76))
    blue = 255 - Math.floor(percentage * (255 - 60))
  }
  
  word_color.value = `rgb(${red}, ${green}, ${blue})`
}


function end(e) {
  left.value = 0
  word_color.value = 'rgb(255, 255, 255)'
  let t = e.changedTouches[0].clientX - start_position
  if (Math.abs(t) > 100) {
    if (t > 0) {
      // know word
      next(true)
    } else {
      // don't know
      next(false)
    }
  }
}

</script>

<template>
  <main style="height: 100%;">
    <div class="dict_main_container">

      <QControll title="" add="1" list="1" @event_add="add" @event_list="controll_list"></QControll>

      <div v-if="words.length == 0" class="dict_holder">
        <p>Здесь ничего нет</p>
      </div>

      <div v-if="words.length > 0" class="dict_main" @touchstart="start" @touchmove="move" @touchend="end" :style="{ left: left + 'px'}">
        <div class="dict_word" @click="translate" >
          <div :style="{color: word_color}">{{ is_first ? words[current_word].first: words[current_word].second }}</div>
        </div>
      </div>

    </div>

  </main>
</template>