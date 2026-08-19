<script setup>

// import composant Member
import Member from '@/components/TeamMember.vue'
import Form from '@/components/UnForm.vue'
// on importe les fct dont on a besoin
import { ref, computed } from 'vue'

import { useTeamStore } from '@/stores/teams'

  // on crée un array teamStore en utilisant useTeamStore() pour accéder au store
  const teamStore = useTeamStore()
  // allTeam est une fct mais on l'appelle sans les ()
  const team = ref(teamStore.allTeam)

  const addMember = (payload) => {
    //console.log(newMember.value)
    team.value.push(payload)
    //newMember.value = initialNewMemberState()
  }

  // fct qui change la valeur de 'actif' d'1 item de 'team' par son opposé (true -> false, false -> true)
  const toggleActive = (payload) => {
    //alert(payload.index)
    //team.value[payload.index].actif = !team.value[payload.index].actif
    teamStore.toggleActif(payload.index)
  }

  const deleteMember = (payload) => {
    //console.log(payload)
    //team.value.splice(payload, 1)
    teamStore.deleteMember(payload)
  }

// var vide liée a input search
const filtre = ref('')
// var de la team qui réagis aux modifs
const teamFiltred = computed(() => {
  // const de la recherche mise en minuscule
  const recherche = filtre.value.toLowerCase()
  // si la recherche n'est pas assée longue, on renvois l'array de team complet
  if (recherche.length <= 2) {
    return team.value
  }
  // sinon on filtre -> .filter() sur array
  return team.value.filter((item) => {
    return (
      // on check sur chaque item de l'array 'team' si le pseudo ou la fonction en minuscule incluent la recherche -> .includes() sur string
      item.pseudo.toLowerCase().includes(recherche) ||
      item.fonction.toLowerCase().includes(recherche)
    )
  })
})

</script>


<template>

  <h1>About</h1>

  <!-- input search lié à la const 'filtre' -->
  <input type="search" v-model="filtre">

  <div class="team-wrapper">
    <h2>Team :</h2>
    <ul class="team">
      <!-- boucle un li pour chaque item de team -->
      <li class="team-item" v-for="(item,key) in teamFiltred" :index="key">
        <!-- permet de récup 'item' et 'index' dans le composant -->
        <!-- écoute 'toggle' qui est envoyé du composant pour lancer 'toggleActive' -->
        <Member :item="item" :index="key" @toggle="toggleActive" @delete="deleteMember"></Member>
      </li>
    </ul>
  </div>

  <Form @dataForm="addMember"></Form>

</template>