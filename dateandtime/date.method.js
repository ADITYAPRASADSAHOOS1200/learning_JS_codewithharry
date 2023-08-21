
//how to get indiviual date

let currdate=new Date();
console.log(currdate.getFullYear())
console.log(currdate.getMonth())
console.log(currdate.getDate())//0-11 jan to dec
console.log(currdate.getDay())

//how to set indiviual date

let b=new Date();
let set=b.setFullYear(2023,7,21);
 console.log(set)
// console.log(b.setMonth(7))
// console.log(b.setDate(21))


//how to get indiviual time method
let  c=new Date();
console.log(c.getHours())
console.log(c.getMinutes())
console.log(c.getSeconds())
console.log(c.getMilliseconds())

let f=new Date();
console.log(f.setHours())
console.log(f.setMinutes())
console.log(f.setSeconds())
console.log(f.setMilliseconds())




(function () {
    setInterval(() => {
        console.log(new Date().toLocaleTimeString())
    },1000);
    
})();