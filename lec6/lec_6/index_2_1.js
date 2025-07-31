let products =
[
    {
        id:1,
        name: "iphone",
        price: 100000
    },
    {
        id:2,
        name: "samsung",
        price: 90000
    }
]
let balance = 10000;

function buyproduct(product_name,cb){
    for(let i=0;i<products.length; i++)
    {
        if(products[i].name==product_name){
            return cb(null,products[i].price)
        }
        cb("no products found", null);
    }
}


function pay(amount,cb){
    if (amount > balance) {
        return cb("Insufficient balance", null);
    }
    balance -= amount;
    cb("product purchased", null);
}

buyproduct("iphone", function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("Price: "+data);
    pay(data,function(err, message){
        if(err) return console.log(err);
        console.log(message);
    });
});
