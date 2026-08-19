<script setup>

  import { useTodoStore } from '@/stores/todo';
  import { onMounted, ref } from 'vue';

  const todosStore = useTodoStore()

  const todos = ref([])

  onMounted(async () => {
    await todosStore.getApiTodos()
    todos.value = todosStore.allTodos
  })

</script>


<template>

  <h2>To Do Liste</h2>
  {{ todos }}

</template>