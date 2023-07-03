import React from 'react'
import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionsList from './components/transactions/TransactionsList'

export default function hola() {
  return (
    <GlobalProvider>
      
      <Header/>
      <Balance/>
      <TransactionForm/>
      <TransactionsList/>
      
    </GlobalProvider>
  )
}
