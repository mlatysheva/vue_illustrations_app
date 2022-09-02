<template>
  <div class="user-page">
    <h1 style="text-align: flex-start; margin-left: 1rem;">Picture book illustrations</h1>
    <h2 style="text-align: flex-start; margin-left: 1rem; margin-top: 1rem">Likes: {{ likes }}</h2>
    <div class="like-btns">
      <my-button
        @click="addLike"
        class="like-btn"
      >
        Like
      </my-button>
      <my-button
        @click="dislike"
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
      v-if="!isIllustrationsLoading"
    />
    <div class="spinner" v-else>Loading...</div>
  </div>
</template>
<script>

import IllustrationForm from "@/components/IllustrationForm";
import IllustrationsList from "@/components/IllustrationsList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import { ref } from "vue";
import useIllustrations from "@/hooks/useIllustrations";
import useSortedIllustrations from "@/hooks/useSortedIllustrations";
import useSortedAndSearchedIllustrations from "@/hooks/useSortedAndSearchedIllustrations";

export default {
  components: {
    IllustrationsList, IllustrationForm,
    MyButton, MySelect, MyInput
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'Title' },
        { value: 'body', name: 'Description'},
      ]
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
  setup(props) {
    const { illustrations, totalPages, isIllustrationsLoading } = useIllustrations(10);
    const { sortedIllustrations, selectedSort } = useSortedIllustrations(illustrations);
    const { searchQuery, sortedAndSearchedIllustrations } = useSortedAndSearchedIllustrations(sortedIllustrations);
    const likes = ref(0);
    const addLike = () => {
      likes.value++;
    };
    const dislike = () => {
      likes.value--;
    };
    return { 
      illustrations, 
      totalPages,
      isIllustrationsLoading, 
      sortedIllustrations, 
      selectedSort,
      searchQuery, 
      sortedAndSearchedIllustrations,
      likes, 
      addLike, 
      dislike 
    };
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