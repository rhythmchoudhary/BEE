// date : 9/7/2025
// topic event loop
const fs = require("fs");
console.log("start");
setImmediate(()=> {
    console.log("immediate 1")
})
setTimeout(()=> {
    console.log("timer 1")
},0)

fs.readFile("demo.txt", "utf-8",(err,data)=>{
    if(err) return console.log(err);
    console.log(data);

    setTimeout(()=>{
        console.log("timer 2")
    })
    setImmediate(()=>{
        console.log("immediate 2")
    })
    process.nextTick(()=>{
    console.log("next tick 2")
    })

})

function mul (a,b){
    return new Promise((resolve,reject)=>{
        if(a>10) {
            setTimeout(()=>{
                resolve(a*b)
            },0)
            
        }
        else{
            reject("a is less than 10")
        }
    })
}
// promise will returnrun before setTimeout
mul(11,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next tick 2")
})
function fun (){
    console.log("fun");
}



// output of the code
    // start
    // next tick 2
    // timer 1
    // 66
    // immediate 1
    // dgfhjvbkn
    // next tick 2
    // immediate 2
    // timer 2