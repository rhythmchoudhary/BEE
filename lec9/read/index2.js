const fs = require("fs");

fs.readFile("../data.json", "utf8",function(err,data){
    if(err) return console.log(err);
    // console.log(data);
    let user = JSON.parse(data);
    console.log(user[1]);
});
