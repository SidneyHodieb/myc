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
    context.commit('addcart', payload),
    fs.writeFile('../data/cartData.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })

  }
  },
  modules: {
  }
})
