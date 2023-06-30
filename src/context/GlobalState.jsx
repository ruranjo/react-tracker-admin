import {createContext, useReducer} from 'react'
import { useContext } from 'react';
import ApiReducer from './ApiReducer';


export const Context = createContext();

export const GlobalProvider = ({children}) =>{
    const initialState = {
        transactions: []
    }
    const [state , dispatch] = useReducer(ApiReducer, initialState);
    return (
        <Context.Provider value={{
            transaction: state.transactions
        }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(Context)
}