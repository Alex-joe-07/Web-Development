console.log("assalamu alaiqum Umair")   
let a = Math.floor(Math.random() * 100);
console.log(a)  
for (let i = 0; i < 100; i++) {
    let b = prompt("Enter the number ")
    b = parseInt(b);
    if(b==a){
        console.log("Number is Correct")
        break;
    }
    else if(b>a){
        alert("Number is greater")
    }
    else if(b<a){
        alert("Number is smaller")
    }
    else{
        console.log("Number is incorrect")
        break;
    }
} 

