import { useState } from "react";
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todoSlice';

export default function AddTodo() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({name, amount}));
        
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Expense Form</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                            <input type="text" id="name" name="name"
                                className="w-full rounded-md shadow-sm py-2 border border-2 border-black" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-600 mb-1">Amount</label>
                            <input type="number" id="amount" name="amount" step="0.01"
                                className="w-full rounded-md shadow-sm py-2 border border-2 border-black" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>


                        <button type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Add Expense
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}