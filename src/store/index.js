import { createStore } from "vuex";
import { illustrationModule } from "./illustrationModule";

export default createStore({
  state: {
    isAuth: false,
  },
  modules: {
    illustration: illustrationModule
  }
})