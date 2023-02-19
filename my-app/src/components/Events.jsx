import React, { useState,useEffect } from 'react'
import "./events.css"
import axios from "axios"
import { EventCard } from './EventCard'
import { Loader } from './Loader'



export const Events = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [select,setSelect] = useState("ee")

    const handleChange = (e) => {
        let selected = e.target.value
        if(selected){
         setSelect(selected)
        }
    }

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://server-rp99.onrender.com/astra?department=${select}`).then((res)=>{
            setData(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
       },[select])
   console.log(data)


  return loading ? <Loader/> : (
    <div>
        <div id='selectDepartments'>
            <select id="select" onChange={handleChange}>
                <option value="">ALL Departments Events</option>
                <option value="mechanical">Mechaura - Mechanical Engineering</option>
                <option value="computer">Radiance - Computer Science and Engineering</option>
                <option value="civil">Aakriti - Civil Engineering</option>
                <option value="ec">Spectra - Electronics and Communication Engineering</option>
                <option value="ee">Emerge - Electrical and Electronics Engineering</option>
                <option value="ei">Yanthrika - Applied Electronics and Instrumentation Engineering</option>
                <option value="ai">Aztec Allure - Artificial Intelligence and Data Science</option>
                <option value="ece">Pandora - Electronics and Computer Science</option>
                <option value="mba">Trilok - Master of Buisness and Administration </option>
                <option value="mca">Fenstra - Master of Computer Science</option>
                <option value="general">General</option>
                <option value="informal">Informal</option>
            </select>
        </div>
        <div id='events'>
            {data.map((event)=>(
                <EventCard key={event.id} {...event}/>
            ))}
        </div>
    </div>
  )
}
