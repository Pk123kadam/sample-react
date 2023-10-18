import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Debounce() {
    const [data, setData] = useState([])
    const [fil, setFil] = useState([])
    const [value, setValue] = useState()
    useEffect(() => {
        let call = async () => {
            let data = await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users")
            setData(data.data)
        }
        call()
    }, [])
    function handleChange(e) {
        setValue(e.target.value)
    }
    useEffect(() => {
        let timeout = setTimeout(() => {
            let newarr = [...data]
            let filtered = newarr.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            setFil(filtered)
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [value])


    return (
        <div>
            <input type='text' placeholder='search names' onChange={(e) => handleChange(e)}></input>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {fil.length == 0 ?
                        data.map((e, i) => {
                            return <tr key={i + 1}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                            </tr>
                        }) : fil.map((e, i) => {
                            return <tr key={i + 1}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default Debounce