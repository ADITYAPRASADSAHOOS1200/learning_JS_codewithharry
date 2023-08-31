

// let age=prompt("what is your age"):age will only work on browser
let age=9
if(age>10 && age<20){
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your  age doen,t lies between 10 and 20");
}


//practice-2
const age1=45;
switch (age1){
    case 12:
        console.log("your age is 12")
        break;
    case 13:
        console.log("your age is 13")
        break;
    case 14:
        console.log("your age is 14")
        break;
    case 15:
        console.log("your age is 15")
        break;
    case 16:
        console.log("your age is 16")
        break;
    case 17:
        console.log("your age is 17");
        break;
    default:
        console.log("your age is not special");

}

//problem-3

let num=12;
if(num % 2 == 0 && num % 3 == 0){
    console.log("your number is divisible by 2 and 3")

}
else{
    console.log("your number is not divisibe by 2 and 3")
}

//problem-4
let number=8;
if(number % 2 == 0 || number % 3 == 0){
    console.log("your number is divisible by 2 and 3")

}
else{
    console.log("your number is not divisibe by 2 and 3")
}
//problem-5
let num1=19;
 console.log(num1>18?'you can drive':'you cannot drive')