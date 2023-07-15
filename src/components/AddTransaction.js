import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {AddTransaction} = useContext(GlobalContext);
    const Submit=e=>{
        e.preventDefault();


        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        AddTransaction(newTransaction)
    }
    return (
    <div>
        <div>
            <h3 className='font-sans font-bold'>Add Transaction</h3>
            <hr className='h-1 bg-black w-full '></hr>
            <hr className='h-1 w-fit bg-gray-600'></hr>
            <form onSubmit={Submit}>
                <div className='grid'>
                    <label htmlFor='text' type = 'text' className='font-bold m-2'> Text</label>
                    <input className='rounded-lg ' value={text} onChange={(e)=>{
                        setText(e.target.value)
                    }} placeholder='Enter Text...'></input>
                </div>
                <div className='grid'>
                    <label htmlFor='amount' className='font-bold m-2'>Amount<br></br>(negative =Expense | positive =Income)</label>
                    <input className='rounded-lg ' type='number' value={amount} onChange={(e)=>{
                        setAmount(e.target.value)
                    }} placeholder='Enter Amount...'></input>
                </div>
                <button className='text-center bg-purple-500 rounded-lg w-full mt-5 p-1 hover:bg-purple-400'>Add Transaction</button>
            </form>
        </div>
    </div>
  )
}

export default AddTransaction