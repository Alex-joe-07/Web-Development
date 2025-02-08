//this operator is used in object not in function.
function falam() {
    console.log(this);
}
falam()

let a = {
    username: "Joe",
    passkey:8798,
    fun: function kname() {
        console.log(this.username);
        
        console.log(this);
    },
    
    
}
// a.username = "Umair"
console.log(a.fun());
console.log(this);
