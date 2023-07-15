import React ,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction1 from './Transaction1';
function Transaction() {
  const {transactions} = useContext(GlobalContext);

  return (
   <div>
        <h3 className='font-sans font-bold'>History</h3>
        <hr className='h-1 bg-gray-600 w-full '></hr>
        <ul className=' max-h-64 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray'>
        {transactions.map(transaction=>(<Transaction1 key = {transaction.id} transaction={transaction}/>))}
        </ul>

   </div>
  )
}

export default Transaction