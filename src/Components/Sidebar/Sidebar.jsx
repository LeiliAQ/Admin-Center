import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { PiChartLineUpBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdReport } from "react-icons/md";
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="dashborad-wrapper">
          <div className="dashborad">
            <div className="dashborad__title">
                DASHBOARD
            </div>
            <Link to='/' className='sidebarlist-item'> 
            <div className='sidebarlist-item active'>
                <FaHome className='sidebarIcon'/>
                Homes
            </div>
            </Link>
            
            <div className='sidebarlist-item'>
                <IoAnalyticsSharp className='sidebarIcon'/>
                Analytics
            </div>
            <div className='sidebarlist-item'>
                <PiChartLineUpBold className='sidebarIcon'/>
                Sales
            </div>
          </div>
          <div className="dashborad">
            <div className="dashborad__title">
                Quick MENU
            </div>
            <Link to='/users' className='sidebarlist-item'>
            <div className='sidebarlist-item'>
                <FaRegUser className='sidebarIcon'/>
                Users
            </div>
            </Link>
            <Link to='/newUser' className='sidebarlist-item'>
            <div className='sidebarlist-item'>
                <FaRegUser className='sidebarIcon'/>
                New User
            </div>
            </Link>
            <Link to='/products' className='sidebarlist-item'>
            <div className='sidebarlist-item'>
                <AiFillProduct className='sidebarIcon'/>
                Products
            </div>
            </Link>
            <div className='sidebarlist-item'>
                <FaDollarSign className='sidebarIcon'/>
                Transactions
            </div>
            <div className='sidebarlist-item'>
                <IoStatsChart className='sidebarIcon'/>
                Reports
            </div>
          </div>
          <div className="dashborad">
            <div className="dashborad__title">
                NOTIFICATIONS
            </div>
            <div className='sidebarlist-item'>
                <MdOutlineEmail className='sidebarIcon'/>
                Mail
            </div>
            <div className='sidebarlist-item'>
                <MdOutlineFeedback className='sidebarIcon'/>
                Feedback
            </div>
            <div className='sidebarlist-item'>
                <FiMessageSquare className='sidebarIcon'/>
                Messages
            </div>
          </div>
          <div className="dashborad">
            <div className="dashborad__title">
                STAFF
            </div>
            <div className='sidebarlist-item'>
                <PiSuitcaseSimpleBold className='sidebarIcon'/>
                Manage
            </div>
            <div className='sidebarlist-item'>
                <IoAnalyticsSharp className='sidebarIcon'/>
                Analytics
            </div>
            <div className='sidebarlist-item'>
                <MdReport className='sidebarIcon'/>
                Reports
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
