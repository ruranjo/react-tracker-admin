import { useContext } from 'react'
import { useGlobalContext } from '../context/GlobalState'

export default function Balance() {
    const data = useGlobalContext()
        
    return (
        <div>
            <div>Balance</div>
            {JSON.stringify(data)}
        </div>
  )
}
