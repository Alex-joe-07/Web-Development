// console.log("array is mutable means can be change");


//   let a = ["umair ", "Uzair","zahida"]
// console.log("THis is the Original Array");
// console.log(a);

// console.log("--------------------------------------------------------------");
// a.pop()
// console.log("Pop method is used to  pop the element from the end OG array changed :");
// console.log(a);

// console.log("--------------------------------------------------------------");
// a.push("Umaiza")
// console.log("Push method is used to add element for end  OG array changed :");
// console.log(a);

// console.log("--------------------------------------------------------------");
// let x = [1,2,4,5]
// console.log(x.toString());
// console.log("toString is used to convert the number into string OG will not changed  :");
// console.log(x);

// console.log("--------------------------------------------------------------");
// let y = ["zahir", "alex","joe"]
// console.log(y.shift());
// console.log("shift method is used to pop element from start  OG array changed:");
// console.log(y);

// console.log("--------------------------------------------------------------");
// let w = ["zahir", "alex","joe"]
// w.unshift("Tanveer")
// console.log("shift method is used to push  element from start OG array change :");
// console.log(w);

// console.log("--------------------------------------------------------------");
// let b = ["saida","zamir"]
// console.log("concat method is used to merge two array   element one after another  OG cant change:");
// console.log(a.concat(b));
// console.log(b);


// let c = [1,3,2,5,7,83,56]
// console.log(c);

// console.log("--------------------------------------------------------------");
// console.log("sort method is used to sort element in ascending order it doesn't change the existing array. OG array changed ");
// console.log(c.sort((a,b)=>(a-b)));
// console.log(c);



// console.log("--------------------------------------------------------------");
// let d = [1,2,3,6,75,3,3]
// console.log(d);
// console.log("splice it is used to create the new array from the existing array means from index 2 se 4 aage Og array changed");
// console.log(d.splice(2,4));
// console.log(d);

// console.log("--------------------------------------------------------------");
// let e = [4,1,2,34,6]
// console.log("slice method is used to slice the array  and provide from index 2 to index 3 not index 4 coz last of does not take and slice cant change the OG one: ")
// console.log(e);
// console.log(e.slice(2,4));
// console.log(e)

// console.log("--------------------------------------------------------------");
// let f = [1,2,3,4,5]
// console.log("Reverse method is used to reverse the array OG array changed");
// console.log(f.reverse());
// console.log(f);

// console.log("-------------------------reduce method is used to perfrom operation of array combine into single unit like add ,substraction etc OG cant change-------------------------------------");
let arr = [10,30,34,645,7656]

// console.log(arr.filter((Element)=>Element%10==0));
// let a=[]
//  for (const element of arr) {  
//     a.push(element**2)
// }

// console.log(a);
let another = [1,2,4,3,5]
function add(a,b) {
    return a+b
}
console.log(another.reduce(add));
console.log(arr);


// console.log("-----------------------------classical for loops---------------------------------");

// console.log("Classical For loops");

// let u = [1,2,3,4,5,3,2]
// console.log(u);

// for (let i = 0; i < u.length; i++) {
    //     const element = u[i];
    //     console.log(element);
    
    // }



    // console.log("-----------------------------for each loops---------------------------------");
    // let w =[1,23,4]
    // w.forEach((a,b,c)=>{
    //     console.log(a,b,c);
    // })


    // console.log("-----------------------------for in loops used in objects---------------------------------");
//     let obj = {
//         a:1,
//         b:2
//     }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(obj,key);
        
//     }
// }

// console.log("-----------------------------for of  loops---------------------------------");
// let v = [1,2,3,6,5]
// console.log(v);

// for (const element of v) {
//     console.log(element);
    
// }


// console.log("-----------------------------arrow function---------------------------------");

// let toadd = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(toadd(1,2));


// console.log("----------------------------- shortest anaother way of arrow function---------------------------------");
// let add = (num1,num2)=> " THis is the sum of the given number :"+(num1+num2) 
// console.log(add(1,2));

// console.log("----------------------------- This method---------------------------------");
// let form={
//     username:"Umair",
//     Gender: "male",
//     message: function () {
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
        
        
        
//     }
// }
// form.message()
// form.username = "alex"
// form.message()



// console.log("----------------------------- map  method use to create the new array using the previous one OG cant change ---------------------------------");
// let OgArr=[1,2,4,5,3,6]
// let maparr= OgArr.map((element)=> element**2)
// console.log(maparr);
// console.log(OgArr);


// console.log("----------------------------- filter method ---------------------------------");
// let filterArray = [1,2,3,4,5,6,7,8]
// let result = filterArray.filter((Element)=>Element>7 )
// console.log(result);
// console.log(filterArray);

