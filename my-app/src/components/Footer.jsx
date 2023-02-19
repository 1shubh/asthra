import React from 'react'
import "./footer.css"
import {BsInstagram,BsFacebook,BsYoutube} from "react-icons/bs"

export const Footer = () => {
  return (
 <>
    <div id='footer'>
        <div id='address'>
            <img src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png" alt="logo" />
            <p style={{color:"white",fontSize:"16px"}}>St.Joseph’s College of Engineering and Technology, Palai,
                Choondacherry P.O, Palai, Kottayam 686 579, Kerala,India.</p>
            <p style={{color:"#a3e635",fontWeight:"18px",lineHeight:"24px"}}>Get Directions </p>
        </div>
        <div id='links'>
            <h2 style={{color:"white"}}>LINKS</h2>
            <p>ABOUT</p>
            <p>COMPETITION</p>
            <p>EVENTS</p>
            <p>EXEBITION</p>
            <p>WORKSHOP</p>
            <p>TEAM</p>
            <p>CONTACTS</p>
        </div>
        <div id='visions'>
            <h2 style={{color:"white"}}>VISION</h2>
            <p>Developing into a world-class, pace-setting institute of Engineering and Technology with distinct identity and character, meeting the goals and aspirations of the society.</p>
            <h2 style={{color:"white"}}>MISSION</h2>
            <p>To maintain a conducive infrastructure and learning environment for world-class education.To nurture a team of dedicated, competent and research-oriented faculty.
               To develop students with moral and ethical values, for their successful career by offering variety of programmes and services</p>
        </div>
    </div>
    <div style={{padding:"40px",background:"#1b1b1b",border:"0px solid yellow"}}>
        <div id='icons'>
          <BsInstagram fontSize={"30px"} cursor="pointer"/>
          <BsFacebook fontSize={"30px"} cursor="pointer"/>
          <BsYoutube fontSize={"30px"} cursor="pointer"/>
        </div>
    </div>
    <div style={{backgroundColor:"#134e4a", border:"0px solid yellow",textAlign:"center",padding:"10px"}}>
        <p id='madeby'>Made with ❤️️ by Team Asthra</p>
    </div>
 </>
  )
}
