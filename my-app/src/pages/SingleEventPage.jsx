import React from 'react'
import axios from "axios"
import "./singlePage.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import {Button} from "@chakra-ui/react"
// import { Result } from '../components/Result';

export const SingleEventPage = () => {
    const {id} = useParams();
   const [data,setData] = useState([])
   const [loading,setLoading] = useState(false)

   useEffect(()=>{
    setLoading(true)
    axios.get(`https://server-rp99.onrender.com/astra/${id}`).then((res)=>{
        setData(res.data)
      setLoading(false)
    }).catch((err)=>{
        console.log(err)
    })
   },[])
   
   console.log(data)

  return loading ? <Loader/> : (
    <div id='resultPage'>
         <div>
            <p id='dataTitle'>{data.title}</p>
         </div>
         <div id='dataImage'>
            <div id='eventDiv'>
                <div id='eventExtraDetails'>
                    <p> Event Code : A09MECW</p>
                    <p>Seats left : 0</p>
                    <p style={{color:"#81abd6"}}>Refund facility is not available once registered</p>
                </div>
                <div id='eventSingleImage'>
                <img src={data.image_src} alt="" />
                </div>
                <div id='description'>
                    <p>{data.description}</p>
                </div>
            </div> 
            <div id='eventDetails'>
                 <div id='eventDateAndVenue'>
                    <div>
                    <p id='lable'> WORKSHOP </p>
                    <p id='eventTitle'>{data.title}</p>
                    </div>
                    <div>
                    <p id='lable'>VENUE</p>
                    <p id='vanue'>{data.venue}</p>
                    </div>
                    <div>
                    <p id='lable'>DATE AND TIME</p>
                    <p id='evnetDate'>{data.date}</p>
                    </div>
                 </div>
                 <div id='bookSeat'>
                    <div id='eventPrice'>
                        <p>Grab Your Seat For ₹{data.price}</p>
                    </div>
                    <p id='include'>{data.registration}</p>
                    <Button colorScheme={"red"} color="white" w={"90%"} marginLeft="20px" h={"50px"} marginTop="10px">Regiteration Closed</Button>
                 </div>
            </div>
         </div>
    </div>
  )
}
