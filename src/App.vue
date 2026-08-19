<script setup>

  import {RouterLink,RouterView} from 'vue-router'

</script>


<template>

  <h1>Mon App</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <div class="wrapper">
    <router-view></router-view>
  </div>

</template>

<style scoped>

  .router-link-active {
    color: red;
  }

</style>