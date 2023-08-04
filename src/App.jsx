import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState(10);
  useEffect(() => {
    if (state < 1) {
      setstate(0);
    }
    let myinterval = setInterval(() => {
      setstate(state - 1);
    }, 1000);
    return () => {
      clearInterval(myinterval);
    };
  }, [state]);
  return <>count {state} </>;
}

export default App;
