<template>
  <v-container grid-list-md>
    <v-row>
      <v-col md="12" sm="12" class="text-center">
        <h2>Selectionez le format d'entrée</h2>
      </v-col>
      <v-col>
        <v-card width="150">
          <v-card-text>
            <div> <v-checkbox class="checkbox-round"
      v-model="checkbox"
    ></v-checkbox>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/786/786788.svg?token=exp=1617473650~hmac=f02174a0ee444bdd71a855da4ad95c3d"
        ></v-img>
        </div>
         </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="150">
          <v-card-text>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/786/786788.svg?token=exp=1617473650~hmac=f02174a0ee444bdd71a855da4ad95c3d"
        ></v-img>
         </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="150">
           <v-card-text>
          <v-img
           width="90"
            src="https://www.flaticon.com/svg/vstatic/svg/786/786788.svg?token=exp=1617473650~hmac=f02174a0ee444bdd71a855da4ad95c3d"
        ></v-img>
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
}
</style>