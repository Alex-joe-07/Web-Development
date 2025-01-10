let a = 4 ;
let arr=[]
for (let i = 1; i <= a; i++) {
    console.log(i)
    arr.push(i)
}
console.log(arr);

const add = (a,b) =>{

    return a*b;
}
console.log(arr.reduce(add));



