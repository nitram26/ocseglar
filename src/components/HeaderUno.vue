<template>
  <v-app>
    <v-app-bar
      app
      color="teal-darken-4"
      scroll-target="#scrolling-container"
      class="head"
    >
      <img src="../assets/image/escudoCarm.png" alt="" class="img">
      <v-app-bar-title>Carmelitas</v-app-bar-title>
      <!-- botones de enlace a páginas -->
        <router-link to="/" class="text-white"> <img src="../assets/image/CERVERA.png" alt="" class="img"></router-link>
      <nav class="header-nav">
      <router-link to="/indexOcs" class="ma-4  text-white">CORO</router-link>
      <router-link to="/" class="ma-2 mr-4 text-white">FORMACIÓN</router-link>
    </nav>

    </v-app-bar>
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