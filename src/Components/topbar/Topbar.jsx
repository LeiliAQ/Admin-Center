import React from 'react'
import './Topbar.css'
import { FaRegBell } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className="topLeft">
          <span className="logo-container">
            <img className='logo' src='./assets/images/logo.png'/>
          </span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <FaRegBell className='topRight-icon'/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <BsGlobe className='topRight-icon'/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <FaGear className='topRight-icon'/>
          </div>
 
          <img className='topAvatar' src='./assets/images/avatar.png'/>
        </div>
      </div>
    </div>
  )
}
