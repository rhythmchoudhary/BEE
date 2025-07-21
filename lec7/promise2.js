let users =
[
    {
        id:1,
        name: "rhythm",
        age: 10
    },
    {
        id:2,
        name: "yasoob",
        age: 30
    }
]

function isAllowed(id){
    return new Promise ((resolve,reject)=>{
        let user = null;
        for(let i =0; i<users.length; i++)
        {
            console.log(users[i]);
            if(users[i].id == id)
            {
                user = users[i];
            }
        }
        if(!user) return reject ("no user found")
        if(user.age<18) return reject ("underage")
        resolve("allowed")
            
    }) 
}
isAllowed(2).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)

})