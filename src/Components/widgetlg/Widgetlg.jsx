import React from 'react'
import './Widgetlg.css'
export default function Widgetlg() {
    const Button=({type})=>{
        return <button className={'widgetlg__button'+type}>{type}</button>
    }
  return (
    <div>
      <h3 className="widgetlg__title">Lates transactions</h3>
      <table className="widgetlg__table">
        <tr className="widgetlg-tr">
          <th className="widgetlg__th">Customer</th>
          <th className="widgetlg__th">Date</th>
          <th className="widgetlg__th">Amount</th>
          <th className="widgetlg__th">Status</th>
        </tr>
        <tr className="widgetlg-tr">
          <td className="widgetlg__user">
            <img src="./assets/images/avatar.png" alt="" />  
            <span className="widgetlg__username">Susan Carol</span>
          </td>
          <td className="widgetlg__date">2 Mar 2023</td>
          <td className="widgetlg__amount">$122.00</td>
          <td className="widgetlg__status">
            <Button type="Approved"/>
          </td>

        </tr>
      </table>

    </div>
  )
}
