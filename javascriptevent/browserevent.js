let a=document.getElementsByClassName("container")[0];
a.onclick=()=>{
    let b=document.getElementsByClassName("container")[0];
    b.innerHTML="helloworld!"
    alert("you clicked the button to change it helloworld")
}