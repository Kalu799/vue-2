<script setup>

  import { useTodoStore } from '@/stores/todo';
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import Todo from '@/components/ToDo.vue'

  const todosStore = useTodoStore()

  const { allTodos: todos } = storeToRefs(todosStore)

  const toggleAction = async (payload) => {

    await todosStore.toggleDone(payload.id, payload.statu)

    await todosStore.getApiTodos()
  }

  onMounted(async () => {
    await todosStore.getApiTodos()
    todos.value = todosStore.allTodos
  })

</script>


<template>

  <h2>To Do Liste</h2>

  <ul>
    <li v-for="(item) in todos" :class="{active:item.done}">
      <Todo :item="item" @active="toggleAction"></Todo>
    </li>
  </ul>

</template>


<style scoped>

.active {
    background: rgb(192, 255, 192);
  }

</style>