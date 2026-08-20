<script setup>

  import {RouterLink,RouterView} from 'vue-router'

</script>


<template>

  <h1>Mon App</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
    |
    <RouterLink to="/news">News</RouterLink>
    |
    <RouterLink to="/todo">ToDo</RouterLink>
    |
    <RouterLink to="/login">Login</RouterLink>
    |
    <RouterLink to="/dashboard">Dashboard</RouterLink>
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