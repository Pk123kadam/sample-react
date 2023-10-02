import React, { memo, useEffect } from 'react'

function Child({ todos, addTodo, data, setData }) {
    console.log("child render");
    return (
        <>
            {/* <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button> */}
<<<<<<< HEAD
            <button onClick={() => setData({ ...data, name: `${data.name} kadam` })}>name</button>
            <button onClick={() => setData({
                ...data, stack: { ...data.stack, frontend: [...data.stack.frontend, "html"] }
            })}>stack</button>
            <button onClick={() => setData({
                ...data, company: [...data.company, { company4: "nimap4" }]

            })}>company</button>
=======
            <button onClick={() => setData({ ...data, name: "prathamesh kadam" })}>name</button>
            <button onClick={() => setData({
                ...data, stack: { ...data.stack, frontend: [...data.stack.frontend, "html"] }
            })}>stack</button>
            <button onClick={() => setData({ ...data, company: { ...data.company, name: { ...data.company.name, company4: "company4" } } })}>company</button>

>>>>>>> 0ae1d8f6893a440167520be0a2604c628aed0366

        </>
    );
}

export default memo(Child)