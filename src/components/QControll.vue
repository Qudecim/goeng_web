<script setup>
import QIconAdd from '../components/icons/QIconAdd.vue'
import QIconTrash from '../components/icons/QIconTrash.vue'
import QIconList from '../components/icons/QIconList.vue'

const props = defineProps(['title', 'add', 'remove', 'list'])
</script>

<template>
  <div class="controll">
    <div class="controll-left">{{ title }}</div>
    <div class="controll-right">
      <div class="controll-button" v-if="remove" @click="$emit('event_remove')"><div class="controll-button-icon"><QIconTrash/></div></div>
      <div class="controll-button" v-if="add" @click="$emit('event_add')"><div class="controll-button-icon"><QIconAdd/></div></div>
      <div class="controll-button" v-if="list" @click="$emit('event_list')"><div class="controll-button-icon"><QIconList/></div></div>
    </div>
  </div>
</template>

<style scoped>
.controll {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
}
.controll-left {
  font-size: 24px;
  color: var(--vt-c-secondary);
}
.controll-right {
  display: flex;
}
.controll-button {
  overflow: hidden;
  padding: 5px 10px 5px 20px;
}
.controll-button-icon {
  width: 20px;
  height: 20px;
}
</style>
