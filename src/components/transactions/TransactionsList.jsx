import React from 'react'
import {useGlobalContext} from '../../context/GlobalState'
import styled from 'styled-components'

export default function TransactionsList() {
    const {transaction, deleteTransaction} = useGlobalContext()
  return (
    <Section>
        {
            transaction.map(({id,amount,description}) => {
                const color = (amount > 0) ? 'green': 'red'
                const text = 'transaction-block ' + color
                return ( 
                <div className={text}  key={id}>
                    <p>Description: {description}</p>
                    <span>Monto: {amount}</span>
                    <button className="btn btn-delete" onClick={() => {
                            deleteTransaction(id)
                    }}>
                        X
                    </button>
                </div>
                )
            })
        }
    </Section>
  )
}

const Section = styled.section`
    margin: 2rem;
    
    .transaction-block{
        justify-content: space-between;
        display:flex;
        align-items: center;
        gap:2rem;    
        color: #17241C;
        padding: .5rem;
        margin:1rem;
        border-radius: 1rem;
        border: solid gray 3px;
    }
    .green{
        background-color: #A5FFC9;
    }
    .red{
        background-color: red;
        color: white;
    }

    button {
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border: 2px solid rgb(231, 50, 50);
        background-color: #fff;
        cursor: pointer;
        box-shadow: 0 0 10px #333;
        overflow: hidden;
        transition: .3s;
    }

    button:hover {
        background-color: rgb(245, 207, 207);
        transform: scale(1.2);
        box-shadow: 0 0 4px #111;
        transition: .3s;
    }

    svg {
        color: rgb(231, 50, 50);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .3s;
    }
      
`;
