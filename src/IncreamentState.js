import React, {useState} from "react";

export default function IncreamentState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleIncrease = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);
  };

  const handleDecrease = () => {
    setCount1(count1 - 1);
    setCount2(count2 - 1);
    setCount3(count3 - 1);
  };
  return (
    <>
      <div class="block">
       <h1>IncreamentState</h1>
        <em>
          <p>You clicked {count1} times</p>
          <button onClick = {() => setCount1(count1 + 1)}>+</button>
          <button onClick = {() => setCount1(count1 - 1)}>-</button>
          <p>You clicked {count2} times</p>
          <button onClick = {() => setCount2(count2 + 1)}>+</button>
          <button onClick = {() => setCount2(count2 - 1)}>-</button>
          <p>You clicked {count3} times</p>
          <button onClick = {() => setCount3(count3 + 1)}>+</button>
          <button onClick = {() => setCount3(count3 - 1)}>-</button>
         </em>
         <p></p>
         <button onClick = {handleIncrease}>increase all</button>
          <button onClick = {handleDecrease}>decrease all</button>
      </div>
    </>
  );
}
