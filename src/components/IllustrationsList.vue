<template>
  <div class="category" v-for="illustration in illustrations">
    <div><strong>Title: </strong>{{ illustration.title }}</div>
    <div><strong>Description: </strong>{{ illustration.description}}</div>
    <div><strong>Media: </strong>{{ illustration.media }}</div>
    <div><strong>Price: </strong>{{ illustration.price }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      illustrations: {
        type: Array,
        required: true,
      }
    }
  }
</script>
<style>
  .category {
    max-width: 600px;
    height: 100%;
    margin: 1rem;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
  }
</style>
