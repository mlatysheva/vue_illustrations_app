<template>
  <div class="app">
    <form @submit.prevent>
      <h4 class="small-title">Add an illustration</h4>
      <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Title">
      <input v-bind:value="description" @input="description = $event.target.value" class="input" type="text" placeholder="Description">
      <input v-bind:value="media" @input="media = $event.target.value" class="input" type="text" placeholder="Media">
      <input v-bind:value="price" @input="price = $event.target.value" class="input" type="text" placeholder="Price">
      <button type="submit" class="create-btn" @click="addIllustration">Create</button>
    </form>
    <div class="category" v-for="illustration in illustrations">
      <div><strong>Title: </strong>{{ illustration.title }}</div>
      <div><strong>Description: </strong>{{ illustration.description}}</div>
      <div><strong>Media: </strong>{{ illustration.media }}</div>
      <div><strong>Price: </strong>{{ illustration.price }}</div>
    </div>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        illustrations: [
          { id: 1, title: "Masha eating the Baby Bear's porridge", description: 'An A3 illustration made for the picture book', media: 'Watercolours', price: '$140'},
          { id: 2, title: "Easter Bunny answering children's letters", description: 'An A4 illustration to be used in a post card', media: 'Watercolour', price: '$90' },
          { id: 3, title: "The girl on a ball is helping the little bear to find his dad", description: 'An A3 illustration made for a future picture book', media: 'Acrylics', price: '$140' }
        ],
        title: '',
        description: '',
        media: '',
        price: '',
      }
    }, 
    methods: {
      addIllustration() {
        const newIllustration = {
          id: Date.now(),
          title: this.title,
          description: this.description,
          media: this.media,
          price: this.price,
        }
        this.illustrations.push(newIllustration);
        this.title = '';
        this.description = '';
        this.media = '';
        this.price = ''; 
      },
    },
  }
</script>
<style>
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 1440px;
  width: 100%;
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

.small-title {
  padding-left: 1rem;
  padding-top: 2rem;
}
.category {
  max-width: 600px;
  height: 100%;
  margin: 1rem;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
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