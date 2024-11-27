import { createContext, useContext } from "react";


export const ExpenseContext = createContext({
    addExpense:() => {},
    deleteExpense:() => {},
    editExpense:() => {}
})

export const ExpenseProvider = ExpenseContext.Provider;


export const ExpenseUse = () => {
    return useContext(ExpenseContext)
}