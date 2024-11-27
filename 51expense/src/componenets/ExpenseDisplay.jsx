import { useState } from 'react'
import { ExpenseUse } from '../ExpenseApi'

export default function ExpenseDisplay({ expense }) {

    const { deleteExpense, editExpense } = ExpenseUse();

    const [ExpName, SetExpName] = useState(expense.name)
    const [ExpCat, SetExpCat] = useState(expense.category)
    const [ExpAmount, SetExpAmount] = useState(expense.amount)

    const [Editable, IsEditable] = useState(false);

    // Edit list

    const checkEditStatus = (id, completed) => {

        if (Editable) {
            IsEditable(false)
            editExpense(id, {...expense, name:ExpName ,amount:parseFloat(ExpAmount), catgeory:ExpCat})
            
        } else {
            IsEditable(true)

        }
    }


   


    return (

        <tr className="hover:bg-gray-100" key={expense.id}>
            <td className="px-4 py-2 text-sm text-gray-700"><input type="text" value={ExpName} disabled={!Editable} onChange={(e) => SetExpName(e.target.value)} /></td>
            <td className="px-4 py-2 text-sm text-gray-700"><input type="text" value={ExpCat} disabled={!Editable} onChange={(e) => SetExpCat(e.target.value)} /> </td>
            <td className="px-4 py-2 text-sm text-gray-700"><input type="text" value={ExpAmount} disabled={!Editable} onChange={(e) => SetExpAmount(e.target.value)} /> </td>
            <td className="px-4 py-2 text-sm text-gray-700">2024-11-15</td>
            <td className="px-4 py-2 text-center">
                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium mr-2" onClick={() => checkEditStatus(expense.id, expense.completed)}>{Editable ? "📁" : "✏️"}</button>
                <button className="text-red-500 hover:text-red-700 text-sm font-medium" onClick={() => deleteExpense(expense.id)}>❌</button>
            </td>
        </tr>


    )
}