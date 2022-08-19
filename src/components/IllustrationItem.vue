<template>
  <div class="illustration">
    <div><strong>Title: </strong>{{ illustration.title }}</div>
    <div><strong>Description: </strong>{{ illustration.description}}</div>
    <div><strong>Media: </strong>{{ illustration.media }}</div>
    <div><strong>Price: </strong>{{ illustration.price }}</div>
    <div class="illustration-btns">
      <my-button class="btn-edit">Edit</my-button>
      <my-button
        class="btn-delete"
        @click="$emit('remove', illustration)"
      >
        Delete
      </my-button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      illustration: {
        type: Object,
        required: true,
      }
    },
  }
</script>
<style scoped>
  .illustration {
    max-width: 600px;
    height: 100%;
    margin: 1rem;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid teal;
    border-radius: 5px;
    box-shadow: 5px 0px 10px 5px lightgray;
  }

  .illustration-btns {
    margin: 1rem;
    display: flex;
    justify-content: space-around;
  }
  .btn {
    width: 100px;
    height: 30px;
    margin: 1rem;
  }
</style>