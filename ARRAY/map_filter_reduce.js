let arr=[45,23,21]
// arr.forEach((elements)=>{
//     console.log(elements)
// })
let a=arr.map((value,index,array)=>{
     console.log(value,index,array)
    return value+index
})
console.log(a)

//array filter
  let a1=[45,23,21,0,3,5]
   let r=a1.filter((value)=>{
    return value <=10;
   })
   console.log(r)


function isBigEnough(value) {
    return value <= 10;
  }
  
  const filtered = [45,23,21,3,5].filter(isBigEnough);
  console.log(filtered);



  //array reduce
  let arr3=[1,2,3,4]
  let newarr3=arr3.reduce((h1,h2)=>{
    return h1*h2;
  })
  console.log(newarr3)

  let n=[1,2,3,4]
  const Reduc=(h1,h2)=>{
     return h1+h2
  }
  let newarr=n.reduce(Reduc);
  console.log(newarr)
 