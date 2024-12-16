let promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
promise.then(response => response.json().then(data => {
    console.log(data)
})).catch(err => {
    console.log("there was an error")
})
