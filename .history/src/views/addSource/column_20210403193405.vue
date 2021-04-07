<template>
  <div>
    <!-- Header -->
      <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1">
              Ad unit details
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2">
              Ad sizes
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Ad templates
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>

        <!-- Content -->
        <v-card-text>My favorite thing</v-card-text>
        <router-view></router-view>
        <!--Footer  -->

<v-card class="card-bottom">
 
    <v-row>
       <v-col>
       <v-btn
       class="ml-4"
       text="black"
      rounded
      outlined
      color="indigo"
    >
     <v-icon left>
        mdi-arrow-left
      </v-icon>
      Précedent
    </v-btn>
       </v-col>
   
  <v-col offset-md="8" offset-sm="8">
      <v-btn
      rounded
      color="primary"
      dark
    >
      Suivant
    </v-btn>
      </v-col>
      </v-row>
    </v-card>
 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.card-bottom{
  position: absolute;bottom: 0;width:100%; height: 50px; padding-bottom:50px; padding-top:30px
}

</style>