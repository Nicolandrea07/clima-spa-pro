export const lugaresClima = [
  { 
    id: 'villarrica', 
    nombre: 'Villarrica', 
    clima: 'Lluvia Débil', 
    temp: 15, 
    pronostico: [
      { dia: 'Vie', estado: 'Lluvia', max: 17, min: 10 },
      { dia: 'Sab', estado: 'Nublado', max: 19, min: 11 },
      { dia: 'Dom', estado: 'Soleado', max: 22, min: 12 }
    ],
    stats: { min: 10, max: 22, promedio: 16 }
  },
  { 
    id: 'pucon', 
    nombre: 'Pucón', 
    clima: 'Nublado', 
    temp: 18, 
    pronostico: [
      { dia: 'Vie', estado: 'Nublado', max: 20, min: 12 },
      { dia: 'Sab', estado: 'Soleado', max: 24, min: 13 },
      { dia: 'Dom', estado: 'Soleado', max: 26, min: 15 }
    ],
    stats: { min: 12, max: 26, promedio: 20 }
  },
  { 
    id: 'lican-ray', 
    nombre: 'Lican Ray', 
    clima: 'Despejado', 
    temp: 21, 
    pronostico: [
      { dia: 'Vie', estado: 'Soleado', max: 23, min: 14 },
      { dia: 'Sab', estado: 'Soleado', max: 25, min: 15 },
      { dia: 'Dom', estado: 'Nubes', max: 21, min: 13 }
    ],
    stats: { min: 13, max: 25, promedio: 19.5 }
  },
  { 
    id: 'caburgua', 
    nombre: 'Caburgua', 
    clima: 'Soleado', 
    temp: 23, 
    pronostico: [
      { dia: 'Vie', estado: 'Soleado', max: 25, min: 12 },
      { dia: 'Sab', estado: 'Soleado', max: 27, min: 14 },
      { dia: 'Dom', estado: 'Soleado', max: 28, min: 16 }
    ],
    stats: { min: 12, max: 28, promedio: 21 }
  },
  { 
    id: 'curarrehue', 
    nombre: 'Curarrehue', 
    clima: 'Frío', 
    temp: 12, 
    pronostico: [
      { dia: 'Vie', estado: 'Nieve', max: 14, min: 5 },
      { dia: 'Sab', estado: 'Lluvia', max: 12, min: 4 },
      { dia: 'Dom', estado: 'Nublado', max: 13, min: 6 }
    ],
    stats: { min: 4, max: 14, promedio: 8.5 }
  }
];