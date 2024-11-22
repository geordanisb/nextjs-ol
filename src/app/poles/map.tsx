'use client'

import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {init,LayerTypes} from '@/ECM_MAP';

export default function PolesMap(){
    // const dispatch = useAppDispatch();
    const {zoom,center} = useAppSelector(state => state.map);
    const mapInitialized=useRef(false);
    const[loading,setloading]=useState(true);
    
    useEffect(()=>{
        if(!mapInitialized.current){
            if(typeof window!='undefined'){
                const layers = [
                    {
                        type:LayerTypes.WebGLPoints,
                        url:'https://citizenwarn-api-dev.azurewebsites.net/api/Pole/GetPoleGeometricFeatures',
                        // minZoom:5,
                        // maxZoom:18,
                        featuresloadend:(vs:any)=>{
                            setloading(false);
                        }
                    }
                ]
                init({
                    target: document.getElementById('map')!,
                    center,
                    zoom,
                    layers
                });

                mapInitialized.current = true;

            }
        }
    });

    // useEffect(()=>{
    //     // if (typeof window !== 'undefined'){
    //         const _window = (window  as any);
    //         _window.map.getView().setCenter(center);
    //         _window.map.getView().setZoom(zoom);
    //     // }
    // },[zoom,center]);

    return <div style={{position:'relative'}}>
        {/* {zoom} <button onClick={(e)=>{
                dispatch(mapSlice.actions.setZoom(20));
            }}
        >Zoom to 20</button> */}
        {
            loading 
                ? <div style={{position:'absolute',zIndex:999,color:'white',padding:'1rem',top:'35%',left:'45%'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{scale:4,fill:'darkblue'}}>
                    <style>{`
                        .spinner_I8Q1{animation:spinner_qhi1 .75s linear infinite}
                        .spinner_vrS7{animation-delay:-.375s}
                        @keyframes spinner_qhi1{0%,100%{r:1.5px}50%{r:3px}}
                    `}
                    </style>
                    <circle className="spinner_I8Q1" cx="4" cy="12" r="1.5"/>
                    <circle className="spinner_I8Q1 spinner_vrS7" cx="12" cy="12" r="3"/><circle className="spinner_I8Q1" cx="20" cy="12" r="1.5"/></svg>
                </div>
                : null
        }
        <div id="map-ctr" style={{width:'100dvw',height:'100dvh'}}>
            <div id="map" style={{width:'100%',height:'100%'}}></div>
        </div>
    </div>
 }