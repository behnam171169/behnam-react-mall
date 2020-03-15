import React, { Component } from 'react';
import {  IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import './sideDrawer.css';
import Logo from './../logo/logo';
 import Backdrop from '../backdrop/backdrop';
const SideDrawer=(props)=>{
   
    let classes=['SideDrawer','Close'];
    if(props.show){
        classes=['SideDrawer','open']
    }
    return(
        <React.Fragment>
 <Backdrop show={props.show} modalclose={props.closeDrawer}/>
<div className={classes.join(' ')} style={{paddingTop:0}} >
    <div >
   

    <div >

    <Logo/>
    </div>
{/* 
        <IconContext.Provider 
      value={{ color: '#ffffff', size: '35px' }}>
      <span style={{marginRight:140}} > <IoIosArrowForward /></span>
    </IconContext.Provider> */}
      
    </div>
   
   </div>
        </React.Fragment>
        
    )
}
export default SideDrawer;