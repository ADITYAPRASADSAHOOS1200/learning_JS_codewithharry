let a="69"
/// write it on your browser console
a=Number.parseInt(a)//converting into a number
console.log(a)

if(a>100){
    console.log("this a valid age")
}
else{
    console.log("this is not a valid age")
}

/// else-if
let age=10
if(age == 16){
    console.log("you are not valid");
}
else if(age>18){
    console.log("you are valid");
}
else if( age<=14 && age>=12){
    console.log("you are a kid ")
}
else{
    console.log("you are not valid age ")
}


///ternary operator

console.log("you can",age<18?"notdrive":"drive");


