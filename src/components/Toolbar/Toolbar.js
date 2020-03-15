import React, { Component,useState,useContext} from 'react';
import { IconContext } from "react-icons";
import MenuItems from '../../components/MenuItems/MenuItems';
import SideDrawer from '../sideDrawer/sideDrawer';
import './Toolbar.css';
import { FaPhone } from "react-icons/fa";
import { IoMdMenu  } from "react-icons/io";
import Modal from '../Modal/Modal';
const Toolbar=(props)=>{
    const[show,setShow]=useState(false);

    const closeDrawer=()=>{
        setShow(false)
    }
    const opensidDrawer=()=>{
        setShow(true)
    }
    return(
<div className="Toolbar">

<SideDrawer  show={show} closeDrawer={closeDrawer} />
<div className="sizemin" >
<span style={{marginTop:10,flex:1}} >

   <IconContext.Provider
      value={{ color: '#F79F1F', size: '25px'}}>
 <IoMdMenu  onClick={opensidDrawer} /> 
    </IconContext.Provider>
      </span>
<MenuItems/>
</div>

<span className="showNav">

            <nav >
             <MenuItems/>
         </nav>
            </span>
       
            <span style={{color:'#ffffff',height:'100%',display:'flex',alignItems:'center'}}>
      <span style={{marginLeft:3,marginTop:10}} className="sizecellphone" >
   <IconContext.Provider
      value={{ color: '#F79F1F', size: '18px'}}>
 <FaPhone /> 
    </IconContext.Provider>
      </span>
      <span style={{marginLeft:4,marginTop:6,color:'#F79F1F'}} className="sizecellphone">
      09106861071
      </span>
      <span className="showNav">
      پشتیبانی و فروش  
      </span>
    
            </span>
            <Modal showModal={true} />
</div>
          
           

    )
}
export default Toolbar;