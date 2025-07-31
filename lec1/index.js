console.log("hello world")
function delay()
{
    let currtime = new Date().getTime()
    while(new Date().getTime()- currtime <4000)
    {

    }
    console.log("delay done")

}

setTimeout(delay,0)

console.log("bye")

function sum (a,b)
{
    console.log(a+b)
}

sum(2,3)
sum(11,5)
console.log("rhythm")



// create a function which return a promise to multiply two number 
// a and b if a<10

function mul (a,b){
    return new Promise((resolve,reject)=>{
        if(a>10) {
            resolve(a*b)
        }
        else{
            reject("a is less than 10")
        }
    })
}
// promise will run before setTimeout
mul(5,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


// QUESTION BASED ON THE TOPIC DISCUSSED ABOVE

// WHAT IS NODE JS
// DIFF B/W NODE JS AND BROWSER
// DIFF B/W SYNCHRONOUS AND ASYNCHRONOUS CODE
// WHAT IS EVENT LOOP IN JS
// WHAT IS MICROTASK QUEUE










