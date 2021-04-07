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

        <!--Footer  -->
      
    <v-bottom-navigation
      absolute
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-sheet
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      max-height="600"
    >
      <v-responsive height="1500"></v-responsive>
    </v-sheet>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>