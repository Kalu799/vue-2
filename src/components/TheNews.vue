<script setup>

  import { ref } from 'vue'

  // on ne change JAMAIS les valeurs des propriétés, on les les mets dans une const ref() qu'on modif ensuite
  const props = defineProps(['author', 'titre'])

</script>


<template>

  <div class="news">
    <h2>{{ titre }}</h2>
    <p><slot/></p>
    <p class="author">{{ author }}</p>
  </div>

</template>

<style scoped>

  .news {
    border: 2px solid black;
    margin-block: .5rem;
    padding-inline: .5rem;
  }

  .author {
    text-align: end;
  }

</style>