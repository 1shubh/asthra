import React from 'react'
import { Video } from '../components/Video';
import { Navbar2 } from '../components/Navbar2';
import { Events } from '../components/Events';
export const Home = () => {
  return (
    <div>
      <Video/>
      <Navbar2/>
      <Events/>
    </div>
  )
}
