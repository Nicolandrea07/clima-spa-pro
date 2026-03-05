<template>
  <div v-if="lugar" class="detail-container">
    <router-link to="/">⬅ Volver al inicio</router-link>
    
    <h1>{{ lugar.nombre }}</h1>
    <div class="main-info">
      <p class="current-temp">{{ lugar.temp }}°C</p>
      <p>Estado actual: <strong>{{ lugar.clima }}</strong></p>
    </div>

    <section>
      <h2>📅 Pronóstico de la Semana</h2>
      <div class="forecast-grid">
        <div v-for="dia in lugar.pronostico" :key="dia.dia" class="day-card">
          <p><strong>{{ dia.dia }}</strong></p>
          <p>{{ dia.estado }}</p>
          <p>Máx: {{ dia.max }}° | Min: {{ dia.min }}°</p>
        </div>
      </div>
    </section>

    <section class="stats">
      <h2>📊 Estadísticas Semanales</h2>
      <ul>
        <li>Temperatura Mínima: {{ lugar.stats.min }}°C</li>
        <li>Temperatura Máxima: {{ lugar.stats.max }}°C</li>
        <li>Promedio: {{ lugar.stats.promedio }}°C</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { lugaresClima } from '../data.js';

export default {
  props: ['id'], // Recibe el ID desde la URL
  data() {
    return {
      lugar: null
    }
  },
  mounted() {
    // Buscamos el lugar por el ID que llega en la prop
    this.lugar = lugaresClima.find(l => l.id === this.id);
  }
}
</script>

<style scoped>
.detail-container { padding: 30px; }
.main-info { background: #f0fdf4; padding: 20px; border-radius: 15px; margin: 20px 0; }
.current-temp { font-size: 3rem; margin: 0; color: #166534; }
.forecast-grid { display: flex; gap: 10px; flex-wrap: wrap; }
.day-card { border: 1px solid #ddd; padding: 10px; border-radius: 8px; flex: 1; min-width: 120px; text-align: center; }
.stats { margin-top: 30px; background: #eee; padding: 15px; border-radius: 10px; }
</style>