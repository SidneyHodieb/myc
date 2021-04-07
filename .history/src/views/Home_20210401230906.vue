<template>
  <v-container>
    <v-row class="mt-5 ml-5">
      <v-col cols="12" sm="12">
        <h1>Bienvenue</h1>
      </v-col>
      <v-col class="d-flex" sm="6">
        <v-select :items="items" filled label="Filled style"></v-select>
      </v-col>
      <div class="text-center">
          
        <v-btn rounded color="primary" dark offset-md="8">
          Ajouter une carte
        </v-btn>

      </div>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
