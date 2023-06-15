import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const MailLayout = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MailLayout