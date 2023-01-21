import { createContext, useReducer } from "react"
import { AppReducer } from "./AppReducer";


const initialState = {
    transactions: [
        {id: 0, text: '', amount: 0},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialState)

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    function deleteState(id){
         dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteState,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}