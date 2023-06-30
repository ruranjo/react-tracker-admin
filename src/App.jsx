import React from 'react'
import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

export default function hola() {
  return (
    <GlobalProvider>
      
      <Header>

      </Header>
      <Balance>

      </Balance>
      
      <TransactionForm>

      </TransactionForm>
    </GlobalProvider>
  )
}
