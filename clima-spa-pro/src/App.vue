<template>
  <div id="app">
    <nav style="padding: 20px; background: #2c3e50; color: white; display: flex; justify-content: space-between; align-items: center;">
      <router-link to="/" style="color: #42b883; text-decoration: none; font-weight: bold; font-size: 1.2rem;">
        🏠 Inicio
      </router-link>
      <span style="font-style: italic;">App Clima: Villarrica - Pucón - Lican Ray - Caburgua - Curarrehue</span>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<style>
body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; }
</style>