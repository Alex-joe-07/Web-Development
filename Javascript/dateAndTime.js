let date = new Date()
console.log(typeof date);

//new Date() is the method 
//console.log(date);

// console.log("-----------------------toString method is used for date in to string --------------------");
  console.log(date.toString());  

// console.log("-----------------------toIsoString method is used for date in to string in ISO standards --------------------");
// console.log(new Date().toISOString());

// console.log("-----------------------toLocaleString() is used to provide date and time best way to used in productions --------------------");
//console.log(new Date().toLocaleString());

// console.log("-----------------------toLocaleString() in most customizable in productions --------------------");
// console.log(new Date().toLocaleString("default",{
// weekday:"long"
// }
// ));


// console.log("-----------------------toLocaleDateString() is used to provide only date  --------------------");
// console.log(new Date().toLocaleDateString());

// console.log("-----------------------toLocaleTimeString() is used to provide only time  --------------------");
 console.log(new Date().toLocaleTimeString());

// console.log("-----------------------toTimeString() is used to provide only time with whole standard  --------------------");
// console.log(new Date().toTimeString());

// console.log("-----------------------date as a input  --------------------");
// let createddate = new Date(2005, 7 ,19)
// console.log(createddate.toLocaleTimeString());

// console.log("-----------------------another variant date as a input  --------------------");
// console.log(new Date("2005-08-19").toLocaleString());

// console.log("-----------------------date and time  as a input  --------------------");
// console.log(new Date(2005, 7, 19, 12, 30, 31).toLocaleString());


// some other methods 

// console.log(new Date().getDate());
// console.log(new Date().getMonth()+1);
// console.log(new Date().getFullYear());



















// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");


// console.log('******************************date.now is used to provide the milisecond from 1970 till now *****************************************');
// console.log(Date.now());

// console.log('******************************date.now is used to provide the second from 2005 till now *****************************************');
// console.log(Math.floor(Date.now("2005-08-19")/1000));

// console.log('******************************date.now is used to provide the second from 1970 till now *****************************************');
// console.log(Math.floor(Date.now()/1000));


