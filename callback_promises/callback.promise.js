// let a=prompt("what is your name?")
// let b=prompt("what is your age?")
// let c=prompt("what is your favourite color?")
// console.log(a+"is"+b+"years old and has"+c+"favourite color");

// console.log("start");
// setTimeout(function(){
//     console.log("hii,how are you")
// },3000);
// console.log("end"); 


//callbacks
function loadscript(src,callback) {
    let script=document.createElement("script")
    script.src=src;
    script.onload=function(){
     console.log("loaded script with src:"+src)
     callback(null,src);
    }
    script.onerror=function () {
      console.log("error to loadscript"+src);
        callback(new error("src got some error"))
    }


    document.body.appendChild(script);
    
}

function hello(error,src) {
  if(error){
   console.log(error)
   return
  }
  alert("hello world"+src);
}
function goodmorning(error,src) {
   if(error){
      console.log(error);
      return
     }
   alert("good morning"+src);
   
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",goodmorning)