import {  readonly, shallowRef, inject } from 'vue'

export function useLayer(OL_layerWithoutRef,props) {
    const OL_layer = shallowRef(OL_layerWithoutRef)

    const getOLMapFromParent = inject("getOLMap")

    const OL_map = shallowRef(undefined)

    getOLMapFromParent(map=>{
        console.log("mapa, obtenido...")
        OL_map.value = map
        layerRegisterOnMap()
    })

    function layerRegisterOnMap(){
        setInitialPropsToLayer()
        OL_map.value.addLayer(OL_layer.value)
        
    }

    function setInitialPropsToLayer(){
        OL_layer.value.set("id",props.id)
        OL_layer.value.setVisible(props.visible)
        OL_layer.value.setOpacity(props.opacidad)
    }
    

    return { OL_layer, OL_map  }
}

export const useLayerProps = {
    id:{
        type:String,
        default:"unamedlayer"
    },
    visible:{
        type:Boolean,
        default:true
    },
    opacidad:{
        type:Number,
        default:1
    }
}