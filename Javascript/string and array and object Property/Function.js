// function valuation(percentage ,amount) {
//     let b = amount / percentage;
//     let  c = b*100;    
//   return  console.log(c);
    
// }
// valuation(1,100)

//console.log("Rest operator");
// function add(...num2) {   //rest operator provide the array 
//     return num2
// }
// console.log(add(1,35,5));


//console.log("Function for object ");
// function Printobjects(object) {
//     console.log(object.username);
//     console.log(object.password);
// }
// let obj = {
//     username:'Alex',
//     password: 1905
// }
// Printobjects(obj)

// console.log("function takes array");

// function Arrey(getarrey) {

//     for (let i = 0; i < getarrey.length; i++) {
//         const element = getarrey[i];
//         console.log(element);
        
//     }
// }
// let antoherarray = [1,2,42,1,453,43,34]
// Arrey(antoherarray) //this is one way 
// console.log("another one");
// Arrey([1,2,42,1,453,43,34]) // this is the another way 


// let a = (num1,num2)=> num1+num2   //arrow function 
// console.log(a(1,3));

// console.log("Immediately Invoked Function Expression(iife)-- sometime global variable make noise and we need run at the start without any interferance.");
 
(
    function iife() {
        console.log("Database Connected...");
        
    }
)();
(
    (Name)=>{
        console.log("Arrow Database Connected...");
        console.log(`Is you are ${Name}`);
        
    }
)('ALEX')

