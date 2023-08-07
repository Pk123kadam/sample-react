import "./App.css";
import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Counter from "./counter/Counter";
import Event from "./events/Events";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toggle from "./toggle/Toggle";
import Ref from "./ref/Ref";
import Protected from "./login form/Protected";
import Navbar from "./login form/Navbar";

import { Suspense, useState } from "react";

import Crud from "./Crud/Crud";
import Add from "./Crud/Add";
import Update from "./Crud/Update";
import Todo from "./todo/Todo";
import Formik from "./formik and yup/Formikk";
import Formikk from "./formik and yup/Formikk";
import Display from "./formik and yup/Display";


function App() {
  const [state, setstate] = useState(false)
  // const Lazycomponent = React.lazy(() => import("./lazy loader/Lazy"))
  const Home = React.lazy(() => import("./login form/Home"))
  const Login = React.lazy(() => import("./login form/Login"))
  const Dash = React.lazy(() => import("./login form/Dashboard"))
  return (
    <>
      {/* <Counter></Counter> */}

      {/* <Stopwatch></Stopwatch>  */}
      {/* <Event></Event> */}
      {/* <Toggle></Toggle> */}
      {/* <Ref></Ref> */}
      {/* <BrowserRouter>
        <Navbar state={state}></Navbar>
        <Suspense fallback={<div>loading....</div>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/dash" element={<Protected islogged={state}>
              <Dash></Dash>
            </Protected>} />
            <Route path="/login" element={<Login action={setstate} state={state}></Login>}></Route>

          </Routes>
        </Suspense>
      </BrowserRouter> */}


      {/* <BrowserRouter>
 
     <Routes>
     <Route path="/" element={<Crud></Crud>}/>
      <Route path="/add" element={<Add></Add>}/>
      <Route path="/update/:id" element={<Update></Update>}/>

    </Routes></BrowserRouter>
   
     */}
      {/* <Suspense fallback={<div>loading....</div>}>
        <Lazycomponent></Lazycomponent>
      </Suspense> */}
      {/* <Todo></Todo> */}


      {/* formik */}
      <Formikk> </Formikk>








    </>
  );
}

export default App;
