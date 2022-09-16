import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/user/Footer'
import Navbar from '../../components/user/Navbar'


export default function UserpagesOutlet() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
