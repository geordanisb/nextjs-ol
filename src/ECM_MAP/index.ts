import { Feature, Map,View} from 'ol';
import {OSM} from 'ol/source';
import {Tile as TileLayer} from 'ol/layer';
import { WebGLPoints as Layer } from '@/ECM_MAP/layers/WebGLPoints';
import { VectorSourceEvent } from 'ol/source/Vector';
import { Geometry } from 'ol/geom';

export enum LayerTypes{
    WebGLPoints='WebGLPoints'
}
export interface LayerType{
    url:string;
    minZoom?:number;
    maxZoom?:number;
    featuresloadend?:(vs:VectorSourceEvent<Feature<Geometry>>)=>void;
}
export interface LayerOptions extends LayerType{
    type:LayerTypes;    
}

interface Props{
    target:HTMLElement;
    zoom:number;
    center:number[];
    layers: LayerOptions[];
}

export const init = ({zoom,center,target,layers}:Props)=>new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
        ... layers?.map(({type,url,minZoom,maxZoom,featuresloadend}:LayerOptions)=>{
            switch(type){
                case LayerTypes.WebGLPoints:
                    return Layer({
                        url,
                        featuresloadend,
                        minZoom,
                        maxZoom
                    })
            }
        })
    ],
    target,
    view: new View({
        center,
        zoom,
    }),
});