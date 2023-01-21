import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amount = transactions.map((transaction)=> transaction.amount)
  const total = amount.reduce((acc,curr)=> (acc+=curr),0)

  // const sign = (total > 0 ? "+" : "-")
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
