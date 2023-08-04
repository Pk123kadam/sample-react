import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [start, Setstart] = useState(false);
  const [count, Setcount] = useState(0);
  const [min, Setmin] = useState(0);
  const [hr, Sethr] = useState(0);
  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        Setcount(count + 1);
      }, 1000  );

      if (count > 59) {
        Setmin(min + 1);
        Setcount(0);
      }
      if (min > 59  ) {
        Sethr(hr + 1);
        Setmin(0);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [start, count, hr, min]);
  return (
    <div>
      <button
        onClick={() => {
          Setstart(!start);
        }}
      >
        {start ? "stop" : "start"}
      </button>
      {hr > 9 ? hr : "0" + hr}: {min > 9 ? min : "0" + min}: {count > 9 ? count : "0" + count}
      <button
        onClick={() => {
          Setcount(0);
          Setmin(0);
          Sethr (0);
          if (start) {
            Setstart(!start); 
          }
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
