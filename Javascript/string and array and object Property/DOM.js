document.links     //check links to manupulates
document.getElementById('idname')    //target using ID
document.getElementById('idname').getAttribute('attribute name like class')    //get attruibutes using id
document.getElementById('idname').setAttribute('class ', 'falana')    //change attribute class name by xyz to falana


//manipulate css property
const yt = document.getElementById("yt-logo-updated-svg_yt9")
yt.style.padding("12px")
yt.style.border("12px")


const joe = document.getElementById("alex")
joe.textContent // all the text this tag contain it shows all if you hide text using css property.
joe.innerText   // it only shows the tag which is used to display on the screen. 
joe.innerHTML    //it 



document.querySelector("h1")  //it is used to select the first given tag of the html. 
document.querySelector(".classname")  //it is used to select the class name. 
document.querySelector("#id")  //it is used to select the id name. 
document.querySelectorAll("h1")  //it is used to select the all related tag of the html. it always provide in Nodelist if component is only one 

console.log("----------------------some example of script manipulation-------------------------------")
let item = document.querySelectorAll("li") // this is the way to manupulate the the component.
item[0].style.backgroundColor = "green"
item.forEach((element)=> {element.style.color = "white",element.style.backgroundColor = "#212121"})

console.log("---------------HTML Collections-----------------");
let list_name = document.getElementsByClassName("list")  // we cant insert loops in it doesn not contains.
console.log(list_name);




Array.from ("variable ")  //method is used to convert any type into Array.like nodelist , html collection for this all this node list wrap in variable  
//node list used foreach loop 