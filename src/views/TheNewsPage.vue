<script setup>

  // on importe ce dont on aura besoin
  import { useRoute } from 'vue-router';
  import { ref } from 'vue'
  import { useNewsStore } from '@/stores/news'
  import News from '@/components/TheNews.vue'

  // on récup les données de la route avec la fct useRoute()
  const route = useRoute()

  //console.log(route)

  // on récup l'id de la route
  const id = Number(route.params.id)
  //console.log(id)

  // on récup le store des news
  const newsStore = useNewsStore()
  // on crée myNews qui contiendra la news avec l'index qu'on cherche dans la route avec le getter oneNews(id) -> id = l'index de la news = id dans la route
  const myNews = ref(newsStore.oneNews(id))
  //console.log(myNews)

  // fct d'ajout d'un commentaire sur la news
  const newComment = (payload) => {
    //console.log(payload)

    const index = payload.index
    const newPayload = payload.payload

    newsStore.addComment(newPayload, index)
  }

  const comments = ref(false)
  if(!Number.isNaN(id)) {
    comments.value = true
  }

</script>


<template>

  <h2>One news | {{ id }}</h2>

  <!-- si on récupère bien une news, on l'affiche -->
  <div class="news" v-if="myNews">
    <!-- on charge le composant News en lui donnant les data de myNews et l'id en index -->
    <News :item="myNews" :index="id" @dataForm="newComment"></News>
  </div>

  <!-- si on ne récupère pas de news, on affiche ça : -->
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