<script setup>
import Mapa from './components/map/map.vue';
import GemaMap from "./components/map/gema-map.vue";
import LayerXyz from './components/layer/layer-xyz.vue';
import { ref } from 'vue';

let visiblelayermapa2 = ref(true)
let opacidadlayermapa2 = ref(1)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  
  <Mapa>
    <LayerXyz url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
  </Mapa>
  <hr>
  <div>
    <Mapa>
      <LayerXyz :visible="visiblelayermapa2" :opacidad="opacidadlayermapa2"/>
    </Mapa>
   <label><input type="checkbox" v-model="visiblelayermapa2"/> es visible</label>
   <input type="number" v-model="opacidadlayermapa2" min="0" step="0.1">
  </div>
  
  <hr>
  <GemaMap :centro="[-99.1332,19.4326]" titulo="mapa de gema"></GemaMap>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
