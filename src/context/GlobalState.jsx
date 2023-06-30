import {createContext, useReducer} from 'react'
import { useContext } from 'react';
import ApiReducer from './ApiReducer';


export const Context = createContext();

export const GlobalProvider = ({children}) =>{
    const initialState = {
        transactions: []
    }
    const [state , dispatch] = useReducer(ApiReducer, initialState);

    const addTransaction = (transactionObj) =>{
        dispatch({
            type:"ADD_TRANSATION",
            payload: transactionObj
        })
    }

    return (
        <Context.Provider value={{
            transaction: state.transactions,
            addTransaction
        }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(Context)
}