import React from 'react'
import './Widgetlg.css'
import { transactions } from '../../data'   
export default function Widgetlg() {
    const Button=({type})=>{
        return <button className={'widgetlg__button '+type}>{type}</button>
    }
  return (
    <div className='widgetlg'>
      <h3 className="widgetlg__title">Lates transactions</h3>
      <table className="widgetlg__table">
        <tr className="widgetlg-tr">
          <th className="widgetlg__th">Customer</th>
          <th className="widgetlg__th">Date</th>
          <th className="widgetlg__th">Amount</th>
          <th className="widgetlg__th">Status</th>
        </tr>
        
          {
          transactions.map(purchase=>(
            <tr id={purchase.id} className="widgetlg-tr">
              <>
                <td className="widgetlg__user">
                  <img className='widgetlg__image' src={purchase.img} alt="" />  
                  <span className="widgetlg__username">{purchase.username}</span>
                </td>
                <td className="widgetlg__date">{purchase.date}</td>
                <td className="widgetlg__amount">{purchase.amount}</td>
                <td className="widgetlg__status">
                <Button type={purchase.status}/>
                </td>
              </>
            </tr>
            ))
          }

      </table>

    </div>
  )
}
