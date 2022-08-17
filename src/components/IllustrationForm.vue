<template>
  <form @submit.prevent>
    <h4 class="small-title">Add an illustration</h4>
    <input
      v-model="illustration.title"
      class="input"
      type="text"
      placeholder="Title"
    >
    <input
      v-model="illustration.description"
      class="input"
      type="text"
      placeholder="Description"
    >
    <input
      v-model="illustration.media"
      class="input"
      type="text"
      placeholder="Media"
    >
    <input
      v-model="illustration.price"
      class="input"
      type="text"
      placeholder="Price"
    >
    <button class="create-btn" @click="addIllustration">Create</button>
  </form>   
</template>
<script>
  export default {
    data() {
      return {
        illustration: {
          title: '',
          description: '',
          media: '',
          price: '',
        }
      }
    },
    methods: {
      addIllustration() {
        this.illustration.id = Date.now();
        this.$emit('add', this.illustration, 'second-param')
        this.illustration = {
          title: '',
          description: '',
          media: '',
          price: '',
        }
      }
    }
  }
</script>
<style>
  form {
    display: flex;
    flex-direction: column;
  }

  .small-title {
    padding-left: 1rem;
    padding-top: 2rem;
  }

  .input {
    max-width: 600px;
    width: 100%;
    margin: 1rem;
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px lightgray;
    border-radius: 10px;
  }

  .create-btn {
    width: 200px;
    height: 40px;
    margin: 1rem;
    align-self: flex-start;
  }
</style>