// Promise is an object which represents eventual conmpletion of an asychronous operation.

let p = new Promise((resolve,reject)=>{
    let age = 20
    if(age>18)
    {   
        resolve("user is allowed to vote")
    }
    else
    {
        reject("user is underage")
    }

})

console.log(p); 
p.then(
    function(data){
        console.log("first")
        console.log(data) 

    },
    function(err){
        console.log("second")
        console.log(err);
    }
)

console.log("end")
// p.then(
//     function(data){
//         console.log("first")
//         console.log(data)
//     }
// )
// .catch(
//     function(err){
//     console.log("second")
//     console.log(err);
//     }
// )
