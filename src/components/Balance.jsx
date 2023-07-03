import { useContext, useState, useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalState'

export default function Balance() {
    const [balanceNegative, setBalanceNegative] = useState(0)
    const [balancePositive, setBalancePositive] = useState(0)

    const {transaction, deleteTransaction} = useGlobalContext()
    const amounts = transaction && transaction.map((d) => d.amount)
    const total = amounts.reduce((acc,item) => (acc += item), 0)
    


    console.log(amounts)
    return (
        <div>
            <div>Balance</div>
            {JSON.stringify(amounts)}
            
            <div>{total}</div>
        </div>
    )
}
