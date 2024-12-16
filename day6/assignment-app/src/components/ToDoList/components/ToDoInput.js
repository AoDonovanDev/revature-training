
export default function ToDoInput({ handleChange, input }){
    return (
        <input type="text" name="input" onChange={(e)=>handleChange(e)} value={input}/>
    )
}