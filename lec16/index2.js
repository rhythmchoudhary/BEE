// /* 
// // insert a new element on dom sing javascript
// 1. create a new element for eg: "li" -- > using create element function
// 2. insert content in that element using innertext or innerhtml
// 3. insert that element in parent container using appendchild function

// */
// // let todo ={
// //     id:"1",
// //     title:"study",
// //     status:"pending"
// // }
// let todos = [
//     {
//         id:"1",
//         title:"study",
//         status:"pending"
//     },
//         {
//         id:"2",
//         title:"gym",
//         status:"pending"
//     },
//         {
//         id:"3",
//         title:"ghar chalo",
//         status:"pending"
//     }
// ]
// function showAllTodos(todos)
// {
//     todos.forEach(todo => {
//         addTodo(todo)
//     });

// }
// let ul = document.querySelector("ul");
// function addTodo(todo)
// {
//     let li = document.createElement("li");
//     li.innerHTML = `${todo.title}
//     <button type="submit">🤡</button>`
//     ul.appendChild(li)
    
// }
// // addTodo(todos);
// showAllTodos(todos);










let todos = [
    { id: "1", title: "study", status: "pending" },
    { id: "2", title: "gym", status: "pending" },
    { id: "3", title: "ghar chalo", status: "pending" }
];

let ul = document.querySelector("ul");
let form = document.querySelector("form"); // select your form
let input = document.querySelector(".Details"); // select input field

function addTodo(todo) {
    let li = document.createElement("li");
    li.innerHTML = `${todo.title}
        <button type="button">🤡</button>`;
    ul.appendChild(li);
}

function showAllTodos(todos) {
    todos.forEach(todo => addTodo(todo));
}

showAllTodos(todos);




// listen for form submit
form.addEventListener("submit", function(ev) {
    ev.preventDefault(); // stop page reload

    let task = input.value.trim();

    let newTodo = {
        id: (Math.random()*100000),
        title: task,
        status: "pending"
    };

    todos.push(newTodo);
    addTodo(newTodo);   
    input.value = "";
});
