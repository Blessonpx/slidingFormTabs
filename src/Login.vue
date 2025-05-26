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
import { ref } from 'vue';
import router from './router/index';
import config from './config.js'

export default {
    name: 'LogIn',
    setup() {
    const username = ref('');
    const password = ref('');
    const error = ref(false);
    const errorMessage = ref('');
    async function logIn() {
      if (username.value !== '' && password.value !== '') {
        var result = await talkToServer(username.value, password.value);

        if (result === "SUCCESS") {
          error.value = false;
          errorMessage.value = '';
          router.push('logout');
        } else {
          error.value = true;
          errorMessage.value = 'Something went wrong. Are you sure you have an account?';
        }
      } else {
        error.value = true;
        errorMessage.value = "Username and Password fields can't be empty!";
      }

    }
    async function talkToServer(username, password) {
      var data = JSON.stringify("FAILURE");
      await fetch(`${config.apiBaseUrl}/users/login`, {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        }),
      })
      .then(resp => resp.json() )
      .then(dataJson => data = dataJson)
      .catch(err => console.log(err));
      return data;
    }
    return {
      username,
      password,
      error,
      errorMessage,
      logIn,
    };
  }
};
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
