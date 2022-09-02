import { createStore } from "vuex";
import { illustrationModule } from "./illustrationModule";

export default createStore({
  state: {
    isAuth: false,
    likes: 0,
  },
  mutations: {
    incrementLikes(state) {
      state.likes++;
    },
    decrementLikes(state) {
      state.likes--;
    }
  },
  modules: {
    illustration: illustrationModule
  }
})