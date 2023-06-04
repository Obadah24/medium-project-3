import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import Budget from './Budget'

const Remaining = () => {
  const {expenses, budget, currency} = useContext(AppContext)
  const totalExenses = expenses.reduce((total, item) => {
    return(total = total + item.cost)
  }, 0)
  const alertType = totalExenses > Budget ? 'alert-danger' : 'alert-success'
  return(
    <div className={`alert ${alertType}`}>
      <span>Remaining: {currency}{budget - totalExenses}</span>
    </div>
  )
}
export default Remaining