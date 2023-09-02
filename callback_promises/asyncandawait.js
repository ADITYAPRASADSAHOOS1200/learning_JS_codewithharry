

async function aditya() {
let delhiweather=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("delhi weather27 deg")
    },2000);
})
let bangloreweather=new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve("bangloreweather 21 deg")
    },5000);
})

//  delhiweather.then(alert)
//    bangloreweather.then(alert)
console.log("fetching delhi weather please wait");
let delhi=await bangloreweather
console.log("fetched delhi weather"+delhi);
console.log("fetching banglore weather please wait")
let banglore=await bangloreweather
console.log("fetched banglore weather "+banglore);
return [delhi,banglore]



}


const sthiti=async()=>{
    console.log("i rejected aditya");
}


const main1 =async()=>{
console.log("welcome to weather control room");
let a=aditya()
let b=sthiti()
// a.then((value)=>{
//     console.log(value); 
// })
}
main1()