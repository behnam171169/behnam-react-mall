import React, { Component } from 'react';
import './backdrop.css';
const Backdrop=(props)=>(
    props.show?<div className="Backdrop" onClick={props.modalclose}></div>:null
)
export default Backdrop;   