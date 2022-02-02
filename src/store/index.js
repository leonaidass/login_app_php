import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  getters: {
    loginState(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      if (router.currentRoute.name !== "Home") router.push("/");
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expires");
      router.push("/signin");
    },
  },
  actions: {
    login(context, expires_in) {
      setTimeout(() => {
        context.commit("logout");
      }, expires_in);
      context.commit("login");
      //context.commit("guardarCarrito",payload)
    },
    logout(context){
     context.commit("logout")
    }
  },
  modules: {},
});
