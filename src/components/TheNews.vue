<script setup>

  import { ref } from 'vue'

  import { useNewsStore } from '@/stores/news'

  import Form from '@/components/NewCommentForm.vue'

  const newsStore = useNewsStore()

  const news = ref(newsStore.allNews)
  //console.log(news.value)

  const props = defineProps(['index', 'item', 'comments'])

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

  console.log(props.comments)

</script>


<template>

  <div class="news">
    <h2>{{ item.titre }}</h2>
    <p>{{ item.content }}</p>
    <p class="author">{{ item.author }}, {{ item.date }}</p>

    <RouterLink :to="`/news/${index}`" v-if="comments === false">Plus d'infos</RouterLink>

  </div>
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