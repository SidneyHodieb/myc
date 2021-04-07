<template>
  <v-container grid-list-xs>
    <v-row>
       <v-col md="12" sm="12" class="text-center">
        <h2>Renseignez la carte</h2>
      </v-col>
      <v-col md="12" >
        <vue-dropzone style="width:500px" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
      </v-col>
      <v-col md="12">
        <span class="font-weight-bold">Donnez un nom à votre carte</span>
        <v-text-field full-width 
            label=""
            solo
            dense
          ></v-text-field>
          </v-col>
        <v-col><span class="font-weight-bold">Ajouter des etiquettes d'équipe</span>
        <v-select
        class="mb-5"
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            solo
            item-value="value.foo"
          >
           <template #selection="{ item }">
    <v-chip color="blue">{{item.name}}</v-chip>
         </template>
          </v-select>
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
      },
      items: [
        {name : 'foo', color:'blue'},
        {name : 'yoo', color:'red'}, 
        {name : 'Boo', color:'yellow'},
        {name : 'loo', color:'green'}
         ],
      value: [],
    }
    
  }
}
</script>

<style>

</style>