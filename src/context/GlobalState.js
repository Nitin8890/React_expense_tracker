import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
//Initial state
const initialState={
    transactions:[]
}
//create context
export const GlobalContext = createContext(initialState);
//provide component
export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    //Actions

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function AddTransaction(transaction){
        dispatch({
            type:'ADD_Transaction',
            payload:transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
        </GlobalContext.Provider>)
}