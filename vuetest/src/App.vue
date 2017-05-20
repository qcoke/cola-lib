<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{name:'user',params:{id:123}}">User</router-link>
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
