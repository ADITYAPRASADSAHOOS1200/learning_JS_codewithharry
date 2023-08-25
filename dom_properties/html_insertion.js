let a=document.getElementsByTagName('div')[0]


let div=document.createElement('div');
div.innerHTML='<h1>hello world!</h1>';
a.appendChild(div);
//a.before(div)
// a.prepend(div)
// a.after(div)
// a.replace(div)
let b=document.getElementsByTagName('div')[1]
b.innerHTML=b.innerHTML+"<h2>hello</h2>"
