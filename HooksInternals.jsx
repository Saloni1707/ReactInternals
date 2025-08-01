//useEffect
import {use, useEffect} from 'react';

useEffect(() => {
    //effect logic
    console.log("Mount or value change detected");
    return() => {
        console.log("Cleanup on unmount or value change");

    }

},[value]);

//1. ComponentDidMount -> runs once after the component mounts
//2. ComponentDidUpdate -> runs after every render if the value changes
//3. ComponentWillUnmount -> runs when the component is about to unmount

useEffect(() => { //runs on mount 
    console.log("Component mounted or value changed");
},[]); //empty array means it runs once after the initial render

//4. Cleanup function -> runs before the component unmounts or before the effect runs again
useEffect(() => {
    console.log("Effect logic runs");
    return() => {
        console.log("Cleanup logic runs before next effect or unmount");
    }
},[])

//5. Dependency array -> Runs after the component mounts or first render and any time the count/value changes

useEffect(() => {
    console.log("Effect runs on mount or when value changes");
},[count]);

//6. No dependency array -> Runs after every render
useEffect(() => {
    console.log("Effect runs after every render");
});

//eg ->

useEffect(() => {
    const handler = () => console.log("Window resized");
    window.addEventListener("resize",handler);
    return () => {
        window.removeEventListener("resize",handler);
    }
},[])

function App(){
    const [count,setCount] = useState(0);
    console.log("App rendered");
    useEffect(()=>{
        console.log("Count changed to:",count);
    },[count]);

    return <button onClick={() => setCount(c => c+1)}>clickme</button>
}

