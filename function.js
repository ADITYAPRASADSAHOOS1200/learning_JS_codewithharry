let a=1;
let b=1;
let c=3;
function binod() {
    console.log("average of a and b is",(a+b)/2)
console.log("average of b and c is",(b+c)/2)
console.log("average of a and c is",(a+c)/2)
console.log("average of x and y is",oneplus(a,c))
}
binod();

function oneplus(x,y){
    console.log('done')
    return    Math.round(1+(x+y)/2)
}



const sum=(p,q)=>{//arrow function
    return p+q
}
console.log(sum(5,7));


const hello=()=>{
     console.log("hey how are you !")
     return  'hi'
}

hello();







