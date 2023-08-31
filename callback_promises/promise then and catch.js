let p1=new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("i am promise and rejected")
        // resolve(true)
        reject(new Error("i am a error"))
    }, 2000);
    
})

let p2=new Promise((resolve, reject) => {
    console.log("promise is fullfilled");
    setTimeout(() => {
        // console.log("i am promise and fulfilled")
      resolve(true);  
    }, 2000);
})
// to get the value and to catch the errors

p2.then((value)=>{
    console.log(value)
})

// p1.catch((error)=>{
//    console.log("some error occured"); 
// })


p1.then(()=>{
   console.log(value);
},(error)=>{
    console.log(error);
})



