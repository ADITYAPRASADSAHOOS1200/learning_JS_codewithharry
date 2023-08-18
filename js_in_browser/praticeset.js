let runagain=true;
const candrive=(age)=>{
    return age>=18?true:false
}
while(runagain){

let age=prompt("enter your age")
age=Number.parseInt(age)
if(age<0){
    console.error("please enter your valid age");
    break;
}

if(candrive(age)){
   alert("yes you can drive")
}
else{
    alert ("you cannot drive")
}

runagain=confirm("do you want to run again")
}//problem 1 and 2 solved and 3



//problem no 4
let number=prompt("enter your number")
number=Number.parseInt(number)

if(number>4){
    location.href="https://www.youtube.com"
}




//problem no 5
let color=prompt("enter your  backgrouncolor")
  document.body.style.background=color










