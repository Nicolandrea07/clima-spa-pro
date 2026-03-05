<template>
  <div class="container">
    <h1>🌦️ Mi App de Clima: Zona Lacustre</h1>
    
    <div class="search-box">
      <input 
        v-model="busqueda" 
        type="text" 
        placeholder="Buscar lugar (ej: Pucón)..."
      >
    </div>

    <div v-if="lugaresFiltrados.length > 0" class="grid">
      <div v-for="lugar in lugaresFiltrados" :key="lugar.id" class="card">
        <h3>{{ lugar.nombre }}</h3>
        <p class="temp">{{ lugar.temp }}°C</p>
        <p>{{ lugar.clima }}</p>
        <router-link :to="'/lugar/' + lugar.id" class="btn">Ver Detalle</router-link>
      </div>
    </div>

    <p v-else class="error">No se encontró ningún lugar con "{{ busqueda }}"</p>
  </div>
</template>

<script>
import { lugaresClima } from '../data.js';

export default {
  data() {
    return {
      busqueda: '',
      lugares: lugaresClima
    }
  },
  computed: {
    lugaresFiltrados() {
      return this.lugares.filter(l => 
        l.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
.container { padding: 20px; font-family: sans-serif; }
.search-box { margin-bottom: 20px; }
input { padding: 10px; width: 100%; max-width: 400px; border-radius: 8px; border: 1px solid #ccc; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
.card { border: 1px solid #eee; padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.temp { font-size: 2rem; font-weight: bold; color: #42b883; }
.btn { display: inline-block; margin-top: 10px; padding: 8px 15px; background: #42b883; color: white; text-decoration: none; border-radius: 5px; }
.error { color: red; margin-top: 20px; }
</style>