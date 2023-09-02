try{
    console.log(aditya);
    throw new ReferenceError("Sthiti is not good")
}catch (error){
    console.log(error.name);
    console.log(error.message);
}


try{

 let age=prompt("enter your age");
 age=Number.parseInt(age);
 if(age<18||age>120){
   throw new Error("this age is not probably true")
 }
} catch (error){
         console.log(error.name);
         console.log(error.message);
         console.log(error.stack);
}
console.log("the script is running");