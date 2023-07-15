import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const total = amounts.reduce((acc , item)=>(acc+=item),0).toFixed(2);
  return (
    <div>
        <h4 className='font-sans '>Your Balance</h4>
        <h3 className='text-2xl font-extrabold'> ${total}</h3>
    </div>
  )
}

export default Balance