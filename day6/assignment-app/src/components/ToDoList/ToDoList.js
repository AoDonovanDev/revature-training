import { useState } from "react"
import ToDoInput from "./components/ToDoInput";
import NewToDoBtn from "./components/NewToDoBtn";
import List from "./components/List";

export default function ToDoList(){

    const [todos, setTodos] = useState(new Array())
    const [input, setInput] = useState("");


    function handleChange(e){
        setInput(e.target.value);
    }

    function handleClick(){
        todos.push(input);
        setTodos([...todos])
        setInput("");
       
    }

    return (
        <div>
            <h3>To Do List</h3>
            <form action="">
                <ToDoInput handleChange={handleChange} input={input}/>
                <NewToDoBtn handleClick={handleClick}/>
            </form>
            <List todos={todos}/>
        </div>
    )
}