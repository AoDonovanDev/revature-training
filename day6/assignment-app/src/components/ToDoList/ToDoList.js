import { useState } from "react"

export default function ToDoList(){

    const [todos, setTodos] = useState(new Array())
    const [input, setInput] = useState("");


    function handleChange(e){
        setInput(e.target.value);
    }

    function handleClick(){
        console.log(todos)
        const newTodos = todos;
        console.log(newTodos)
       
    }

    return (
        <div>
            <h3>To Do List</h3>
            <form action="">
                <input type="text" name="input" onChange={handleChange} value={input}/>
                <button type="button" onClick={handleClick}>add</button>
            </form>
        </div>
    )
}