<script setup>

  import { ref } from 'vue'

  import News from '@/components/TheNews.vue'

  import { useNewsStore } from '@/stores/news'

  const newsStore = useNewsStore()

  const news = ref(newsStore.allNews)

  const newComment = (payload) => {
    //console.log(payload)

    const index = payload.index
    const newPayload = payload.payload

    newsStore.addComment(newPayload, index)
  }

  import { useRoute } from 'vue-router';

  // on récup les données de la route avec la fct useRoute()
  const route = useRoute()

  // on récup l'id de la route
  const id = Number(route.params.id)

  //console.log(id)

  const comments = ref(false)
  if(!Number.isNaN(id)) {
    comments.value = true
  }

</script>


<template>

  <!-- <div>
    <h2>My news</h2>
    <News author="Marcel" titre="News 1">Texte du contenu de la news 1</News>
    <News author="Thierry" titre="News 2">Texte du contenu de la news 2</News>
  </div> -->

  <div class="news-wrapper">
    <h2>News :</h2>
    <ul class="news-ul">
      <!-- boucle un li pour chaque item de team -->
      <li class="news-item" v-for="(item,key) in news" :index="key">
        <!-- permet de récup 'item' et 'index' dans le composant -->
        <!-- écoute 'toggle' qui est envoyé du composant pour lancer 'toggleActive' -->
        <News :item="item" :index="key" :comments="comments" @dataForm="newComment"></News>
      </li>
    </ul>
  </div>

</template>

<style scoped>

  .news-item {
    border: 1px solid red;
    padding: .5rem;
  }

</style>