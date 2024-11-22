// import { Feature } from 'ol';
import {GeoJSON} from 'ol/format';
// import { Geometry } from 'ol/geom';
import {WebGLPoints as Layer} from 'ol/layer';
import {Vector} from 'ol/source';
import { LayerType } from '..';
// import { VectorSourceEvent } from 'ol/source/Vector';
// import { LayerOptions } from '..';


export const  WebGLPoints = ({url,minZoom,maxZoom,featuresloadend}:LayerType)=>{
    
        const style = {
            'circle-radius': [
                'interpolate',
                ['exponential', 2],
                ['zoom'],
                5,
                1.5,
                15,
                1.5 * 3,
            ],
            'circle-fill-color': ['match', ['get', 'hover'], 1, '#ff3f3f', '#006688'],
            'circle-displacement': [0, 0],
            'circle-opacity': .5,
        }
        
        const vs = new Vector({
            url,
            format: new GeoJSON({
                dataProjection:'EPSG:3857',
                featureProjection:'EPSG:4326'
            }),
            wrapX: true,
        });
    
        vs.on('featuresloadend',(vs)=>{
            featuresloadend ? featuresloadend(vs) : null;
        });

        return new Layer({
            source: vs as any,
            minZoom,
            maxZoom,
            style,
        })
    
    // new Map({
    //     layers: [
    //         new TileLayer({
    //             source: new OSM(),
    //         }),
    //         pointsLayer
    //     ],
    //     target: document.getElementById('map')!,
    //     view: new View({
    //         center: [-4283202.755223371,-1456844.4667397817],
    //         zoom: 12,
    //     }),
    // });
}

