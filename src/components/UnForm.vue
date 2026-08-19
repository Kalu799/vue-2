<script setup>

  import { ref } from 'vue'

  const initialNewMemberState = () => ({
    pseudo: "",
    fonction: "",
    ddn: "",
    actif: false
  })
  
  const newMember = ref(initialNewMemberState())

  const emits = defineEmits(['dataForm'])

  const sendData = () => {
    emits('dataForm', { ...newMember.value })
    //{ ...newMember.value } -> on n'envoie pas l'instance/l'objet newMember MAIS directement la valeur de newMember
    newMember.value = initialNewMemberState()
  }

</script>

<template>

  <div class="form-wrapper">
    <h2>Ajouter un nouveau membre à la team :</h2>
    <form action="" @submit.prevent="sendData" ref="newMember.value">
      <input type="text" name="pseudo" placeholder="Nom" v-model.lazy.trim="newMember.pseudo"><br>
      <input type="text" name="fonction" placeholder="Fonction" v-model.lazy.trim="newMember.fonction"><br>
      <input type="date" name="ddn" v-model.lazy.trim="newMember.ddn"><br>

      <button>Ajouter</button>
    </form>
  </div>

</template>