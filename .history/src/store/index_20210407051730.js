import Vue from 'vue'
import Vuex from 'vuex'
const fs = require('fs');
fs.readFile('../data/cartData.json', 'utf-8', function(err, data) {
	if (err) throw err
	var arrayOfObjects = JSON.parse(data)
})

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
      state.cart.format = payload.format,
      state.cart.fichier = payload.fichier,
      state.cart.nom = payload.nom,
      state.cart.etiquette = payload.etiquette,
      state.cart.type = payload.type,
      state.cart.date = payload.date
      return state
    },

    savecart(state){
      fs.writeFile('../data/cartData.json', state.cart, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    }
  },
  actions: {
    addcart (context, payload) {
    context.commit('addcart', payload)
  },
  savecart(){
    context.commit('saveCart')
  }
  },
  modules: {
  }
})
