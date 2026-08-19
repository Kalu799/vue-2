<script setup>

  // on importe les fct dont on a besoin
  import { ref, computed } from 'vue'

  import Btn from '@/components/DeleteMemberBtn.vue'
  // const props qui récup les données de la view
  const props = defineProps(['index', 'item'])
  // fct computed() qui renverra qque chose à chaque changement de la valeur
  const textBtn = computed(() => {return props.item.actif ? ref('Désactiver') : ref('Activé')})
  // crée un event personnalisé 'toggle'
  const emits = defineEmits(['toggle', 'delete'])
  // fct du btn
  const toggleActive = () => {
    // envoie 'toggle' au parent avec le payload {}
    emits('toggle', {index:props.index})
  }

  const deleteMember = (payload) => {
    if(confirm('Sûr ?')) {
      emits('delete', payload)
    }
    //console.log("member vers about")
  }

</script>


<template>
  <!-- mettra la class 'active' si item.actif === true -->
  <div class="team-item-data" :index="index" :class="{active:item.actif}">
    <dl>
      <dt>Nom :</dt>
      <dd>{{ item.pseudo }}</dd>
      <dt>Age :</dt>
      <dd>{{ item.ddn }}</dd>
      <dt>Fonction :</dt>
      <dd>{{ item.fonction }}</dd>
      <button @click="toggleActive">{{ textBtn }}</button>
      <Btn :index="index" @delete="deleteMember"></Btn>
    </dl>
  </div>

</template>


<style scoped>

  .team-item-data {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }

  .active {
    background: rgb(192, 255, 192);
  }

</style>