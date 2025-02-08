// nullish coalescing  operator (??) null undefined
let value = null ?? 14 // it avoid null/undefined as it can 
let value_1 =  undefined ?? null // in this case check the second then third 
let value_2 =  undefined ?? null  ?? 7  // ye nhi to ye , or ye nhi then ye as soon  it get the new value 
console.log(value);
console.log(value_1);
console.log(value_2);


console.log("=============================Ternary operator ========================");
console.log("short cut of if-else");
let number = 990
number>=100 ? console.log("number is greater"):console.log("not");
;

console.log(typeof null);
