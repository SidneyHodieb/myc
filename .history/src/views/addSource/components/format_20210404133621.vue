<template>
  <v-container fluid grid-list-md>
    <v-row>
      <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le format d'entrée</h2>
      </v-col>
      <v-col offset-md="2">
        <v-card width="150">
          <v-card-text>
            <div>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/786/786788.svg?token=exp=1617473650~hmac=f02174a0ee444bdd71a855da4ad95c3d"
        ></v-img>
        <span class="textCard text--secondary">Fichier</span> 
        </div>
         </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="150">
          <v-card-text>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/2306/2306016.svg?token=exp=1617475854~hmac=35e4e709fb9fa1338bb7b9cd5032613a"
        ></v-img>
         <span class="textCard text--secondary">Application</span> 
         </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="150">
           <v-card-text>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/994/994152.svg?token=exp=1617476036~hmac=b132b4a2ee4139281536cfde68b7345e"
        ></v-img>
         <span class="textCard font-weight-bold">API</span> 
         </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
      return {
        checkbox: true,
      }
    },
}
</script>

<style lang="scss" scoped>

.checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
};

.textCard{
    color:black;
    margin-left:20px;
    margin-top:10px
}

</style>