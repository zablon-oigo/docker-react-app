import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
function NavabarLayout() {
  return (
    <div>
      <Header/>
       <Outlet/>
    </div>
  )
}

export default NavabarLayout