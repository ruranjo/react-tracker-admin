import {createContext, useEffect, useReducer} from 'react'
import { useContext } from 'react';
import ApiReducer from './ApiReducer';


export const Context = createContext();

export const GlobalProvider = ({children}) =>{
    const initialState = {
        transactions: []
    }
    
    const [state , dispatch] = useReducer(ApiReducer, initialState,
    () =>{
        const localData = localStorage.getItem('transactions')
        return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() =>{
        localStorage.setItem('transactions', JSON.stringify(state))
    },[state])
    const addTransaction = (transactionObj) =>{
        dispatch({
            type:"ADD_TRANSATION",
            payload: transactionObj
        })
    }
    
    const deleteTransaction = (id) =>{
        dispatch({
            type:"DELETE_TRANSATION",
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transaction: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(Context)
}