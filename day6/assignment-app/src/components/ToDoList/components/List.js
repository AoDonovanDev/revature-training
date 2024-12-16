export default function List({todos}){
    return (
        todos.map((td, i) => <li key={i}>{td}</li>)
    )
}