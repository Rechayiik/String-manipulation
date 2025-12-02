// string manipulation in javascript 


//***************** Question one **********
// usnig the + operator to concatinate string

let firstName = "Rech";
let middleName =  "Ayiik";
let lastName = "Akuek";
let age = 23;

username = firstName + " " + middleName + " " + lastName;
sentense = "Hello, my name is " + username + ". I am " + age + " years old";

console.log(username);
console.log(sentense);
console.log('\n');


//***************** Question two **********
username = `${firstName} ${middleName}`;
sentense2 = `Hello, my name is ${username}. I am ${age} years old`;
console.log(username);
console.log(sentense2);
console.log('\n');


//***************** Question three **********
let name = "ball";
let size = 24;
let length = "12";

console.log(typeof(name));      // -----> string
console.log(typeof(size));      // -----> number
console.log(typeof(length));    // -----> string
console.log('\n');

// converting number 24 to string using string()
console.log(typeof String(size));   // -----> string

// converting string "12" to number using Number();
console.log(typeof Number(length));   // -----> number

// converting string "12" to boolean using bool();
console.log((Boolean(length) === true));   // -----> true



//***************** Question three **********
// string methods 
let lowerString = "this is a javascript string method";
let upperString = "THIS STRING IS IN UPPER CASE";

console.log(lowerString.toUpperCase());
console.log(upperString.toLowerCase());

