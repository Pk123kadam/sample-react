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
import Page from "./module css/Page";
import Homes from "./module css/Homes";
import Useform from "./use form/Useform";
import RouteNav from "./routing/RouteNav";
import Comp1 from "./routing/Comp1";
import Clean from "./clean/Clean";
import Error from "./error boundary/Error";
import ErrorBoundary from "./error boundary/ErrorBoundary";
import Child from "./child to parent/Child";
import Parent from "./use memo use callback/Parent";
import Reducer from "./reducer/Reducer";
import Custom from "./custom hooks/Home";
import CustomButton from "./mui/components/customButton";
import Privateroute from "./Route/Privateroute";
import Example from "./Route/Example";
import Loginn from "./Route/Login";
import Sample from "./Form/Sample";
import Click from "./hoc/Click";
import Hover from "./hoc/Hover";
import Pagination from "./Pagination/Pagination";




function App() {
  const [state, setstate] = useState(false)

  // const Lazycomponent = React.lazy(() => import("./lazy loader/Lazy"))
  const Home = React.lazy(() => import("./login form/Home"))
  const Login = React.lazy(() => import("./login form/Login"))
  const Dash = React.lazy(() => import("./login form/Dashboard"))



  return (
    <>
      {/* <Counter></Counter> */}

      {/* <Stopwatch></Stopwatch> */}
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
      {/* <Formikk> </Formikk> */}
      {/* module */}
      {/* <Page></Page>
      <Homes></Homes> */}
      {/* <Useform></Useform> */}


      {/* <BrowserRouter>
        <RouteNav></RouteNav>
        <Routes>
          <Route path="/" element={<Comp1></Comp1>} />
            <Route path="/" element={<Comp1></Comp1>} />
            <Route path="/" element={<Comp1></Comp1>} />

        </Routes>
      </BrowserRouter> */}
      {/* <Clean></Clean> */}
      {/* <ErrorBoundary>
        <Error message={""}></Error>
      </ErrorBoundary> */}
      {/* <Child></Child> */}


      {/* <Parent></Parent> */}
      {/* <Reducer></Reducer> */}
      {/* <Custom></Custom> */}

      {/* <CustomButton>this is a custom button</CustomButton> */}
      {/* <BrowserRouter>

        <Routes>
          <Route path="/home" element={
            <Privateroute >
              <Example></Example>

            </Privateroute>
          }>

          </Route>
          <Route path="/login" element={<Loginn ></Loginn>}></Route>
        </Routes>
      </BrowserRouter> */}
      <Sample></Sample>
      {/* <Click></Click>
      <Hover></Hover> */}
      <Pagination></Pagination>
    </>
  );
}

export default App;
