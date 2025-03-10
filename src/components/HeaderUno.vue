<template>
  <v-app>
    <v-app-bar
      app
      color="teal-darken-4"
      scroll-target="#scrolling-container"
      class="head"
    >
    <v-btn icon @click="toggleDrawer">
      <img src="../assets/image/escudoCarm.png" alt="" class="img">
      </v-btn>
    
      <v-app-bar-title>Carmelitas</v-app-bar-title>
      <!-- botones de enlace a páginas -->
        <router-link to="/" class="text-white"> <img src="../assets/image/CERVERA.png" alt="" class="img"></router-link>
      <nav class="header-nav">
      <router-link to="/indexOcs" class="ma-4  text-white">CORO</router-link>
      <router-link to="/" class="ma-2 mr-4 text-white">FORMACIÓN</router-link>
    </nav>

    </v-app-bar>
    <!-- /////////////////////////////////////// -->
  
    <v-navigation-drawer v-model="drawer" color="teal-darken-4" dark>
      <v-list-item link to="/" title=" INICIO"  @click="handle"></v-list-item>
      <v-list-item link to="/indexOcs" title=" ENTRADA"  @click="handle"></v-list-item>
      <v-list-item link to="/" title=" PENITENCIAL" @click="handle"></v-list-item>
      <v-list-item link to="/" title="GLORIA" @click="handle"></v-list-item>
      <v-list-item link to="/" title="ALELUYA" @click="handle"></v-list-item>
      <v-list-item link to="/" title="OFERTORIO"@click="handle"></v-list-item>
      <v-list-item link to="/" title="SANTO"@click="handle"></v-list-item>
      <v-list-item link to="/" title="CORDERO" @click="handle"></v-list-item>
      <v-list-item link to="/" title="COMUNIÓN"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="ENVÍO"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="CENIZAS"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="eXTRA LITÚRGICOS"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="NO LITÚRGICOS"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="MELODÍAS"  @click="handle"></v-list-item>
    </v-navigation-drawer>
    <!-- /////////////////////////////////////// -->
  
    <v-main>
      <div id="scrolling-container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>
<!-- ********************************************************* -->
<script setup>
import { ref } from 'vue';
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
const handle = () => {
  drawer.value = false;
};
</script>

<style scoped>

#scrolling-container {
  height: 100vh;
  overflow-y: auto;
}

.img{
  width: 3em;
  border-radius:2em;
}
.head{
  border: 6px white double;
  border-radius: 1em;
  padding: 0.5em;
}
</style>