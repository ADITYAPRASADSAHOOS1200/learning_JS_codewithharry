
let x=function(event){
   console.log(event.target);
   console.log(event.type,event.clientX,event.clientY);

   alert("hello world1")
}
let y=function(e){
   alert("hello world2")
}




btn.addEventListener('click',x)
 
btn.addEventListener('click',y)


let a=prompt("what is your favourite number?");
if(a == "2"){
    btn.removeEventListener('click',y2);
}

