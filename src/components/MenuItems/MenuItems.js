import React, { Component } from 'react';
import './MenuItems.css';
import { IoMdAdd,IoMdPerson } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import MenuItem from './MenuItem/MenuItem';
import { IconContext } from "react-icons";
const MenuItems=()=>{
    
    return(
<ul className="MenuItems">
<MenuItem link="/" >
       <IconContext.Provider
      value={{ color: '#ffffff', size: '25px' }}>
      <span style={{marginTop:7}} > < MdShoppingCart /></span>
    </IconContext.Provider>
           <span>سبدخرید</span>
       </MenuItem>
       <MenuItem link="/" >
       <IconContext.Provider
      value={{ color: '#ffffff', size: '25px' }}>
      <span style={{marginTop:7}} > <IoMdPerson /></span>
    </IconContext.Provider>
           <span>ثبت نام/ورود</span>
       </MenuItem>
       {/* <MenuItem link="/" >
       <IconContext.Provider
      value={{ color: '#ffffff', size: '30px' }}>
      <span style={{marginTop:10}} > <IoMdAdd /></span>
    </IconContext.Provider>
           <span>ثبت نام</span>
       </MenuItem> */}
   
      

       {/* <MenuItem link="/add-student" 
       link={{
           pathname:"/add-student",
           search:"?sort-name",
           hash:"#the-hash",
           state:{fromDashboard:true}
       }}
       >
       اضافه کردن نام دانش آموز
       </MenuItem> */}
    
    </ul>
    )
    
}
export default MenuItems;
