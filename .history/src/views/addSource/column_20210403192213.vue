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
      
  
      <!-- <v-row class="">
        <v-col>
         
        </v-col>
        <v-col>
         
        </v-col>
      </v-row> -->

<v-card style="position: absolute;bottom: 0;width: 100%; height: 2.5rem;">
 
    <v-row>
       <v-col >
       <v-btn
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
    <!--   <v-spacer></v-spacer> -->
  <v-col >
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
   <!--  <v-sheet
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      max-height="600"
    >
      <v-responsive height="1500"></v-responsive>
    </v-sheet> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>