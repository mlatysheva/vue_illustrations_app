<template>
  <div class="user-page">
    <h1 style="text-align: flex-start; margin-left: 1rem;">Picture book illustrations</h1>
    <h2 style="text-align: flex-start; margin-left: 1rem; margin-top: 1rem">Likes: {{ $store.state.likes }}</h2>
    <h3 style="text-align: flex-start; margin-left: 1rem; margin-top: 1rem">{{ $store.state.isAuth ? "User is authorised" : "Login to use the service" }}</h3>
    <div class="like-btns">
      <my-button
        @click="$store.commit('incrementLikes')"
        class="like-btn"
      >
        Like
      </my-button>
      <my-button
        @click="$store.commit('decrementLikes')"
        class="dislike-btn"
      >
        Dislike
      </my-button>
    </div>
    <my-input
      v-focus
      class="search-field"
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
    <!-- <div ref="observer" class="observer"> -->
    <div v-intersection="loadMoreIllustrations" class="observer">
    </div>
    <!-- <div class="page-wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>
<script>

import IllustrationForm from "@/components/IllustrationForm";
import IllustrationsList from "@/components/IllustrationsList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import axios from 'axios';

  export default {
    components: {
      IllustrationsList, IllustrationForm,
      MyButton, MySelect, MyInput
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
        ],
        page: 1,
        limit: 10,
        totalPages: 0,
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
      changePage(pageNumber) {
        this.page = pageNumber;
      },
      async fetchIllustrations() {
        try {
          this.isIllustrationsLoading = true;          
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.illustrations = response.data;
        } catch(err) {
          console.error(err);
        } finally {
          this.isIllustrationsLoading = false; 
        }
      },
      async loadMoreIllustrations() {
        try {
          this.isIllustrationsLoading = true;          
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.illustrations = [...this.illustrations, ...response.data];
        } catch(err) {
          console.error(err);
        } finally {
          this.isIllustrationsLoading = false; 
        }
      }
    },
    mounted() {
      this.fetchIllustrations();
      // const options = {
      //   rootMargin: '0px',
      //   threshold: 1.0
      // };
      // const callback = function(entries, observer) {

      // };
      // const observer = new IntersectionObserver(callback, options);
      // observer.observe(this.$refs.observer);
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
      // page() {
      //   this.fetchIllustrations();
      // }
    }
  }
</script>
<style>
.like-btns {
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.like-btn, .dislike-btn {
  width: 70px;
}
.like-btn:hover {
  background-color: green;
}
.dislike-btn:hover {
  background-color: red;
}
.search-field {
  width: 90% !important;
  max-width: 600px !important;
  margin-left: 1rem !important;
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
.observer {
  height: 3rem;
  background: teal;
}
.page-wrapper {
  display: flex;
  margin: 1rem;
}
.page {
  border: 1px solid grey;
  padding: 1rem;
  cursor: pointer;
}
.current-page {
  border: 2px solid teal;
}
</style>