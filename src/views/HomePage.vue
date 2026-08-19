<script setup>

  import Counter from '@/components/TheCounter.vue'

</script>


<template>

  <h1>Home</h1>

  <div>
    <h2>My counters</h2>
    <Counter></Counter>
  </div>

</template>

<style scoped>
  .hidden {
    display: none;
  }
</style>