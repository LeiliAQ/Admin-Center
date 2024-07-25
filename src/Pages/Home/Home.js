import React from 'react'
import './Home.css'
import  Features from '../../Components/Features/Features'
import Chart from '../../Components/Charts/Chart'
import {xAxisData} from '../../data.js'
import Widgetsm from '../../Components/widget/Widgetsm.jsx'
import Widgetlg from '../../Components/widgetlg/Widgetlg.jsx'
export default function Home() {
  console.log(xAxisData)
  return (
    <div style={{flex:1}} className='Home'>
       <Features/> 
       <Chart title="Last 6 Months Sales" data={xAxisData} dataKey="sale" grid />
       <div className='homeWidgets'>
          <Widgetsm/>
          <Widgetlg/>
       </div>
    </div>
  )
}
