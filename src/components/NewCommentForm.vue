<script setup>

  import { ref } from 'vue'

  const initialNewCommentState = () => ({
    pseudo: "",
    content: "",
    date: "",
  })
  
  const newComment = ref(initialNewCommentState())

  const emits = defineEmits(['dataForm'])

  const sendData = () => {
    const date = new Date

    newComment.value.date = date.toISOString().split('T')[0]

    emits('dataForm', { ...newComment.value })
    //{ ...newMember.value } -> on n'envoie pas l'instance/l'objet newMember MAIS directement la valeur de newMember
    newComment.value = initialNewCommentState()
  }

</script>

<template>

  <div class="form-wrapper">
    <h3>Ajouter un nouveau commentaire à cette news :</h3>
    <form action="" @submit.prevent="sendData" ref="newComment.value">
      <input type="text" name="pseudo" placeholder="Pseudo" v-model.lazy.trim="newComment.pseudo"><br>
      <input type="text" name="fonction" placeholder="Commentaire" v-model.lazy.trim="newComment.content"><br>

      <button>Poster</button>
    </form>
  </div>

</template>