document.write("hello")
let a=setTimeout(function () {
  alert("i am inside time out ")
},3000)


   let b=prompt("you want  to run the time out?")
   if("no"==b){
    clearTimeout(a);
   }
 
 console.log(a);

 const sum=(a,b,c)=>{
    console.log("yes i am running "+(a+b)/2);
 }
//  setTimeout(sum , 1000 , 3 , 2, 3)

 setInterval(function(){
    //yesconsole.log( new Date().toLocaleTimeString());
    // console.log(sum());
 },1000);