

export default function SimpleProps({name, age, hobbies}){
    
    // De-structure the object (props) using Curly braces-{} . After that we can directly props with name

    return(
       <>

        <h2>Name is: {name} {console.log(typeof(hobbies))}</h2>
        <h3>Age: {age}</h3>
        <h3>Hobbies: {hobbies}</h3>
        <hr style={{border:'1px solid black',width:"100%"}}/>
       </>
    )
}
