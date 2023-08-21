let a=new Date();
console.log(a);


console.log(new Date().toLocaleString());// it will gives the local time
console.log(new Date().toDateString());//it will give date and day
console.log(new Date().toString());//it provides gmt IndianStandardTime


let d=new Date(2023,8,11,13,33,30,0);
console.log(d.toLocaleString());


let e=new Date(2023,0,5);
console.log(e.toLocaleString())


var f=new Date("october 13,2023 11:13:00");
console.log(f.toLocaleString());//date_strings



console.log(Date.now())

var h=new Date(1692619809559);
console.log(h.toLocaleString());

var i=new Date(0);
console.log(i.toLocaleString())

