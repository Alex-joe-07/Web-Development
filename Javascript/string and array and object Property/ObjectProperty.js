let obj0 = {1:0,0:1} // in browser


// let sym = Symbol("key1")
// let obj = {
//     "kname" : "Umair",
//     [sym]: 'Umair',
//     'age' : 12,
//     year : 2
// }
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));



// console.log("///////entries method is used when you need the values in array and database format \\\\\\");
// let db ={ 
//     username: "alex",
//     isLoggedIn: false
// }
// console.log(Object.entries(db));


// console.log("///////hasOwnProperty method is used ask the is this value has in this object. \\\\\\");
// console.log(db.hasOwnProperty('username'));



// // console.log(obj["kname"],obj["age"]);
// obj.age = 20;
// Object.freeze(obj.age)
// obj.age = 25;
// console.log(obj);

// // console.log(typeof obj[sym]);


// obj.greeting = function () {
//     console.log("HEloo");
    
// }
// console.log(obj);
// console.log(obj.greeting());


//---------------------------------------------------------------------------------------------- 
// console.log("................object inside object...............");
// let data = {
//     OGname: "Umair",
//     age : 20,
//     dob:{
//         day:19,
//         month:"august",
//         Year: 2000
//     }
// }
// console.log(data.dob.month);


// console.log("<<<<<<<assign operator is used to combine two object OG object change >>>>");
// let obj1={1:"alpha",2:"james",3:"gamma"}
// let obj2={4:"sigma",5:"beta",6:"alex"}
// //console.log(...obj1,...obj2); //not works
// console.log(Object.assign(obj1,obj2)); 
// // console.log(Object.assign({},obj1,obj2)); //another method authentic you used in production
// console.log(obj1);
// console.log("note - if second object contain same key it tooks the second one ");


//  console.log("<<<<<<< spread operator is used combine two object OG object change >>>>");
// let obj1={1:"alpha",2:"james",3:"gamma"}
// let obj2={4:"sigma",5:"beta",6:"alex"}
// console.log({...obj1, ...obj2});
// console.log(obj1);

console.log("@@@@@@@@@@@@ de structure in array .@@@@@@@@@@@@@@@@@@@@@");
let train = {
    train_no:1323,
    tname : "garib rath"
}
let {train_no} = train
let {train_no:tr} = train  //short or another name to the object keys    de structure 
console.log(train_no);
console.log(tr);
