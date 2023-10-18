import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

export const Query = () => {
    const call = async () => {
        let data = await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users")
        return data.data

    }
    const { data, status } = useQuery("users", call)
    console.log('data', data)
    return (
        <div>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    {data.map((user) => (
                        <p>{user.name}</p>
                    ))}
                </div>
            )}


        </div>
    )
}
