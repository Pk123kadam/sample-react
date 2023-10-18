import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { context } from './Context'
import StaticExample from './ModalComponent'
import Example from './ModalComponent'

function Data() {
    const { state, dispatch } = useContext(context)

    console.log("state", state)
    useEffect(() => {
        let call = async () => {
            let data = await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users")
            dispatch({ type: "GET", payload: data.data })


        }
        call()
    }, [])
    function handleDelete(id) {
        console.log("kjkl")
        dispatch({ type: "DELETE", payload: id })
        let del = async () => {
            await axios.delete("https://64ccec742eafdcdc851a7719.mockapi.io/users/" + id)

        }
        del()
    }

    return (
        <div>
            sdfsdfsdf

            <table border="1">
                <thead>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>actions</th>
                </thead>
                <tbody>
                    {
                        state?.data?.map((e, i) => {
                            return <>
                                <tr key={e.id}>
                                    <td> {e.name}</td>
                                    <td> {e.email}</td>
                                    <td> {e.phone}</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        handleDelete(e.id)
                                    }}>delete</button></td>
                                    <td><Example id={e}></Example></td>

                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Data
