import { CounterItem } from "./CounterItem";
import { useState } from "react";

export const CounterList = () => {
  const [count1, setCount1] = useState(0);
  const increment1 = () => setCount1((c) => c + 1);
  const [count2, setCount2] = useState(0);
  const increment2 = () => setCount2((c) => c + 1);

  return (
    <>
      <button onClick={increment1}>
        <CounterItem count={count1} label="左" />
      </button>
      <button onClick={increment2}>
        <CounterItem count={count2} label="右" />
      </button>
    </>
  );
};
