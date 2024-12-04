import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export default function Todo() {
    return (
        <>
            <div className="bg-white">

                <div className="relative isolate px-6 pt-14 lg:px-8">

                    <div className="mx-auto max-w-full py-10 sm:py-10 lg:py-10 flex flex-col justify-center items-center">

                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                Todo App
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-100 flex items-center justify-center">
                        <form className="flex max-w-md flex-col gap-4">
                            <div className="w-96">
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Full name" />
                                </div>
                                <TextInput id="name" type="email" placeholder="Anuj Kumar" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your Email" />
                                </div>
                                <TextInput id="email" type="email" required placeholder="Anuj@gmail.com" shadow />
                            </div>


                            <Button type="submit">Add Record</Button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}