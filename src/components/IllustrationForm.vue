<template>
  <form @submit.prevent>
    <h4 class="small-title">Add an illustration</h4>
    <my-input
      v-focus
      v-model="illustration.title"
      type="text"
      placeholder="Title"
    />
    <my-input
      v-model="illustration.description"
      type="text"
      placeholder="Description"
    />
    <my-input
      v-model="illustration.media"
      type="text"
      placeholder="Media"
    />    
    <my-input
      v-model="illustration.price"
      type="text"
      placeholder="Price"
    />
    <my-button
      class="create-btn"
      style="margin-left: 1rem"
      @click="addIllustration"
    >
      Create
    </my-button>
  </form>   
</template>
<script>
  export default {
    data() {
        return {
            illustration: {
                title: "",
                description: "",
                media: "",
                price: "",
            }
        };
    },
    methods: {
        addIllustration() {
            this.illustration.id = Date.now();
            this.$emit("add", this.illustration, "second-param");
            this.illustration = {
                title: "",
                description: "",
                media: "",
                price: "",
            };
        }
    },
    // watch: {
    //   illustration: {
    //     handler(newValue) {
    //       console.log(newValue)
    //     },
    //     deep: true
    //   }
    // }
  }
</script>
<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .small-title {
    padding-top: 2rem;
    align-self: flex-start;
  }

  .create-btn {
    width: 200px;
    height: 40px;
    align-self: flex-end;
  }
</style>