import { React, useEffect, useState } from 'react'

export default function Github() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://api.github.com/users/codingclap')
            .then(response => response.json())
            .then(rec => {
                setData(rec);
            })
    }, [])
    console.log(data)
    return (
        <>
            <div className="bg-gray-400 py-5">
                <h2 className="text-center text-3xl py-10 font-medium">Github: {data.name} </h2>
                <img src={data.avatar_url} alt="" width={300} />
            </div>
        </>
    )
}