import React from 'react'
import LowerNav from './LowerNav/LowerNav';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
  return(
    <>
        <Navbar/>
        <LowerNav/>
        {props.children}
    </>
   )

 }

export default Layout;