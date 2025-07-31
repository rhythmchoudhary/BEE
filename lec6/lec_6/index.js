// function starter(cb)
// {
//     console.log("starter ordered")
//     setTimeout(()=>{
//         console.log("starter served");
//         cb(sweets)
//     },1000)
// }
// function maincourse(cb)
// {
//     console.log("maincourse ordered")
//     setTimeout(()=>{
//         console.log("maincourse served");
//         cb(bill)
//     },3000)
// }
// function sweets(cb)
// {
//     console.log("sweets ordered")
//     setTimeout(()=>{
//         console.log("sweets served");
//         // cb(bill)
//     },1000)
// }
// function bill(cb)
// {
//     console.log("bill is: ")
//     setTimeout(()=>{
//         console.log("bill served");

//     },1000)
// }


function starter(cb)
{
    console.log("starter ordered")
    setTimeout(()=>{
        console.log("starter served");
        cb()
    },1000)
}
function maincourse(cb)
{
    console.log("maincourse ordered")
    setTimeout(()=>{
        console.log("maincourse served");
        cb()
    },3000)
}
function sweets(cb)
{
    console.log("sweets ordered")
    setTimeout(()=>{
        console.log("sweets served");
        cb()
    },1000)
}
function bill()
{
    console.log("bill is: ")
    setTimeout(()=>{
        console.log("bill served");
        
    },1000)
}

starter(function(){
    maincourse(function(){
        sweets(function(){
            bill(function(){
                console.log("finish")
            })
        })
    })
})