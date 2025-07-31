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
let balance =1000000;
function buyproduct(product_name){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<products.length; i++)
        {
            if(products[i].name==product_name){
                return resolve(products[i].price)
            }
             reject("no products found");
        }
    });
}
    

function pay(amount){
    return new Promise ((resolve,reject)=>{
        if (amount > balance) {
        return reject("Insufficient balance");
        }
    balance -= amount;
    return resolve("product purchased");

    });

}


buyproduct("iphone")
    .then( (price)=>{
        console.log(price)
        
    })

    pay(price).then((data) => {
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })


