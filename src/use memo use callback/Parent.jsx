import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState({
        name: "prathamesh",
        stack: {
<<<<<<< HEAD
            frontend: ["react js", "angular"],
            backend: ["java", "node"]
        },
        company: [
            { company1: "nimap1" },
            { company2: "nimap2" },
            { company3: "nimap3" },
        ]

=======
            frontend: ["react", "html", "css"],
            backend: ["node", "java"]
        },
        company: {
            name: {
                company1: "nimap1",
                company2: "nimap2",
                company3: "nimap3"
            }
        }
>>>>>>> 0ae1d8f6893a440167520be0a2604c628aed0366
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
<<<<<<< HEAD

=======
            name:{data.name}<br></br>
            frontend: {
                data.stack.frontend.map((e) => e + " ")
            }<br></br>
            company:{data.company.name.company1}<br></br>
            {data.company.name.company2}<br></br>
            {data.company.name.company3}<br></br>
            {data.company.name?.company4}
            <Child todos={todos} addTodo={addTodo} data={data} setData={setData} />
>>>>>>> 0ae1d8f6893a440167520be0a2604c628aed0366
            {/* <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div> */}
<<<<<<< HEAD
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
=======
>>>>>>> 0ae1d8f6893a440167520be0a2604c628aed0366
        </>
    );
}


export default Parent