const root = document.getElementById("root");

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    const elementList = data.map(d => {
        const { name, username, email, phone, website } = d;
        return cardFactory({name, username, email, phone, website});
    })


    for(let el of elementList){
        root.append(el)
    }
}

fetchData();

function cardFactory(obj){
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "1fr 1fr";
    grid.classList.add("grid");
    const keys = Object.keys(obj);
    for(let key of keys){
        const field = document.createElement("p");
        field.textContent = `${key}: `;
        const value = document.createElement("p");
        value.textContent = obj[key];
        field.classList.add("grid-item");
        value.classList.add("grid-item");
        grid.append(field);
        grid.append(value)
    }
    console.log(grid)
    return grid;
}