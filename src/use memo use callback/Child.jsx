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
            <button onClick={() => setData({ ...data, name: `${data.name} kadam` })}>name</button>
            <button onClick={() => setData({
                ...data, stack: { ...data.stack, frontend: [...data.stack.frontend, "html"] }
            })}>stack</button>
            <button onClick={() => setData({
                ...data, company: [...data.company, { company4: "nimap4" }]
            })}>company</button>

        </>
    );
}

export default memo(Child)