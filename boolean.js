// === -> equality operator
// !== -> not equal operator
// < -> less than operator
// > -> greater than operator
// <= -> less than or equal to operator
// >= -> greater than or equal to operator

let temp = 101;
//let isFreezing = temp <= 32

if (temp <= 32) {
  console.log("It is cold!");
}
if (temp >= 100) {
  console.log("It is way too hot outside.");
}

//LESSON 14 CHALLENGE

//Create age set to your age
//calculate is child - 7 or under
//calculate is senior - 65 or older
//print is child value
//print is senior value

// let age = -10

// let isChild = age <= 7
// let isSenior = age >= 65

// console.log('---LESSON 14 CHALLENGE---')
// console.log("Child? " + isChild);
// console.log("Senior? " + isSenior)

//LESSON 15 CHALLENGE
//if 7 or under, print message about child pricing
//if 65 or older, print message about senior discount

let age = 70;

console.log("---LESSON 15 CHALLENGE---");
if (age <= 7) {
  console.log("You are eligible for the children's discount.");
} else if (age >= 65) {
  console.log("You qualify for the senior discount");
} else {
  console.log("sorry no discount 4 you");
}
