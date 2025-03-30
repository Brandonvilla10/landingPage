import React from "react";
import '../css/topics.css'


function Topics(props){
    return(
        <>
            <div className="topic">
                <div className="divImgtopic" style={{backgroundColor:props.color}}>
                    <img src={props.icono} className="icono" alt="" />
                </div>
                <div style={{paddingLeft:"2em", paddingRight:"2em", textAlign:"left"}}>
                    <h1 className="tituloTopic">{props.tituloTopic}</h1>
                    <p style={{color:"gray", marginTop:"unset" , fontSize:"0.9rem" }}>{props.descripcionTopic}</p>
                </div>
            </div>
        </>
    )
}

export default Topics;