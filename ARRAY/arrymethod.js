let num=[1 ,2,3,4,5,6]
let b=num.toString()// it will convert it to string
console.log(b)
let c=num.join("and")//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(c,typeof(c));





let r=num.pop(3,4);//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(r);//it returns the last elment which has been popped out
let num2=[20,30,40,50,60]
num2.push(15)//Appends new elements to the end of an array, and returns the new length of the array.
console.log(num2,num2.length) 
let k=num2.shift();//removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(k)
num2.unshift(34)//nserts new elements at the start of an array, and returns the new length of the array.
console.log(num2)








let n1=[1,2,3,4,5,6,7,8,9]
// delete n1[0]//it will delete the array but not  decrease its size
// console.log(n1,n1.length)
let n2=[11,12,13,14,15,16,17,18,19];
let n3=[2,3,4,5,6,7,8]
n1.concat(n2,n3);//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(n1,n2,n3)





let compare=(a,b)=>{//Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
    return a-b //it
}
let num1=[23,1,2,45,100,4,8,102]
num1.sort(compare);//sorts an array in place.<it sort the array alphabatically> This method mutates the array and returns a reference to the same array.
console.log(num1)

num1.reverse()//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(num1);





let num3=[2,3,4,5,6,7,8,9]
console.log(num3.length)
num3.splice(2,3,1021,1022,1023,1024,1025)//Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
console.log(num3 ,num3.length)


let num4=[23,34,56,23,21,23]
let newNum=num4.slice(1,3)
console.log(newNum);
