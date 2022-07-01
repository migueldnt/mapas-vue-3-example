<script setup>
import Mapa from './components/map/map.vue';
import GemaMap from "./components/map/gema-map.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  
  <Mapa></Mapa>
  <hr>
  <Mapa></Mapa>
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
