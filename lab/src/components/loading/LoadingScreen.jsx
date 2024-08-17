import React from 'react'
import'./style.css'
export default function LoadingScreen() {
  return (
   <div>
  <div className="text-center vh-100 d-flex justify-content-center align-items-center">
    <div className="lds-ripple "><div /><div /></div>
  </div>
</div>

  )
}
