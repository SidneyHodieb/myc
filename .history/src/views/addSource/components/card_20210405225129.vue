<template>
  <v-container grid-list-xs>
    <v-row>
       <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le format d'entrée</h2>
      </v-col>
      <v-col>
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
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