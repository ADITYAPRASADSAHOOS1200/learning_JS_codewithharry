let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value1")
    }, 2000);
})


let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value2")

    }, 1000);
})


let p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error (""))
        // resolve("value3") 
    }, 3000);

})


// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("we find some error");
// })




// let promise_all=Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("we find some error");
// })





// let promise_all=Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("we find some error");
// })


// let promise_all=Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("we find some error");
// })


