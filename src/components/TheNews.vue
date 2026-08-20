<script setup>

  import { ref } from 'vue'

  import { useNewsStore } from '@/stores/news'

  import Form from '@/components/NewCommentForm.vue'

  const newsStore = useNewsStore()

  const news = ref(newsStore.allNews)
  //console.log(news.value)

  const props = defineProps(['index', 'item'])

  // on ne change JAMAIS les valeurs des propriétés, on les les mets dans une const ref() qu'on modif ensuite
  //const props = defineProps(['author', 'titre'])

  const emits = defineEmits(['dataForm'])

  const addComment = (payload) => {
    //console.log(payload)

    emits('dataForm', {
      payload,
      index: props.index
    })
  }

  import { useRoute } from 'vue-router';
  // on récup les données de la route avec la fct useRoute()
  const route = useRoute()
  //console.log(route)
  // on récup l'id de la route
  const id = Number(route.params.id)
  //console.log(id)
  const comments = ref(false)
  if(!Number.isNaN(id)) {
    comments.value = true
  }

  //console.log(props.comments)

</script>


<template>

  <!-- ma news -->
  <div class="news">
    <h2>{{ item.titre }}</h2>
    <p>{{ item.content }}</p>
    <p class="author">{{ item.author }}, {{ item.date }}</p>
    <!-- lien qui n'apparaitra que sur /news -->
    <RouterLink :to="`/news/${index}`" v-if="comments === false">Plus d'infos</RouterLink>

  </div>

  <!-- commentaires de ma news qui se chargeront si on est sur la bonne route /news/:id -->
  <div v-if="comments === true">
    <h3>Comments</h3>
    <ul>
      <li v-for="(item, key) in item.comments" :index="key">
        <div class="comment">
          <p class="pseudo">{{ item.pseudo }}</p>
          <p>{{ item.content }}</p>
          <p class="comment-date">{{ item.date }}</p>
        </div>
      </li>
    </ul>
    <Form @dataForm="addComment"></Form>
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

  .comment {
    border: 1px dashed blue;
    padding: .5rem;
  }

  .pseudo {
    font-weight: bold;
  }

  .comment-date {
    text-align: end;
  }

</style>