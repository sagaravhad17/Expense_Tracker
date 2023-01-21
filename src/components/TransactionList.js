import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const {transactions, deleteState} = useContext(GlobalContext);
  // console.log(transactions)
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map((transaction)=>{
            return <Transaction transaction={transaction} key={transaction.id} deleteState={deleteState}/>
          })
        }
      </ul>
    </div>
  );
};

export default TransactionList;
