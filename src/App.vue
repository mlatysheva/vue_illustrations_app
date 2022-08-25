<template>
  <div class="app">
    <h1 style="text-align: flex-start; margin-left: 1rem;">Picture book illustrations</h1>
    <div class="app-btns">
      <my-button
        class="get-illustrations-btn"
        @click="showDialog"
      >
        Add illustration
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>    
    <my-dialog v-model:show="dialogVisible">
      <illustration-form
        @add="addIllustration"
      />
    </my-dialog>    
    <illustrations-list
      :illustrations="illustrations"
      @remove="removeIllustration"
      v-if="!isIllustrationsLoading"
    />
    <div class="spinner" v-else>Loading...</div>
  </div>
</template>
<script>

import IllustrationForm from "@/components/IllustrationForm";
import IllustrationsList from "@/components/IllustrationsList";
import MyButton from './components/UI/MyButton.vue';
import MySelect from './components/UI/MySelect.vue';
import axios from 'axios';

  export default {
    components: {
      IllustrationsList, IllustrationForm,
      MyButton, MySelect
    },
    data() {
      return {
        illustrations: [],
        dialogVisible: false,
        isIllustrationsLoading: false,
        selectedSort: '',
        sortOptions: [
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]
      }
    }, 
    methods: {
      addIllustration(illustration) {
        this.illustrations.push(illustration);
        this.dialogVisible = false;
      },
      removeIllustration(illustration) {
        this.illustrations = this.illustrations.filter( item => item.id !== illustration.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchIllustrations() {
        try {
          this.isIllustrationsLoading = true;          
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.illustrations = response.data;
        } catch(err) {
          console.error(err);
        } finally {
          this.isIllustrationsLoading = false; 
        }
      }
    },
    mounted() {
      this.fetchIllustrations();
    }
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
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .app-btns {
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .get-illustrations-btn {
    align-self: flex-start; 
    margin-left: 1rem;
  }

  .spinner {
    margin-top: 1rem;
    margin-left: 1rem;
    color: teal;
    font-weight: 500;
  }

</style>