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
        <router-view></router-view>
        <!--Footer  -->
      
    <v-bottom-navigation
      absolute
      color="blue"
      hide-on-scroll
      horizontal
      scroll-threshold="500"
    >
      <v-row>
        <v-col>
          <v-btn
      rounded
      outlined
      color="indigo"
    >
    <v-icon left>
        mdi-pencil
      </v-icon>
      Précedent
    </v-btn>
        </v-col>
        <v-col>
          <v-btn
      rounded
      color="primary"
      dark
    >
      Suivant
    </v-btn>
        </v-col>
      </v-row>
    </v-bottom-navigation>

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