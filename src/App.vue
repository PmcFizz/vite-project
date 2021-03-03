<template>
<div class="text-center">
  <div id='nav'>
    <router-link class="link" to='/home'>Home</router-link> |
    <router-link class="link" to='/user'>User </router-link>
  </div>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</div>
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.text-center{
  text-align: center;
}
.link:hover{
  color: red;
}
</style>