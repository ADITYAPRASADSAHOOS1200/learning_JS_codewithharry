alert("hello! your code works")
let a=prompt("enter the value of a","578")
a=Number.parseInt(a)
document.write(a)
alert("you have a of type"+(typeof a))
let write=confirm("do you want to write on a page")
if(write){
    document.write(a);
}
else{
    document.write("please! allow me to write")
}