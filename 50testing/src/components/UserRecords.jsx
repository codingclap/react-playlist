import React from "react"

function UserRecords(props) {

    const userRecord = Object.entries(props.userRecord);

    return (

        <div>

            {

                userRecord.map(([key, value]) => (
                    <>
                        <ul key={value.key}>
                            <li>Profile: <img src={value.img} alt="" width={100} height={100} /></li>
                            <li>Name: {value.name}</li>
                            <li>Disignation: {value.esignation}</li>
                        </ul >
                    </>

                ))

            }

        </div >

    )
}

export default UserRecords