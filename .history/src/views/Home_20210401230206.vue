<template>
 <v-container>
    <v-row class="mt-5 ml-5">
      <v-col><h1>Bienvenue</h1></v-col>
       <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {

  components: {
   
  }
}
</script>
