let decimal = 20;
let array=[];
console.log(decimal);
while (decimal>0) {
    array.push(decimal % 2);
    decimal = Math.floor(decimal/2)
}
console.log(`The decimal to binary results are : `+array.reverse().join(""));



