<script setup>

  import { useRoute } from 'vue-router';

  import { ref } from 'vue'

  const route = useRoute()

  //console.log(route)

  const id = Number(route.params.id)

  import { useNewsStore } from '@/stores/news'

  const newsStore = useNewsStore()
  
  const myNews = ref(newsStore.oneNews(id))

  console.log(myNews)

</script>


<template>

  <h2>One news {{ id }}</h2>

  <div class="news" v-if="myNews">
    <h3>{{ myNews.titre }}</h3>
    <p>{{ myNews.content }}</p>
    <p class="author">{{ myNews.author }}, {{ myNews.date }}</p>
  </div>

  <div v-else>
    <p>la news n'existe pas</p>
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