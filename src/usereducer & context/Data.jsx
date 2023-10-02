import React, { useContext, useEffect, useState } from 'react'
import { context } from './Provide'
import axios from 'axios'

function Data() {

    const { state, dispatch } = useContext(context)


    useEffect(() => {
        let call = async () => {
            let data = await axios.get('https://64ccec742eafdcdc851a7719.mockapi.io/users')

            dispatch({
                type: "GET", payload: data.data
            })
        }
        call()
    }, [])

    const handledelete = (id) => {

        dispatch({ type: "DELETE", payload: id })
        let del = async () => {
            await axios.delete('https://64ccec742eafdcdc851a7719.mockapi.io/users/' + id)

        }
        del()
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state?.todo?.map((e, i) => {
                        return <tr key={i + 1}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td><button className='btn btn-danger' onClick={() => handledelete(e.id)}>Delete</button></td>
                        </tr>
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Data