import { useState } from "react"


export default function Counter(){

    const [count, setCount] = useState(0);

    function inc(){
        setCount(count+1);
    }

    function dec(){
        setCount(count-1);
    }


    return (
        <div>
            <p>state count button</p>
            <button onClick={inc} data-testid="incBtn">Increment</button>
            <button onClick={dec} data-testid="decBtn">Decrement</button>
            <h1 data-testid="count">{count}</h1>
        </div>
    )

}