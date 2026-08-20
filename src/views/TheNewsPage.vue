<script setup>

  import { useRoute } from 'vue-router';

  const route = useRoute()

  console.log(route)

  const id = Number(route.params.id)

</script>


<template>

  <h2>One news {{ id }}</h2>

</template>