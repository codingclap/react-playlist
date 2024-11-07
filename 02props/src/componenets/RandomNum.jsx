

export default function RandomNum({display, setRandom}){



const genrateRandomNo = () => {
    const randomNo =  Math.floor(Math.random() * 100)
    setRandom(randomNo); 
}

    return(
        <>
            <hr style={{ border: '1px solid black', width: "100%" }} />

            <h3>Random No: {display}</h3>
            <button onClick={genrateRandomNo}> Generate Random Number</button>
        </>
       
    )
}