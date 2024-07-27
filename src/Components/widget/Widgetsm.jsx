import React from 'react'
import './Widgetsm.css'
import { MdVisibility } from "react-icons/md";
import {newMembers} from '../../data'
export default function Widgetsm() {
  return (
    <div className='Widgetsm'>
      <span className="Widget__title">New Join Members</span>
      <ul className="Widgetsm-items">
        {newMembers.map((member)=>(
            <li key={member.id} className="Widgetsm-item">
              <img src={member.img} alt="" className='Widgetsm-img'/>
              <div className="item-details">
                  <span className="item-username">{member.username}</span>
                  <span className="item-title">{member.title}</span>
              </div>
              <button className="Widgetsm-button">
                  <MdVisibility className='Widgetsm-icon'/>
              </button>
            </li>
        ))}     
      </ul>
    </div>
  )
}
