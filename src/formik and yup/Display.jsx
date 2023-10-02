import React, { useState } from 'react'

function Display({ list, del }) {
    const [index, Setindex] = useState(null)
    const [show, Setshow] = useState(false)
    const [items, Setitems] = useState({})

    function handledel(index) {
        let fil = list.filter((e, i) => i !== index)
        del(fil)

    }
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => {
                        return <>
                            <tr key={index + 1}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td><button className='btn btn-danger' onClick={() => handledel(index)}>Delete</button></td>


                            </tr></>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default Display
