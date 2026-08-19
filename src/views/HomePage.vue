<script setup>

  import Counter from '@/components/TheCounter.vue'

  import News from '@/components/TheNews.vue'

</script>


<template>

  <h1>Home</h1>

  <div>
    <h2>My counters</h2>
    <Counter></Counter>
  </div>

  <div>
    <h2>My news</h2>
    <News author="Marcel" titre="News 1">Texte du contenu de la news 1</News>
    <News author="Thierry" titre="News 2">Texte du contenu de la news 2</News>
  </div>

</template>

<style scoped>
  .hidden {
    display: none;
  }
</style>