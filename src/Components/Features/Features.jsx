import React from 'react'
import './Features.css'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
export default function Features() {
  return (
    <div className='Features'>
        <div className="Features__item">
            <span className="Feature__title">Revenue</span>
            <div className="Feature__details">
                <span className="Feature__money">2450$</span>
                <span className="Feature__rate">
                    -11.4
                    <FaArrowDown className='Feature__icon negative'/>
                    </span>
            </div>
            <span className='Feature__sub'>Compared to last month</span>
        </div>
        <div className="Features__item">
            <span className="Feature__title">Sales</span>
            <div className="Feature__details">
                <span className="Feature__money">4415$</span>
                <span className="Feature__rate">
                    -11.4
                    <FaArrowDown className='Feature__icon negative'/>
                    </span>
            </div>
            <span className='Feature__sub'>Compared to last month</span>
        </div>
        <div className="Features__item">
            <span className="Feature__title">Costs</span>
            <div className="Feature__details">
                <span className="Feature__money">2410$</span>
                <span className="Feature__rate">
                    +2.4
                    <FaArrowUp className='Feature__icon'/>
                    </span>
            </div>
            <span className='Feature__sub'>Compared to last month</span>
        </div>
      
    </div>
  )
}
