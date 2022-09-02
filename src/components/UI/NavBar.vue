<template>
  <div class="navbar">
    <div class="nav-btn" @click="$router.push('/')">Home</div>
    <div class="navbar__btns">
      <my-button class="nav-btn" @click="$router.push('/illustrations')">Illustrations</my-button>
      <my-button class="nav-btn" @click="$router.push('/about')">About</my-button>
      <my-button class="nav-btn" @click="$router.push('/store')">Store</my-button>
      <my-button class="nav-btn" @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>
<script>
import MyButton from './MyButton.vue'
  export default {
  components: { MyButton },
  } 
</script>
<style scoped>
.navbar {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: lightgray;
  border-radius: 4px;
  box-shadow: 2px 2px 4px lightgray;
}
.navbar__btns {
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
}
.nav-btn {
  margin-top: 0 !important;
  width: 100px;
  cursor: pointer;
}
</style>
