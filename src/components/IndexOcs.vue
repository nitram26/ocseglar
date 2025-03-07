<template>
  <header class="header">  
    <div class="logo-container">  
      <v-img :src="'/image/escudoCarm.png'" alt="Logo Carmelitas" contain width="40" height="40" class="mr-3" />
      <h1>Carmelitas</h1>  
    </div>  
    <nav class="navigation">  
      <ul>  
        <li>  
          <router-link to="/coro">Coro</router-link>  
        </li>  
        <li>  
          <router-link to="/formacion">Formación</router-link>  
        </li>  
      </ul>  
    </nav>  
  </header>  
</template>
<!-- ************************************* -->
<script setup>

</script>
<!-- ************************************* -->
<style scoped>
.header {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  padding: 10px 20px;  
  background-color: #1976d2; /* Color de fondo */  
  color: white; /* Color del texto */  
}  

.logo-container {  
  display: flex;  
  align-items: center;  
}  

.logo {  
  width: 40px; /* Ajusta el tamaño según necesites */  
  height: 40px;   
  margin-right: 10px;  
}  

.navigation ul {  
  list-style-type: none;  
  display: flex;  
  gap: 20px;  
}  

.navigation a {  
  color: white; /* Color de los enlaces */  
  text-decoration: none; /* Sin subrayado */  
}  

.navigation a:hover {  
  text-decoration: underline; /* Subrayado al pasar el ratón */  
}  
</style>