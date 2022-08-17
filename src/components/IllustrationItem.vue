<template>
  <div class="illustration">
    <div><strong>Title: </strong>{{ illustration.title }}</div>
    <div><strong>Description: </strong>{{ illustration.description}}</div>
    <div><strong>Media: </strong>{{ illustration.media }}</div>
    <div><strong>Price: </strong>{{ illustration.price }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      illustration: {
        type: Object,
        required: true,
      }
    }
  }
</script>