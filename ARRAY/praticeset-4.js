//problem 1

// let arr=[1,2,3,4,5,6,7,83]
// let a=prompt("enter a number")
// a=Number .parseInt(a)
// arr.push(a)
// console.log(arr)
// let arr;
// let a;
// do{
//      arr=[1,2,3,4,5,6,7,83]
//       a=prompt("enter a number")
//      a=Number .parseInt(a)
//     arr.push(a)
//      console.log(arr)
// }while(a!=0);

//pratice problem 3
let a=[30,40,50,60,8,9]
const div=(x)=>{
     return x%10 == 0;
}
let arr=a.filter(div)
console.log(arr)

//pratice problem 4
let n=[30,40,50,60,8,9]
let r= n.map((x)=>{
    return x*x;
})
console.log(r)
//pratice problem 5
let x=[3,4,5]
let s= x.reduce((x1,x2)=>{
    return x1 * x2;
})
console.log(s)