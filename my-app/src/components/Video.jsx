import React from 'react'
import homevideo from "../video/video.mp4"
import "../components/video.css"

export const Video = () => {
  return (
    <div id='video'>
        <video
        style={{ position: "relative" }}
        autoPlay
        loop
        muted
        id="homeVideo"
      >
        <source src={homevideo} type="video/mp4" />
      </video>
      <div id='futureText'>
          <h1 style={{color:"white"}}>THE FUTURE IS LOOKING</h1>
          <button id='explore'>EXPLORE</button>
          <button id='register'>REGISTER</button>
      </div>
      <div id='text'>
        <p>Asthra - The national level technical fest of St. Joseph's College of Engineering and Technology, Palai, framed with a vision to explore the possibilities of tomorrow. With an annual footfall of more than 5,000+ visitors and participants, Asthra is one of the biggest inter-college fests in Kerala. With a plethora of professional shows, competitions, lectures, and workshops, Asthra will keep you engrossed in every way possible.</p>
      </div>
    </div>
  )
}
