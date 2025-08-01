//1.JSX & Virtual DOM
import React from "react";
//2.JSX is not HTML it's syntactic sugar for React.createElement
const element = <h1 className="greet">Hello</h1>
// it compiles to this over here
const element1 = React.createElement(
    "h1",
    {className: "greet"},
    "Hello"
);
const name = "Kehlani";
return <p>Hello,{name}</p> //wrap the JSX in a return statement

//3. Components 

function Counter(){
    const[count,setCount] = useState(0);
    return<button onClick={() => setCount(count+1)}>{count}</button>
}

//1. User Interaction -> User clicks the button it triggers the onClick which calls the setCount(count+1)
//2. State update-> setCount schedules a state update
//3. Re-render-> React calls the Counter func again to get the new JSX tree based on updated state
//4. Virtual DOM Tree -> the returned JSX is turned into a new VDOM via React.createElement
//5. Reconciliation-> React compares the old VDOM and new VDOM using the Fiber algo
//6. Mutation plan-> Based on the diff say count changes from "0" to "1",React builds a mutation plan
//7. Commit Phase-> DOM updates are flushed

// VDOM is the intermediate computation layer -> the actual DOM mutations happen during the final commit phase of fiber

// React Fiber is a reimplementation of the core rendering engine.
// It replaces React’s old recursive diffing algorithm with a tree-like data 
// structure that enables interruptible and prioritized rendering. 
// Fiber lets React pause work, reuse work, and better handle asynchronous 
// updates, enabling features like concurrent rendering and time slicing.

