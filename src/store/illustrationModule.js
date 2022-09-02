import axios from "axios";

export const illustrationModule = {
  state: () => ({
    illustrations: [],
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
  }),
  getters: {
    sortedIllustrations(state) {
      return [...state.illustrations].sort((illustration1, illustration2) => 
         illustration1[state.selectedSort]?.localeCompare(illustration2[state.selectedSort]))
    },
    sortedAndSearchedIllustrations(state, getters) {
      return getters.sortedIllustrations.filter(illustration => illustration.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setIllustrations(state, illustrations) {
      state.illustrations = illustrations;
    },
    setLoading(state, bool) {
      state.isIllustrationsLoading = bool
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchIllustrations({ state, commit }) {
      try {
        commit('setLoading', true);          
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setIllustrations', response.data);
      } catch(err) {
        console.error(err);
      } finally {
        commit('setLoading', false); ; 
      }
    },
    async loadMoreIllustrations({ state, commit }) {
      try {
        commit('setPage', state.page + 1);         
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit));
        commit('setIllustrations', [...state.illustrations, ...response.data]);
      } catch(err) {
        console.error(err);
      } finally {
        this.isIllustrationsLoading = false; 
      }
    }
  },
  namespaced: true,
}