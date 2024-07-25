import React from 'react'
import { 
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis,
    Legend,
    } from 'recharts'
import './Chart.css'
export default function Chart({title,dataKey,data,grid}) {
  return (
    <div className="Chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

