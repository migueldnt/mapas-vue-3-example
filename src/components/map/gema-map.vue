<template>
<div style="border: 1px solid red;">
    <p>{{titulo}}</p>
    <div class="mapa" ref="mapa"></div>
</div>
    
</template>

<script setup>
import { ref } from 'vue'
import {useMap,useMapProps} from "./map.js"

const props = defineProps({
    titulo:String,
    ...useMapProps
})
//referencia del template, deben estar nulas
const mapa = ref(null)

const OL_map = useMap(mapa,props.zoom,props.centro)


</script>


<style scoped>
.mapa{
    width: 100%;
    height: 400px;
}
</style>