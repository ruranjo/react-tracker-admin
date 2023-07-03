import React from 'react'
import {useGlobalContext} from '../context/GlobalState'

export default function Resume() {
    const data = useGlobalContext();
    const transaction = data.transaction;
    const amounts = transaction && transaction.map((d) => d.amount)
    const income = amounts.filter((a) => a > 0).reduce((acc,item) => (acc += item), 0)
    const expensive = amounts.filter((a) => a < 0).reduce((acc,item) => (acc += item), 0)
    return (
    <>
   
        <div>ganacias: ${income} </div>
        <div>gastos: ${expensive} </div>
    </>
  )
}
