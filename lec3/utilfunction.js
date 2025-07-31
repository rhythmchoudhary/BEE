function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}


console.log("util",module.exports);
module.exports.add = add; // addition = key; add2 = key
module.exports.sub= sub; 
module.exports.mul= mul; 
console.log("util",module.exports) 