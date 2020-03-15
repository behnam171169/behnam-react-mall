import React, { Component } from 'react';
import './Modal.css';
import Backdrop from './../backdrop/backdrop';
const Modal=(props)=>{
    return(
        <React.Fragment>
            {/* <Backdrop show={props.show} modalClosed={props.modalClosed}/> */}
      <div className="Modal"
        style={{transform:props.showModal?'translateX(0)':'translateX(-100vw)',
    opacity:props.showModal?'1':'0'
    }}
        >
         <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <div style={{display:'bluck',marginBottom:30,marginTop:15}}>
    <a onClick={()=>alert('kkk')} style={{marginRight:30}}>
        ورود
    </a>
    <a onClick={()=>alert('kkk')} className="apassword">
       رمز عبور خود را فراموش کرده ام
    </a>
    </div>
   
    <span style={{marginRight:15,color:'white'}}>کاربر جدید هستید؟<a style={{color:'#F79F1F'}}>ثبت نام</a> کنید </span>
    </div>
 

        </React.Fragment>

  
    )
}
export default Modal;

