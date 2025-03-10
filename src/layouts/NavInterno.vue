<template>
    <v-row class="bg-teal-darken-2 pt-8  dos " >
      <v-col cols="11" class="text-center">
          <h2><slot name="main"></slot> </h2>
      </v-col>
    <v-col cols="1">
<v-btn icon @click="toggleDrawer" >
    <img src="../assets/image/escudoCarm.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
    <h6>nav</h6>
    <v-list>
     <v-list-item link to="/" title="AL INICIO" prepend-icon="mdi-grid"></v-list-item>

        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front"><slot name="title1"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store"><slot name="title2"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store"><slot name="title3"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section4')" prepend-icon="mdi-store"><slot name="title4"></slot></v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<!-- ************************************* -->
<script setup>
  import { ref } from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
// NAV

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<!-- ************************************* -->
<style scoped>
.dos{
  border: 5px white double;

 
}

.fixed-row {  
  position: fixed;  
  top: 7;  
  left: 0;  
  width: 100%;  
  z-index: 10; /* Asegura que esté por encima del resto del contenido */  
} 
</style>