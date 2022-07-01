import { ref, onMounted, onUnmounted, readonly ,shallowRef} from 'vue'
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM, } from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';


export function useMap(target,zoom,center){
    const map = shallowRef(undefined)
    onMounted(()=>{
        map.value = new Map({
            layers: [],
            target: target.value,
            view: new View({
              center: center,
              zoom: zoom,
              projection: 'EPSG:4326'
            }),
          });
          console.log("acabando de montar,,,,",map.value)
    })

    onUnmounted(()=>{
        console.log("aqui deberia destruirse el mapa")
    })
     
    return map
}

export const  useMapProps = {
    zoom: {
        default: 4,
        type: Number
    },
    centro: {
        default(){
            return [0,0]
        },
        type: Array
    }
}