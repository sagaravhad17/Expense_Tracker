import React from 'react'

const Transaction = ({transaction, deleteState}) => {
    const sign = (transaction.amount > 0 ? "+" : "-")
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={()=>deleteState(transaction.id)} className="delete-btn">x</button>
          </li>
  )
}

export default Transaction
