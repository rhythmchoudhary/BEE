const form = document.querySelector(".addform");
const titleInput = document.querySelector(".Todotitle");
const body = document.querySelector(".body");

console.log(form);
console.log(titleInput);

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let title = titleInput.value;
    console.log(title);

    form.reset();
})
body.addEventListener("click", function(ev){
    console.log(ev.target);
    let classname = ev.target.classList;
    if(classname.contains(delete)){
        console.log(ev.target)
    }
})