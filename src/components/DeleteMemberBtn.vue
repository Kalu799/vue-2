<script setup>

  import { ref } from 'vue'

  const props = defineProps(['index'])

  const emits = defineEmits(['delete'])

  const sendDelete = () => {
    emits('delete', props.index)
    //console.log("btn vers member")
  }

</script>


<template>

  <button @click="sendDelete">Delete</button>

</template>