import { useEffect, useState } from "react"
import ExpenseDisplay from "./componenets/ExpenseDisplay"
import ExpenseForm from "./componenets/ExpenseForm"
import { ExpenseProvider } from './ExpenseApi'

function App() {

  const [expenses, setExpenses] = useState([])


  const addExpense = (expense) => {
    setExpenses([...expenses, expense])

  }
  
  const editExpense = (id, record) => {
    setExpenses((prev) => prev.map((prevData) => prevData.id === id ? record : prevData))
     
  }

  const deleteExpense = (itemId) => {

    setExpenses(expenses.filter((delItem) => delItem.id !== itemId))
    console.log(itemId)
  }


  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('records'));

    if (records && records.length > 0) {
      setExpenses(records)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(expenses))
  }, [expenses])


  return (
    <ExpenseProvider value={{ addExpense, deleteExpense, editExpense }}>
      <ExpenseForm />

      <div className="flex items-center justify-center mt-10">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-7xl w-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Expense List</h2>

          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium uppercase">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium uppercase">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium uppercase">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-medium uppercase">Date</th>
                <th className="px-4 py-2 text-center text-sm font-medium uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200"> 
              {
                expenses.map((expenses) => ( 
                  <ExpenseDisplay expense={expenses} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      
    </ExpenseProvider>
  )
}

export default App
