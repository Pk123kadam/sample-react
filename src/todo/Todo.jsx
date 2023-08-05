
import { Button, Container } from '@mui/material'
import React, { useState } from 'react'

function Todo() {
    const [data, Setdata] = useState({})
    const [arr, Setarr] = useState([])
    const [upd, Setupd] = useState(false)
    const [index, Setindex] = useState(0)


    function handleclick(e) {
        Setdata({ ...data, [e.target.name]: e.target.value, completed: false })

    }
    function handlesubmit() {

        Setarr([...arr, data])
        Setdata({
            title: "",
            description: ""
        })
    }
    function handledel(index) {
        let del = arr.filter((e, i) => i != index)
        Setarr(del)

    }
    function handleupdate(obj, index) {
        Setupd(!upd)
        Setindex(index)
        Setdata(obj)


    }
    function handle() {
        Setupd(!upd)
        let update = arr.find((item, ind) => ind == index)

        update.title = data.title
        update.description = data.description
        Setdata(update)
        Setdata({
            title: "",
            description: ""
        })

    }

    function checkfun(index) {
        Setarr(arr.map((e, i) => i == index ? { ...e, completed: !e.completed } : { ...e }))



    }
    return (
        <div>
            <Container>
                title:  <input type='text' name='title' value={data.title} onChange={handleclick}>
                </input>
                description:  <input type='text' name="description" value={data.description} onChange={handleclick}>
                </input>
                {upd ? <Button onClick={handle} variant='contained' color='secondary' sx={{ ml: 1 }}>Update</Button> : <Button onClick={handlesubmit} variant='contained' color='success' sx={{ ml: 1 }}>Add</Button>}


                <table class="table">
                    <thead>
                        <tr><th></th>

                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((e, i) => {
                            return <>
                                <tr key={i}>
                                    <th><input type='checkbox' onClick={() => checkfun(i)}></input></th>
                                    <th style={{ textDecoration: e.completed ? "line-through" : "none" }}>{e.title}</th>
                                    <th style={{ textDecoration: e.completed ? "line-through" : "none" }}>{e.description}</th>
                                    <th><Button variant='contained' color='secondary' onClick={() => handleupdate(e, i)} disabled={upd || e.completed}>Update</Button></th>


                                    <th><Button variant='contained' color='error' onClick={() => handledel(i)} disabled={upd || e.completed}>Delete</Button></th>

                                </tr>
                            </>
                        })}


                    </tbody>
                </table>
            </Container>



        </div>
    )
}

export default Todo
