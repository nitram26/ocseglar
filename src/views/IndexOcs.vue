<template>

       <NavInterno>
   <template #main><h4>ENTRADA</h4></template>
   <template #title1><h4>Letras</h4></template>
   <template #title2><h4>Acordes</h4></template>
   <template #title3><h4>Partituras</h4></template>
  </NavInterno>
  <!-- ----------------------------------------- -->
  <div id="section1">
     <v-row class=" text-center bg-purple-lighten-4">
 <v-col cols="12">
   <h2 class="bg-pink-darken-4 pa-4">MODELOS </h2>
 </v-col>
</v-row>

<!-- *************************************************************** -->
<div class="">
<v-row class="bg-purple-lighten-4">
    <v-col
    v-for="exercise1 in exercises1"
    :key="exercise1.id"
    cols="12"
    sm="6"
    md="4"
    lg="3"
    >
    <v-card
  class="mx-auto my-8 bg-brown-lighten-4"
  elevation="16"
  max-width="344" >
  <v-card-item>
  <v-card-title class="text-purple">{{ exercise1.title }} </v-card-title>
  <v-card-subtitle class="">{{ exercise1.description }}</v-card-subtitle>
  </v-card-item>

  <v-btn :href="exercise1.link" target="_blank" class="bg-teal text-white bot">
    Ver la Letra
  </v-btn>
  </v-card>
  </v-col>
  </v-row>
  </div>
  </div>
<!-- ----------------------------------------------- -->
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';
import NavInterno from '../layouts/NavInterno.vue';
// -------------------------------------------
const exercises1 = ref([
       { id: 1, title: 'CREACIÓN', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link:'' },
      
       { id: 10, title: 'CARLOS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
 
     
     ]);
   
</script>
<!-- ************************************* -->
<style scoped>
.bot{
  margin: 1em;
}
</style>