<script setup>
const props = defineProps(['title', 'type'])
const model = defineModel()
</script>

<template>
    <div class="form__group field">
        <input :type="!type ? 'input' : type" class="form__field" :placeholder="title" :id="'inp' + title" v-model="model" required  />
        <label :for="'inp' + title" class="form__label">{{ title }}</label>
    </div>
  </template>
  
  <style scoped>


.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--vt-c-white-soft);
  outline: 0;
  font-size: 1.3rem;
  color: var(--vt-c-white);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--vt-c-white-soft);
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--vt-c-primary);
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-color: var(--vt-c-primary);
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
  </style>
  