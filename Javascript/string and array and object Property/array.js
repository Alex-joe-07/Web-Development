let a = ["Shaikh","Umair","Ahmed",19,2005]
for (let i = 0; i < a.length; i++) {
   console.log(a[i])
   a[1]="Uzair"
   console.log(typeof(a[i]))
   
}
const b = ["Alex-joe-007"]
console.log(typeof(b))

let c =[1,3,4,5,3]
console.log(c.sort())
console.log(c.toString())
console.log(c.join(" - "))
c.pop(2)
console.log(c)
c.push(5)
console.log(c)

c.shift()
console.log(c)

c.unshift(1)
console.log(c)

delete c[1]
console.log(c)


console.log(c.concat(a,b))



let d =[1,2,3,4,5]

d.splice(2,3,23,34,76)

console.log(d)

console.log(d.reverse())


let     e    = [2,4,6]
e.forEach((value , index , array) => {
    console.log(value, index)
});

let obj  = {

    name : "Umair",
    age : 19 
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
      console.log(key, element)
    }
}

for (const  variable of e) {
    console.log(variable)
}

let ab = [2, 4, 5, 6];

// Use filter to create a new array with elements greater than 5
let xy = ab.filter(element => element > 5);

console.log(xy); // Logs the filtered array




let ex = ab.map(element=>{
return element**2;
})
console.log(ex)



let arr=[1,2,3,4,5,6]
const add = (a,b) =>{

    return a*b;
}
console.log(arr.reduce(add));

let by;
console.log(by.from("Umair"))