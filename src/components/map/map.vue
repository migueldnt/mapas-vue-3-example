<template>
    <div class="mapa" ref="mapa">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, defineProps, provide } from 'vue'
import {useMap,useMapProps} from "./map.js"

const props = defineProps({
    ...useMapProps
})
//referencia del template, deben estar nulas
const mapa = ref(null)

const OL_map = useMap(mapa,props.zoom,props.centro)

//hacer una funcion que los hijos (sin importar si son directos) tengan acceso a OL_map de este componente
function getMapAfterInitialized(callbackOnFound){
    const checkOlMapExists=()=>{
        if(OL_map.value){
            callbackOnFound(OL_map.value)
        }else{
            setTimeout(checkOlMapExists,20)
        }
    }
    checkOlMapExists()
}

const getOlmap = provide("getOLMap",getMapAfterInitialized)



</script>


<style scoped>
.mapa{
    width: 500px;
    height: 200px;
    border: 1px solid blue;
}
</style>