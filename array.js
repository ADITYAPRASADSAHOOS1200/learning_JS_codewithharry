let marks_class_12 =[91 ,82 ,63 ,84,false,"notpresent"]
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);

console.log(marks_class_12.length,"length")

//update the arry;
marks_class_12[6]=89;//adding a array 
marks_class_12[3]=1000;//updating an array 


console.log(marks_class_12.length,"length")
console.log(marks_class_12)
console.log(typeof(marks_class_12))



var n=marks_class_12.length;
for(let i=0;i<=n;i++){
    console.log(marks_class_12[i],"adi")
}