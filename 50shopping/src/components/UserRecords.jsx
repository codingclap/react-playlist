import React from "react"

function UserRecords(props) {
    const finalData = props.userRecord;


    return (

        <div>

            {

                finalData.map((newData) => (
                    <h2>{newData.title}</h2> 
                ))
                        
            }

        </div >

    )
}

export default UserRecords