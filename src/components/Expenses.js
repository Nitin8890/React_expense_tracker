import React ,{ useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
function Expenses() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const income  = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const expense  = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);

  return (
    <div className='bg-slate-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex
        h-20 w-full font-sans rounded-lg
    '>
        <div className='w-1/2 h-full grid border-r-2 border-black'>
            <h2 className='text-center text-xl'>Income</h2>
            <h3 className='text-center text-green-500 text-2xl'>${income}</h3>
        </div>
        <div className='w-1/2 h-full grid'>
            <h2 className='text-center text-xl'>Expense</h2>
            <h3 className='text-center text-red-500 text-2xl'>${expense}</h3>
        </div>
    </div>
  )
}

export default Expenses