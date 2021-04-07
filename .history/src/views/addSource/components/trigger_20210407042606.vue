<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le declancheur</h2>
        <span>Selectionez le type de declancheur pour mettre à jour les données</span>
      </v-col>
      <v-col md="12" sm="6">
        <span class="ma-4">Choisissez le type de declancheur pour mettre à jour les données</span>
        <v-select
          :items="items"
          label="Solo field"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>