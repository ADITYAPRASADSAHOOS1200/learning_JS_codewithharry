let num=[3,54,1,2,4];
for(let i=0;i<num.length-1;i++){
    console.log(num[i]," ")
}
num.forEach((element) => {
    console.log(element)
});

// Array.form
let name="Aditya"
let arr=Array.from(name)
console.log(arr);

//for of loop//
for (let i of num ) {
    console.log(i);
}
//for in loop// 
for (const i in num) {
    console.log(num[i]);
}