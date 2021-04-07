<template>
  <v-container grid-list-xs>
    <v-row>
       <v-col md="12" sm="12" class="text-center">
        <h2>Renseignez la carte</h2>
      </v-col>
      <v-col>
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>

<style>

</style>