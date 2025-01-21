import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
        <header>
            MY HEADER 
        </header>

        <Outlet/> 
    </div>
  )
}
