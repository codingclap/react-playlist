import { Button, Checkbox, Label, TextInput, Table } from "flowbite-react";
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

    const { isAuthenticated } = useAuth0(); 

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null);
    const [editable, setEditable] = useState(false);
    const [currentID, setCurrentId] = useState(null);
    const [contactList, setContactList] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }


    const formHandler = (e) => {
        e.preventDefault()
        if (name === "") {
            setError("Name feild are required!")
        } else if (email === "") {
            setError("Email Field are required!")
        } else {
            if (!editable) {
                setContactList([...contactList, { id: Date.now(), name: name, email: email }])
                setName("")
                setEmail("")
                console.log("inserting")
            } else {
                console.log("editing")
                setContactList(contactList.map((updatRec) => updatRec.id === currentID ? { ...updatRec, name: name, email: email } : updatRec))
                setName("")
                setEmail("")
                setEditable(false)
                setCurrentId(null)
            }
        }
    }

    const deleteTodo = (id) => {
        if (!toggle) {
            setContactList(contactList.filter((newDel) => newDel.id !== id))
        } else {
            alert("Record can't be deleted");
        }
    }

    const editTodo = (id) => {
        if (!toggle) {
            const editTodo = contactList.find((editRec) => editRec.id === id)
            console.log(editTodo)
            setName(editTodo.name)
            setEmail(editTodo.email)
            setCurrentId(id)
            setEditable(true)
        } else {
            alert("Record can't be edited");
        }
    }

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem("contact"));

        if (saveData && saveData.length > 0) {
            setContactList(saveData);

        }

    }, [])

    useEffect(() => {
        localStorage.setItem("contact", JSON.stringify(contactList))
    }, [contactList])


    return (
        <>

            <div className="bg-white">

                <div className="relative isolate px-6 pt-10 lg:px-8">

                    <div className="mx-auto max-w-full py-10 sm:py-10 lg:py-10 flex flex-col justify-center items-center">

                        <div className="text-center">
                            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Todo App
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-100 flex items-center justify-center">
                        <form className="flex max-w-md flex-col gap-4" onSubmit={formHandler}>
                            <div className="w-96">
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Full name" />
                                </div>
                                <TextInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="full name" shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your Email" />
                                </div>
                                <TextInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@gmail.com" shadow />
                            </div>
                            <p className="text-red-600">{error}</p>
                            <Button type="submit">Add Record</Button>
                        </form>
                    </div>

                    {/* List */}
                    {isAuthenticated ?
                        <div className="w-100 flex items-center justify-center mt-10">
                            <div className="w-[80rem]">
                                <Table hoverable>
                                    <Table.Head>
                                        <Table.HeadCell className="p-4">
                                            <Checkbox />
                                        </Table.HeadCell>
                                        <Table.HeadCell>Product name</Table.HeadCell>
                                        <Table.HeadCell>Email</Table.HeadCell>
                                        <Table.HeadCell>Option</Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">Edit</span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">

                                        {
                                            contactList.map((rec) => (

                                                <Table.Row key={rec.id} className={`${toggle ? 'line-through' : ''} bg-white dark:border-gray-700 dark:bg-gray-800 `}>
                                                    <Table.Cell className="p-4">
                                                        <Checkbox onChange={handleToggle} />
                                                    </Table.Cell>
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {rec.name}
                                                    </Table.Cell>
                                                    <Table.Cell>{rec.email}</Table.Cell>

                                                    <Table.Cell>
                                                        <a href="javascript:void(0)" onClick={() => editTodo(rec.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                            Edit
                                                        </a> &nbsp; | &nbsp;
                                                        <a href="javascript:void(0)" onClick={() => deleteTodo(rec.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                            Delete
                                                        </a>
                                                    </Table.Cell>
                                                </Table.Row>

                                            ))
                                        }


                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        : <div className="mt-20 text-center">
                            <span className="text-balance border-2 border-cyan-800 py-3 px-5 text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                Login To View The Records . . . 
                            </span>
                        </div>}
                </div>
            </div>


        </>
    )

}
