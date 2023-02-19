import React from 'react'
import "../components/navbar.css"
import {HiBars2} from "react-icons/hi2"

export const Navbar1 = () => {
  return (
    <nav>
     <div id='container'>
      <div id='navbar'>
        <img src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png" alt="logo" />
      </div>
      <div>
        <HiBars2 color='white' fontWeight={"bold"} fontSize="25px" cursor={"pointer"}/>
      </div>
    </div>
    </nav>
  )
}
