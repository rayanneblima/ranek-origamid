import Vue from "vue";
import Vuex from "vuex";
import { api } from '@/services.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    getUser(context, payload) {
      return api.get(`/usuario/${payload}`).then(res => {
            context.commit('UPDATE_USER', res.data)
            context.commit('UPDATE_LOGIN', true)
         })
    },
    createUser(context, payload) {
      context.commit('UPDATE_USER', { id: payload.email })
      return api.post('/usuario', payload).then(res => res.status === 200 ? alert('Cadastrado com sucesso!') : alert('Ocorreu um erro. Tente novamente mais tarde.'))
    }
  }
});
