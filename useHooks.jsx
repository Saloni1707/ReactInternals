import "./App.css";
import { useCallback, useMemo, useRef } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("rendering");

  useEffect(() => {
    console.log("count changed:", count);
    return() => {
      console.log("cleanup");
    }
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>Click {count} </button>;
}


useEffect(() => {
  console.log("runs asynchronously after paint");
},[])

//2.We use useLayoutEffect to mutate the DOM before it is painted to the screen.
useLayoutEffect(() => {
  console.log("runs synchronously before paint");
  const width = divRef.current.getBoundingClientRect();
  console.log(width);
},[])

//3.Closure Traps -> happens when we use stale values so use the functional update form or useRef to avoid this.

const countRef = useRef(0);
useEffect(() => {
  const id = setInterval(() => {
    countRef.current+=1;
    setCount(countRef.current);
  },1000);
})

//4. UseMemo -> useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed.
//This optimization helps to avoid expensive calculations on every render.
//Eg ->
const memoizedValue = useMemo(() => computeExpensiveValue(a,b),[a,b]); //if a/b changes then calc again else the prev cached value is returned.


//5.useCallback ->It memoizes the function so that they dont get recreated on every render.
<MyButton onClick={()=> console.log("Clicked")}/> //every render a new function created

const handleClick = useCallback(() => {
  console.log("Clicked");
},[]);

<MyButton onClick={handleClick}/>


