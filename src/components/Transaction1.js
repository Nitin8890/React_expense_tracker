import React ,{useContext}from "react";
import { GlobalContext } from "../context/GlobalState";
function Transaction1({ transaction }) {
  const {deleteTransaction}=useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li
        className={`bg-slate-100 flex justify-between p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2) ] ${
          transaction.amount < 0
            ? "border-r-4 border-red-500"
            : "border-r-4 border-green-500"
        }`}
      >
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button onClick={()=>{
          deleteTransaction(transaction.id)
        }} className="text-white bg-red-500  border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2) ] h-7 w-7">
          X
        </button>
      </li>
    </div>
  );
}

export default Transaction1;
