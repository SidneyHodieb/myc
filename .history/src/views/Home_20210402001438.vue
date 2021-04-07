<template>
  <v-container>
    <v-row class="mt-5 ml-5">
      <v-col cols="12" sm="12">
        <h1>Bienvenue</h1>
      </v-col>
      <v-col class="d-flex" sm="4">
        <v-select :items="items" filled label="Filtre"></v-select>
      </v-col>
     <v-col offset-md="2" sm="6" style="margin-top:50px">
      <div class="text-center">
        <v-btn rounded color="primary" >
          Ajouter une carte
        </v-btn>
      </div>
      </v-col>
      <v-col
          cols="12"
          sm="12"
          class="mt-4"
        >
          <v-text-field
            readonly
            value="First Name"
            solo
            style="font-weight:bold; font-size:20px"
          >
             <template v-slot:append> 
               <v-chip text-color="white" color="red" class="ma-1">Production</v-chip>
              </template>
                
          </v-text-field>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
