import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    }
  },
  mutations: {
    UPDADE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(r => {
        context.commit("UPDATE_USUARIO", r.data);
        context.commit("UPDADE_LOGIN", true);
      })
    }
  },
  modules: {
  }
})
