import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:{
      format:"",
      fichier:"",
      nom:"",
      etiquette:[],
      type:"",
      date:"",
    }
  },
  mutations: {
    addcart(state, payload){
      state.format = payload.format,
      state.fichier = payload.fichier,
      state.nom = payload.nom,
      state.etiquette = payload.etiquette,
      state.type = payload.type,
      state. date = payload. date
      return state
    }
  },
  actions: {
    addcart (context, payload) {
      context.commit('addcart', payload)
  }
  },
  modules: {
  }
})
