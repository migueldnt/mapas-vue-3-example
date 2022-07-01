<template>
    <div class="mapa" ref="mapa"></div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import {useMap,useMapProps} from "./map.js"

const props = defineProps({
    ...useMapProps
})
//referencia del template, deben estar nulas
const mapa = ref(null)

const OL_map = useMap(mapa,props.zoom,props.centro)

</script>


<style scoped>
.mapa{
    width: 500px;
    height: 200px;
    border: 1px solid blue;
}
</style>