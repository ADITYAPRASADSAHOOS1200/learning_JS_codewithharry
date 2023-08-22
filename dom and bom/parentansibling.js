console.log(document.body.firstChild);
let a=document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);



console.log(document.documentElement.parentNode);//it will return document
console.log(document.documentElement.parentElement);//if the parent is an element then it will return element otherwise it  return null


console.log(a.firstChild.nextSibling);