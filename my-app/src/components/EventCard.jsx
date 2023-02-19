import React from 'react'
import {Link as RouterLink} from "react-router-dom"
export const EventCard = (prop) => {
    const {image_src,title,date,price,id} = prop
  return (
    <>
    <RouterLink to={`/eventResult/${id}`} id="routerlink">
    <div id='eventsCard'>
        <div id='image'>
            <img src={image_src} alt={title} />
             <p id='price'>₹{price}</p>
        </div>
        <div id='eventText'>
            <p id='title'>{title}</p>
            <p id='date'>{date}</p>
        </div>
    </div>
    </RouterLink>
    </>
  )
}
