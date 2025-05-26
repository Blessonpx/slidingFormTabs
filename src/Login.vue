<template>
    <h1>Login</h1>
    <h3 v-if="error" class="warning">{{errorMessage}}</h3>
    <form @submit.prevent="logIn">
      <label>Username: </label>
      <input type="text" name="username" id="username" v-model="username">
      <label>Password: </label>
      <input type="password" name="password" id="password" v-model="password">
      <button>Log In</button>
    </form>
<router-link to="/signup">Sign Up</router-link>
</template>
<script>
export default {
    name: 'UserLogin'
}
</script>
<style>
body {
  font-family: sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2em;
  width: 80%;
  margin: 0 auto;
}
input, textarea, button, p, div, section, article, select {
  display: 'block';
  width: 100%;
  font-family: sans-serif;
  font-size: 1em;
  margin: 0.5em;
}
.warning {
  color: red;
}
</style>
