<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const login = ref('')
  const pass = ref('')

  const error = ref(false)

  const connexion = () => {
    if(login.value === 'admin' && pass.value === 'pass') {
      localStorage.token = 'montokendetest'
      router.push('/dashboard')
    } else {
      error.value = true
    }
  }

</script>


<template>
  
  <h2>Login</h2>

  <p v-show="error" class="error">Erreur de login/password</p>

  <div class="login-wrapper">
    <form action="" class="login-form" @submit.prevent="connexion">
      <input type="text" name="login" placeholder="login" v-model.lazy.trim="login"><br>
      <input type="text" name="password" placeholder="password" v-model.lazy.trim="pass"><br>
      <button>Connection</button>
    </form>
  </div>

</template>

<style scoped>

  .error {
    color: red;
  }

</style>