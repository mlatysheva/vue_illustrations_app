<template>
  <div class="app">
    <h1 style="text-align: flex-start; margin-left: 1rem;">Picture book illustrations</h1>
    <my-input class="search-field"
      v-model="searchQuery"
      placeholder="Search..."
    />
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
      :illustrations="sortedAndSearchedIllustrations"
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
        searchQuery: '',
        selectedSort: '',
        sortOptions: [
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
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
    },
    computed: {
      sortedIllustrations() {
        return [...this.illustrations].sort((illustration1, illustration2) => 
           illustration1[this.selectedSort]?.localeCompare(illustration2[this.selectedSort]))
      },
      sortedAndSearchedIllustrations() {
        return this.sortedIllustrations.filter(illustration => illustration.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      // selectedSort(newValue) {
      //   this.illustrations.sort((illustration1, illustration2) => {
      //     return illustration1[newValue]?.localeCompare(illustration2[newValue])
      //   })
      // }
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
  .search-field {
    width: 600px !important
  }
  .app-btns {
    width: 100%;
    max-width: calc(600px + 2rem);
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