console.log("this is the loop ")
for (let i = 1; i <= 10; i++) {
    console.log(i)
    
}

let b ={
    "name" : "alex",
    age: 17
}
for (const key in b) {
        const element = b[key];
        console.log(key , element)
    
}

for (const x of "Umair" ) {
    console.log(x)
}

console.log("+++++++++++++++++++++++new code+++++++++++++++++++++++++++++++")

let obj={
    umair: "98",
    Uzair: 90,
    umaiza:99
}
for (const key in obj) {
        const element = obj[key];
    console.log(key,element)
}

let keys = Object.keys(obj); // Extract keys of the object into an array

for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; // Get the key
    let value = obj[key]; // Get the corresponding value
    console.log(key, value);
}