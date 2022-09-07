import React, { useState, useEffect } from 'react';
import Light from "./Light.jsx";
import PropTypes from "prop-types"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const styleOfTrafficLight={
		height: "32em",
		width: "15em",
		margin: "auto",
		background: "black"
	}

	const[selector, setSelector]= useState(-1);
	const[onOff, setOnOff]= useState(false);
	const[glow, setGlow]= useState('');
	
	const btnFunction= ()=>{
		if(onOff==false){
			setOnOff(true)
		}else setOnOff(false)
	}

	
	useEffect(()=>{
		if(onOff==true){
			const interval= setInterval(()=>{ 
				setSelector((selector)=>{
					if (selector>2){
						setSelector(0)
					} else setSelector(selector+1);
				})
			}, 1000);
		
			return () => {
				clearInterval(interval)
			}
		}
	 }, [onOff])

	return (
		<div>
		<div className="d-flex flex-column align-items-center my-3 justify-content-center">
			<button onClick={btnFunction} type="button" className={`btn ${onOff ? "btn-danger" : "btn-success"}`}
            >{onOff ? "Press to stopTraffic Light" : "Press to automate Traffic Light"}</button>
		</div>
		<div className="TrafficLightBody d-flex flex-column align-items-center my-4 justify-content-center shadow" style={styleOfTrafficLight}>
			<Light glow={()=>setSelector(0)} light="red"  index={0} slct={selector}/>
			<Light glow={()=>setSelector(1)} light="yellow"  index={1} slct={selector} />
			<Light glow={()=>setSelector(2)} light="green"  index={2} slct={selector} />
		</div>
		</div>
	);
};

export default TrafficLight;
