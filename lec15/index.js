let changeColorBtn = document.querySelector(".changeColorBtn"); 
let stopColorChange = document.querySelector(".stopColorChange")
let body = document.querySelector("body");

let colors =["red", "green","blue", "purple", "lime", "cyan", "grey", "orange"]

// setTimeout(()=>{
//     changeColor();
// },1000)


let id = null; // for storing interval id globally

changeColorBtn.addEventListener("click", function() {
    if (id === null) { // prevent multiple intervals
        id = setInterval(() => {
            changeColor();
        }, 500);
    }
});
stopColorChange.addEventListener("click", function() {
    if (id !== null) {
        clearInterval(id);
        id = null;
    }
});
function changeColor() {
    let index = Math.floor(Math.random() * colors.length);
    console.log(index);
    body.style.background = colors[index];
}
