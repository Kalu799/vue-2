<script setup>

  import { ref, computed } from 'vue'

  const props = defineProps(['item'])

  const textBtn = computed(() => {return props.item.done ? ref('Undone') : ref('Done')})

  const emits = defineEmits(['active'])

  const sendAction = () => {

    const statu = !props.item.done

    emits('active', {
      statu,
      id: props.item.id
    })
  }

</script>

<template>

  <div>
    <p>{{ item.id }}</p>
    <p>{{ item.tabel }}</p>
    <p>{{ item.date }}</p>
  </div>
      <button @click="sendAction">{{ textBtn }}</button>

</template>