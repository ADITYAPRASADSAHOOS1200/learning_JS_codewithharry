
let promise=new Promise((resolve, reject) => {
    alert("hello")
    resolve(56)
})
console.log("hello is one")


setTimeout(function()  {
    console.log("my name is hello2");
},3000);

console.log("hello is three")
console.log(promise);