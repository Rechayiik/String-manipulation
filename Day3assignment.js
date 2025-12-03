// let procurementTonnage = 950;
// let minRequirement = 1000;

// console.log(procurementTonnage >= minRequirement);
// ********************** 1
// tonnage validation
let procurementTonnage = 1000;
console.log(procurementTonnage >= 1000);


// ************************ 2
let costStr = "5000";
let costNum = 5000;

// test with == 
costStr == costNum;  // true

// test with === 
costStr === costNum; // false

/* why === is safer than ==
*
* === is safer because it compares both value and type of the 
* variables making it much safer
* == only compare the value rather than the type of the variables
*/

// ********************** 3
let dealerName = "Rech Ayiik";
let costUgx = 10000;

dealerName.length >= 2 && costUgx.length >= 5 && costUgx >= 1000;

// *************************** 4
let date = new Date();
let currentDate = date.getDate()
console.log(currentDate);

let currentMonth = date.getMonth()
console.log(currentMonth);

console.log(date.toLocaleDateString("en-GB"));   // 03/11/2025
