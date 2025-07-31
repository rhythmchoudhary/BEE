const fs = require("fs");
let user =
[
    {
        id: 1,
        name: "rhythm",
        email: "rhythm@gmail.com",
        address: "delhi",
        password: "1234"
    },
    {
        id: 2,
        name: "yasoob",
        email: "yasoob@gmail.com",
        address: "kashmir",
        password: "6789"        
    }
]

// fs.writeFile("./data.txt", user.toString() ,function(err){
//     if(err) return console.log(err);
//     console.log("user data written");
// });



// two functions --> json.parse & json.stringify

fs.writeFile("./data.json", JSON.stringify(user), function(err){
    if(err) return console.log(err);
    console.log("user data written");
});

