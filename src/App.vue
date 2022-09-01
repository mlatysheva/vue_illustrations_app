<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
  
</template>
<script>
import NavBar from './components/UI/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>
<style>
  * {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px red solid; */
}
#app {
  width: 100%;
  max-width: 1000px;
}
.app {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
</style>