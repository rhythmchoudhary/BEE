const fs =require("fs");

fs.readFile("./data.txt", "utf8", function (err, data1) {
    if (err) return console.log("Error reading data.txt:", err);

    fs.readFile("./demo.txt", "utf8", function (err, data2) {
        if (err) return console.log("Error reading demo.txt:", err);

        combinedData = data1+"\n" +data2;

        fs.writeFile("./newdata.txt", combinedData ,function(err){
        if(err) return console.log(err);
        console.log("data written")
        })
    })
})
