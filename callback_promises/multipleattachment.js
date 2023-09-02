let p1=new Promise((resolve, reject) => {
    
    setTimeout(() => {
    alert("hey i am not resolved")
       resolve(); 
    },2000);
})


p1.then(()=>{
    console.log("huray")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(4) 
     
      }, 6000);
    }).then((value)=>{
        console.log(value)
    })
})
p1.then(()=>{
console.log("congrajulation this promise is now resolved");
})
