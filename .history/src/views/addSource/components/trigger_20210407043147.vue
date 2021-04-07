<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le declancheur</h2>
        <span>Selectionez le type de declancheur pour mettre à jour les données</span>
      </v-col>
      <v-col md="12" sm="6">
        <span>Choisissez le type de declancheur pour mettre à jour les données</span>
        <v-select
          :items="types"
          label="Solo field"
          v-model="value"
          dense
          solo
        ></v-select>
      </v-col>
      <v-col justify-center md="12" sm="12" class="text-center">
        <span>Choisissez la date de mise à jour attendue</span>
        <v-date-picker v-model="picker"></v-date-picker>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      types:["Manuel", "Action prédefinie", "Calendaire"],
      value:[],
      picker: new Date().toISOString().substr(0, 10),
    }
  }
}
</script>

<style>

</style>