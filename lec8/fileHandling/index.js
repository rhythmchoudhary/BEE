const fs =require("fs");
// const fs =require("fs").promises;
// const { unlink } = require('node:fs/promises');
// console.log(fs);


// write the data into file if file is not created then it will create one
fs.writeFile("./data.txt", "hello world",function(err){
    if(err) return console.log(err);
    console.log("data written")
})
// // update data
// // fs.writeFile("./data.txt", "hi", function(err){
// //     if(err) return console.log(err);
// //     console.log("data updated");
// // })

// read File
fs.readFile("./data.txt", function(err,data){
    if(err) return console.log(err);
        console.log(data);
})





