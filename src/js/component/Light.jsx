import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"

const Light= (props)=>{
    
    let  styleLight={
        height: "8em",
        width: "8em",
        background: `${props.light}`,
        padding: '1em',
    }
    
    if(props.slct === props.index){

        styleLight={
        height: "8em",
        width: "8em",
        background: `${props.light}`,
        padding: '1em',
        boxShadow: '1px 2px 50px #F4AAB9'
        }

    } 

    return <div className="rounded-circle my-3" style={styleLight} onClick={props.glow}></div>
}

Light.propTypes={};
export default Light;