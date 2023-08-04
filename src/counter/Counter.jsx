import { useEffect, useState } from "react";

function Counter() {
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
  return <div>count {state}</div>;
}

export default Counter;
