<script setup>
// On importe "ref" depuis Vue.
// ref permet de créer une variable réactive :
// lorsque sa valeur change, l'affichage est automatiquement mis à jour.
import { ref } from 'vue'

// Le compteur commence à zéro.
const counter = ref(0)

// Texte affiché dans le bouton.
const texte = ref('Start')

// Cette variable conservera l'identifiant du setInterval.
// null signifie qu'aucun intervalle n'est actif.
const intervalId = ref(null)

// Cette fonction est exécutée quand on clique sur le bouton.
const count = () => {
  // Si intervalId contient une valeur,
  // cela signifie que le compteur est actuellement actif.
  if (intervalId.value) {
    // On remet le texte du bouton sur "Start".
    texte.value = 'Start'

    // On arrête l'intervalle.
    clearInterval(intervalId.value)

    // On indique qu'il n'y a plus d'intervalle actif.
    intervalId.value = null
  } else {
    // Sinon, le compteur n'est pas actif.
    // On crée un intervalle exécuté toutes les 1 000 ms,
    // donc toutes les secondes.
    intervalId.value = setInterval(() => {
      // On ajoute 1 à la valeur du compteur.
      counter.value++
    }, 1000)

    // Le bouton permet maintenant d'arrêter le compteur.
    texte.value = 'Stop'
  }
}
</script>

<template>
  <!-- Affiche la valeur actuelle du compteur. -->
  <h2>{{ counter }}</h2>

  <!--
    @click="count" appelle la fonction count au clic.
    {{ texte }} affiche "Start" ou "Stop".
  -->
  <button @click="count">{{ texte }}</button>
</template>