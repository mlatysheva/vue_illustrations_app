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
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
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
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
    <div v-intersection="loadMoreIllustrations" class="observer">
    </div>
  </div>
</template>
<script>

import IllustrationForm from "@/components/IllustrationForm";
import IllustrationsList from "@/components/IllustrationsList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import axios from 'axios';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    components: {
      IllustrationsList, IllustrationForm,
      MyButton, MySelect, MyInput
    },
    data() {
      return {
        dialogVisible: false,
      }
    }, 
    methods: {
      ...mapMutations({
        setPage: 'illustration/setPage',
        setSearchQuery: 'illustration/setSearchQuery',
        setSelectedSort: 'illustration/setSelectedSort',
      }),
      ...mapActions({
        loadMoreIllustrations: 'illustration/loadMoreIllustrations',
        fetchIllustrations: 'illustration/fetchIllustrations',
      }),
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
    },
    mounted() {
      this.fetchIllustrations();
    },
    computed: {
      ...mapState({
        illustrations: state => state.illustration.illustrations,
        isIllustrationsLoading: state => state.illustration.isIllustrationsLoading,
        searchQuery: state => state.illustration.searchQuery,
        selectedSort: state => state.illustration.selectedSort,
        sortOptions: state => state.illustration.sortOptions,
        page: state => state.illustration.page,
        limit: state => state.illustration.limit,
        totalPages: state => state.illustration.totalPages,

      }),
      ...mapGetters({
        sortedIllustrations: 'illustration/sortedIllustrations',
        sortedAndSearchedIllustrations: 'illustration/sortedAndSearchedIllustrations',
      }),  
    },
    watch: {
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