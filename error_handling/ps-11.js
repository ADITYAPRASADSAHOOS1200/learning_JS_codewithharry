// problem 1and 2
const loadscript=async(src)=>{
    return new Promise((resolve, reject) => {
     let script=document.createElement("script")
      script.src=src;
    script.onload=()=>{
         resolve(src)
      }
      document.head.appendChild(script)
    })
}  
const main1 =async()=>{
let a=await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
 console.log(a);
console.log(new Date());
}
main1()



//problem-3
let p=()=>{
 return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("please this is not acceptable"))
    },3000)
})

}
let  a = async() =>{
    try{
     let d= await p()
     console.log(d);
    }catch(error){
        console.log("this error is handled");
    }
}
a() 

//problem-4

let p1= async()=>{
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
           resolve (1)
        },3000)
    })
}
let p2= async()=>{
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
           resolve (2)
        },2000)
    })
}
let p3= async()=>{
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
           resolve (3)
        },4000)
    })
}


const run=async()=>{
    console.time("run")
    let a1= p1()
   
    let a2= p2()
    
    let a3= p3()

    let main3=await Promise.all([a1,a2,a3])
    console.log(main3)
    
    console.timeEnd("run")
}
run()