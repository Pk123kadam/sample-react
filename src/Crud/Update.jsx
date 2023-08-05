import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Update() {
    const navigate = useNavigate()
    const [data, Setdata] = useState({})
    const { id } = useParams()
    useEffect(() => {
        let api = async () => {
            let datas = await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users/" + id)
            Setdata(datas.data)
        }
        api()
    }, [])
    function handlechange(e) {
        Setdata({ ...data, [e.target.name]: e.target.value })

    }
    function handlesubmit(e) {
        e.preventDefault()
        let upd = async () => {
            let datas = await axios.put("https://64ccec742eafdcdc851a7719.mockapi.io/users/" + id, data)
            console.log(datas)



        }
        upd()
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>name:</label>
                <input type='text' name='name' value={data && data.name} onChange={handlechange}></input>
                <label>Email:</label>
                <input type='text' name='email' value={data.email} onChange={handlechange}></input>
                <label>Phone:</label>
                <input type='text' name='phone' value={data.phone} onChange={handlechange}></input>

                <button type='submit'>Update</button>
            </form>



        </div>
    )
}

export default Update
