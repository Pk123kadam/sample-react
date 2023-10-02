import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState({
        name: "prathamesh",
        stack: {
            frontend: ["react js", "angular"],
            backend: ["java", "node"]
        },
        company: [
            { company1: "nimap1" },
            { company2: "nimap2" },
            { company3: "nimap3" },
        ]

    })
    console.log(data)

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>

            {/* <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div> */}
            name : {data.name}<br></br>
            frontend: {
                data.stack.frontend.map((e) => e + " ")
            }<br></br>
            backend: {
                data.stack.backend.map((e) => e + " ")
            }
            {/* company:{
                data.company
            } */}<br></br>

            <Child todos={todos} addTodo={addTodo} data={data} setData={setData} />
        </>
    );
}


export default Parent