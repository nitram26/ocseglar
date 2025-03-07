<template>
 <div class="div">
  <v-footer
    color="blue-lighten-5"
    style="border-radius: 2em;"
  >
    <v-container>
      <v-row justify="center" >

        <v-col cols="4" sm="4" class="">
          <p class="bg-teal mt-3 "> Contacto:</p>
          <p>WhatsApps: <br> 959 962 849 <b>Patty</b><br> 997 118 681 <b>Virginia</b><br>99 33 00 734 <b>Carlos</b></p>
          <p class="bg-teal mt-3 ">Datos para Visita <br>
          </p>
          <ul>
            <li>Nombre</li>
            <li>Dirección</li>
            <li>Día y Hora</li>
          </ul>
        </v-col>

        <v-col cols="8" sm="4" class="text-center">
          <p class="overline">Enlaces Útiles:</p>
          <v-btn
            class="bg-teal"
            href="./HomeView.vue"
          >
          Inicio
          </v-btn> <br><br>
       
        <!-- ************************** -->
          <v-btn
            class="bg-teal"
            href="."
            target="_blank"
          >
          SOBRE NOSOTROS
          </v-btn> <br><br>
      
        <!-- ************************** -->
          <v-btn
            class="bg-teal"
            href="."
            target="_blank"
          >
          SERVICIOS
          </v-btn> <br><br>
        <!-- ************************** -->
      </v-col>

        <v-col cols="4" class="text-center mt-3">
         <img src="../assets/image/escudoCarm.png" alt="" class="img">
          <div class="caption"> 
            © {{ new Date().getFullYear() }} Orden Seglar Carmelita. <br> Todos los derechos reservados.  <p class="text-brown "> <i>Realizado por StudiioXperto</i></p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
 </div>
</template>
<!-- ////////////////////////////////////////// -->

<style scoped>



.div{
  border: 6px double brown;
  margin-left: 2em;
  width: 95%;
  border-radius: 2em;
}
.img{
  width: 5em;
  border-radius: 2em;
}

</style>  