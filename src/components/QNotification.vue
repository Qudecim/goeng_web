<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div class="notify-conteriner">
    <div class="notify" v-for="error_text in store.state.errors_text"> {{ error_text }}</div>
  </div>
</template>
  
<style scoped>
.notify-conteriner {
  position: fixed;
  top: 20px;
  right: 0px;
  width: 40%;
}
.notify {
  background-color: #ee5253;
  padding: 5px 10px;
  margin: 10px 0;
  color: #fff; 
}
</style>
  