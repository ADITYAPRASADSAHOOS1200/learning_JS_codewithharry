window.document.getElementById("google").addEventListener("click",function(){
   window.location="https://www.google.com";
   
})
document.getElementById("facebook").addEventListener("click",function(){
    window.location="https://www.facebook.com"
})

//question 3
//fetch api


let fetchContent=async(url)=>{
    con=await fetch(url);
    let a=await con.json();
    return a;
}
setInterval(async function() {
    let url='https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchContent(url));
}, 3000);


setInterval(async function(){
 window.document.querySelector("#bulb").classList.toggle("bulb")
}, 1000)