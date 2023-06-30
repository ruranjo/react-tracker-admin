export default (state, action) =>{
    switch (action.type) {
        case 'ADD_TRANSATION':
            return {
                ...state,
               transactions: [...state.transactions, action.payload]
            } 
    
        default:
            return state;
    }
}