import { useDispatch, useSelector } from "react-redux";
import { removeTodo, edittodo } from '../features/todoSlice';
import { useEffect } from "react";


export default function DisplayList({ setName, setAmount, setEditStatus, setUiqueID}) {
    const allTodo = useSelector(state => state.todos);
    const dispatch = useDispatch();

    let finaldata = [];
    const data = localStorage.getItem('todoItem');
    finaldata = data ? JSON.parse(data) : [];
    
    useEffect(() => {
        const data = localStorage.getItem('todoItem');
        finaldata = data ? JSON.parse(data) : [];
      }, [setUiqueID]); // Dependency array

    const editHandler = (id, name, amount) => {
        dispatch(edittodo)
        setName(name);
        setAmount(amount);
        setUiqueID(id)
        setEditStatus(true); 
    }

    return (
        <>
            <h3 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-3xl dark:text-white text-center mt-6 py-10">Grocery List:</h3>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            finaldata.map((todo) => (
                                <tr key={todo.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        #
                                    </th>
                                    <td className="px-6 py-4">
                                        {todo.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {todo.amount}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button onClick={() => editHandler(todo.id, todo.name, todo.amount)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>&nbsp; || &nbsp;
                                        <button onClick={() => dispatch(removeTodo(todo.id))} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }





                    </tbody>
                </table>
            </div>


        </>
    )
}

