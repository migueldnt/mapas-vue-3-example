<script setup>
import { ref, watch } from 'vue'
import { useLayer, useLayerProps } from './layer';

import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const props = defineProps({
    ...useLayerProps,
    url: {
        type: String,
        default: "https://{a-c}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png"
    },
    atribuciones: {
        type: String,
        default: ' &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, © <a href="https://carto.com/">Carto</a>'
    }
})

//creando el layer, pero aun no se agrega a ref
const OLlayerWithoutRef = new TileLayer({
    source: new XYZ({
        url: props.url,
        attributions: props.atribuciones,
        crossOrigin: 'Anonymous'
    })
})


const { OL_layer, OL_map } = useLayer(OLlayerWithoutRef, props)

watch(()=>props.opacidad,(value,oldvalue)=>{
    if(OL_layer){
         OL_layer.value.setOpacity(value)
    }
})

watch(()=>props.visible,(value,oldvalue)=>{
    if(OL_layer){
         OL_layer.value.setVisible(value)
    }
})



</script>