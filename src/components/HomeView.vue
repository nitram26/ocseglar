<template>
  <h1 class="mt-7">Carlos Cervera</h1>
  <NavInterno>
    <template #main>Orden Seglar Carmelita</template>
    <template #title1><h6>"no aceptes como verdad <br> lo que no proviene <br>del amor</h6></template>
    <template #title2><h6>Ni aceptes como amor <br>lo que no proviene <br> de la verdad"</h6></template>
    <template #title3><h6>Edith Stein</h6></template>
  </NavInterno>

 
      <!-- fin de navegador derecho -->
<!-- ////////////////////////////////////////////////////////// -->

<!-- *************************************************************** -->
 <v-row>
  <div class="image-container">  
    <img src="../assets/image/OCS2022.jpeg" alt="OCS2022" class="portada1">  
    <div class="image-caption">OCS 2022</div>  
  </div>  
  <div class="image-container">  
    <img src="../assets/image/OCS2019.jpg" alt="OCS2019" class="portada">  
    <div class="image-caption">OCS 2019</div>  
  </div>  
  <div class="image-container">  
    <img src="../assets/image/OCS2016.jpg" alt="OCS2016" class="portada">  
    <div class="image-caption">OCS 2016</div>  
  </div>  

 </v-row>
 <v-row>
  <MyFooter/>
 </v-row>
</template>
<!-- ///////////////////////////////////////////////////////////// -->
<script setup>
import NavInterno from '../layouts/NavInterno.vue'
import MyFooter from './MyFooter.vue';

</script>
<!-- /////////////////////////////////////////////////////////// -->
<style scoped>
.portada{
width: 135%;
margin-top: 2em;
border: 4px double brown;
margin-left: 1em;
margin-bottom: 1em;
}
.portada1{
  width: 96%;
  margin-top: 2em;
border: 4px double brown;
margin-left: 1em;
margin-bottom: 1em;
}
.image-container {  
  position: relative; /*  para que el posicionamiento absoluto funcione */  
  display: inline-block; /* Para que los contenedores se comporten como bloques en línea */  
}  

.image-caption {  
  position: absolute; /* Posiciona el texto absolutamente dentro del contenedor */  
  bottom: 26px; /* Lo coloca en la parte inferior */  
  width: 6em; /* Ocupa todo el ancho de la imagen */  
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mejor legibilidad */  
  color: white; /* Color del texto */  
  padding: 7px; /* Espacio alrededor del texto */  
  text-align: center; /* Centra el texto horizontalmente */  
  margin-left: 30em;
  font-size: 1.5em;

}  

</style>