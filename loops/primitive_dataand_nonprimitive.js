let a=null;
let b=345;//number
let c=true;//can also be false
let d=BigInt("567")+BigInt("210")
let e="aditya"
let f=Symbol("i am nice symbol")
let g=undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));



//objects key value pairs

const item={
    name:"aditya",
    id:2022,
    value:789,
    address:"kolkata",
}

item.id=20556//update the value;
console.log(item.id);//we can fetch the value;
console.log(item.value);
console.log(item.address);