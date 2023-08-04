import "./App.css";
import Stopwatch from "./Stopwatch/Stopwatch";
import Counter from "./counter/Counter";
import Event from "./events/Events";

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Toggle from "./toggle/Toggle";
import Ref from "./ref/Ref";
import Protected from "./login form/Protected";
import Navbar from "./login form/Navbar";
import Dashboard from "./login form/Dashboard";
import { useState } from "react";
import Login from "./login form/Login";
import Home from "./login form/Home";
import Crud from "./Crud/Crud";
import Add from "./Crud/Add";
import Update from "./Crud/Update";


function App() {
  const[state,setstate] = useState(false)
  return (
    <>
      {/* <Counter></Counter> */}

      {/* <Stopwatch></Stopwatch>  */}
      {/* <Event></Event> */}
      {/* <Toggle></Toggle> */}
      {/* <Ref></Ref> */}
      {/* <BrowserRouter>
      <Navbar state = {state}></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
       <Route path="/dash" element={<Protected islogged={state}>
        <Dashboard></Dashboard>
       </Protected>}/>
       <Route path="/login" element={<Login action={setstate} state={state}></Login>}></Route>
       
      </Routes>
     </BrowserRouter> */}
  
     <BrowserRouter>
 
     <Routes>
     <Route path="/" element={<Crud></Crud>}/>
      <Route path="/add" element={<Add></Add>}/>
      <Route path="/update/:id" element={<Update></Update>}/>

    </Routes></BrowserRouter>
   
    
    
    </>
  );
}

export default App;
