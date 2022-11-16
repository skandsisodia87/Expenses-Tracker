import React,{createContext,useReducer} from "react";
import {reducer} from './AppReducer'


const initialState={
    transactions:(localStorage.getItem('transactions')===null)?[]:JSON.parse(localStorage.getItem('transactions'))
}


// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalState = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  // Actions
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload:id
    });
  }
  function addTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload:transaction
    });
  }

  return (
    <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}
