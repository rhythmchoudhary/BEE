const fs = require("fs");
const {myread,mywrite} = require("../task/IO/io.js");

// asynchronous code
// fs.readFile("./data2.json", "utf8", function(err, data1) {
//     if (err) return console.log(err);
//     let user1 = JSON.parse(data1);

//     fs.readFile("./data3.json", "utf8", function(err, data2) {
//         if (err) return console.log(err);
//         let user2 = JSON.parse(data2);
//         // console.log(user1);
//         // console.log(user2);

//         // spread operator
//         // console.log(...user1);
//         // let allusers = [...user1, ...user2] // three dots --> spread operators its spreads all the elements of the array and then they can be accessed
//         // console.log(allusers);
//         let allusers = (user1).concat(user2); // concatination
//         fs.writeFile("./newdata.json", JSON.stringify(allusers), function(err) {
//             if (err) return console.log(err);
//             console.log("data written");

//         });
//     });
// });




// synchronous code
// let data_1= fs.readFileSync("./data2.json", "utf8");
// let data_2= fs.readFileSync("./data3.json", "utf8");
// let user1 = JSON.parse(data_1);
// let user2 = JSON.parse(data_2);
// let allusers = [...user1, ...user2];
// try{
//     fs.writeFileSync("./syncAllUsers.json", JSON.stringify(allusers));
//     console.log("task done");
// }
// catch(error){
//     console.log(err);
// }
// fs.writeFileSync("./newdata.json", JSON.stringify(allusers), function(err,data){
//         if(err) return console.log(err);
//     console.log("user data written");
// })








async function task() {
    try{
        let data1= await myread("./data2.json");
        let data2= await myread("./data3.json");
        let res = [...data1, ...data2];
        let message = await mywrite("../newdata.json",res);
        console.log (message);


    }
    catch(error){
        console.log(error);
    }
}
task();