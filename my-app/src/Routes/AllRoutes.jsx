import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../pages/Home'
import { SingleEventPage } from '../pages/SingleEventPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/eventResult/:id" element={<SingleEventPage/>}/>
        </Routes>
    </div>
  )
}
