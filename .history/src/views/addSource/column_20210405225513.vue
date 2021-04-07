<template>
  <div>
    <!-- Header -->
      <v-stepper alt-labels v-model="e1">
          <v-stepper-header >
            <v-stepper-step step="1" :complete="e1 > 1">
              Etape 1
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" :complete="e1 > 2">
              Etape 2
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Etape 3
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>

        <!-- Content -->
        <router-view></router-view>
        <!--Footer  -->

<v-card class="card-bottom">
 
    <v-row>
       <v-col>
       <v-btn
       class="ml-4"
      rounded
      outlined
      color="indigo"
      @click="prev"
    >
     <v-icon left>
        mdi-arrow-left
      </v-icon>
      Précedent
    </v-btn>
       </v-col>
   
  <v-col offset-md="8" offset-sm="8">
      <v-btn
      :disabled="e1 == 3 ? true : null "
      rounded
      color="primary"
      dark
      @click="next()"
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
  data(){
    return{
      e1:1,
    }
  },

  methods:{
    next(){
      this.e1 = this.e1 + 1
      if (this.e1 = 2) {
        this.$router.push({ name: 'card'})
      }
     
    },

    prev(){
      if (this.e1 > 1) {
         do {
        this.e1 = this.e1 - 1
      } while (this.e1 > 1);
      }
     
      router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

.card-bottom{
  position: absolute;bottom: 0;width:100%; height: 50px; padding-bottom:50px; padding-top:30px
}

</style>