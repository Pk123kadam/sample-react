import { useEffect, useState } from "react";

function Counter() {
  const [state, setstate] = useState(60);
  const [min, setmin] = useState(59);
  const [hr, sethr] = useState(12);
    const [day, setday] = useState(10);
  
  useEffect(() => {
   
  
    let myinterval = setInterval(() => {
      setstate(state - 1);
      if (state < 1) {
        setstate(0);
        setmin(min-1)
      }
      if (min < 1) {
        setmin(0);
        sethr(hr-1)
      }
      if (hr < 1) {
        sethr(0);
        setday(day-1)
      }
      if(day < 1){
        setday(0)
      }
    },1000);
   
   
    return () => {  
      clearInterval(myinterval);  
    };
  }, [state,min,hr,day]);
  return <div> {day < 10 ? "0" + day : day} : {hr < 10 ? "0" + hr : hr} :  
   {min < 10 ? "0" + min : min} : {state < 10 ? "0" + state : state}



  
  </div>;
}

export default Counter;
