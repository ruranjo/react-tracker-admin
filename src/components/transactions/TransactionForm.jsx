import React, { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalState'

export default function TransactionForm() {
    const [amount, setAmount] = useState(0.00)
    const [description, setDescription] = useState("")
    const {addTransaction} = useGlobalContext();

    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = window.crypto.randomUUID()
        addTransaction({id , amount, description});
    } 

  return (
    <div className='transactionForm'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a Description' id="input-text" name='input-text' onChange={handleChangeDescription}/>
            <input type="number" step="0.01" placeholder='0.00' name="" id="" onChange={handleChangeAmount}/>
            <button>Add Transiction</button>
        </form>
    </div>
  )
}
