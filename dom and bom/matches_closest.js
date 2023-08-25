let a=document.getElementById("id1")
console.log(a);
let b=document.getElementById("id2")
console.log(b);

console.log(a.matches(".box"))
console.log(b.matches(".box"))
let sp1=document.getElementById("sp1")
console.log(sp1.closest("#sp1"));

console.log(a.contains(sp1));