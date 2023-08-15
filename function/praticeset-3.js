let marks={
  harry:90,
  subham:9,
  lavish:56,
  Monika:4
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of"+Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]])
}

//problem 2
for(let key in marks){
  console.log("the marks of "+key+"are"+marks[key])
}
//problem 3


//problem 4
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))
