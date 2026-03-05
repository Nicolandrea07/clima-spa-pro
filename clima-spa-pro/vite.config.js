import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/clima-spa-pro/' 
})
