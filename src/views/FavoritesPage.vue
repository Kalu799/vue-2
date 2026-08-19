<script setup>

  import { ref } from 'vue'

  // import du team Store
  import { useTeamStore } from '@/stores/teams'
  // on crée un array teamStore en utilisant useTeamStore() pour accéder au store
  const teamStore = useTeamStore()
  // allTeam est une fct mais on l'appelle sans les ()
  const team = ref(teamStore.allTeam)

</script>


<template>

  <h1>Mes favoris</h1>

  <p>{{ team }}</p>

</template>