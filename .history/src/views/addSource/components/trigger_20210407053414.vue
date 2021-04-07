<template>
  <v-container grid-list-xs>
    <v-row >
      <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le declancheur</h2>
      </v-col>
      <v-col md="12" sm="6">
        <span>Choisissez le type de declancheur pour mettre à jour les données</span>
        <v-select
          :items="types"
          label="Solo field"
          v-model="value"
          dense
          solo
          @change="savetocart"
        ></v-select>
      </v-col>
      <v-col md="12" sm="12" class="text-center">
        <span>Choisissez la date de mise à jour attendue</span>
        <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Choisissez une date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        @change="savetocart"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
  </v-col>
  <v-col>
     <v-btn
      depressed
      color="primary"
      @click="add"
    >
     Valider
    </v-btn>
  </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data(){
    return{
      types:["Manuel", "Action prédefinie", "Calendaire"],
      value:[],
      date: null,
      menu: false,
      data:{}
    }
  },
   watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
     ...mapMutations([
      'savecart'
    ]),

    ...mapActions([
      'savecart'
    ]),

      save (date) {
        this.$refs.menu.save(date)
      },

     savetocart(){
      this.data.date = this.date
      this.data.types = this.types
      this.savecart(this.data)
    }
    },
}
</script>

<style>

</style>