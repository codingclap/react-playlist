import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from '../features/todoSlice'

export default function DisplayList() {
    const allTodo = useSelector(state => state.todos);
    console.log(allTodo)
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
                            allTodo.map((todo) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
