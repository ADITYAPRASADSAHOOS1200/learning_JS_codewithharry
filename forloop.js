let n=3
let sum=0
for(var i=1;i<n;i++){
   sum=sum+(i+1);
 
}
console.log(sum)


//for in loop

// access to key
let obj={
 aditya:34,
 rishi:45,
 parag:12,
 bimal:50,
 biswajit:10,

}
for(let a in obj){
    console.log("marks of"+a+"are"+obj[a])
}


//f0r of loop

for(let b of "aditya"){
    console.log(b)
}