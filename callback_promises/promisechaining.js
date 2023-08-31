

// promise chaining example comment out below  code before using
let p=new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("  resolved after 2 seconds");
      resolve(56)
    }, 2000);
})



p.then((value)=>{
    console.log(value)
    let p2 =new Promise((resolve, reject) => {
       setTimeout(() => {
        alert("promise 2")
        resolve("promise")
       }, 5000);
    })
    return p2;
}).then ((value)=>{
    console.log("we are done");
    return 2;
}).then((value)=>{
    console.log("now we are done");
}) 


// onload script chaining example comment out above code before using




const loadscript=(src)=>{
    return new Promise((resolve,reject) => {
        
  
    let script=document.createElement("script")
     script.src=src;
     document.body.appendChild(script)
     script.onload = ()=>{
          resolve("script has been reloaded")
     }
     script.onerror=()=>{
        reject(0)   }
    })
}

let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
     console.log(value)
},p1.then((value=>{
      console.log("your second script is ready")
})
)).catch((error)=>{
    console.log("we are sorry to loading the script")
}
)
