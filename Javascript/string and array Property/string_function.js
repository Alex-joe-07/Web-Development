function manupulatehistory(string) {
    console.log(string.length +"    : This is the length of the given string");
     console.log(string.toUpperCase()+": This method change the given string in to uppercase");
     console.log(string.toLowerCase()+": This method change the given string in to lowercase");
     console.log(string.slice(3,7)+": This method changes the string and only provide the string on index 3 to 7 ");
     console.log(string.replace("fun","amazing")+": This method replace the word fun with amazing.");
     console.log(string.concat(" - History")+": this method adds the history in the end of the string ");
    console.log(string.trim()+": This method is used to trim the whitespaces from  the string ");
    
    
}
let str = "    JavaScript    is fun"
manupulatehistory(str);
console.log("-----------------------------------");

console.log(str+"String are immutable means using the method we cant manupulate the string.");
