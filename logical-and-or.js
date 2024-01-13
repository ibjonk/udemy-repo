let temp = 0

//logical AND operator - both conditions need to be true
if (temp >= 65 && temp <= 90) {
  console.log("It is pretty nice out");
} //logical OR operator - only one condition needs to be true
else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} else {
    console.log("do what you want")
}

//LESSON 17 CHALLENGE
//let isGuestOneVegan = true
//let isGuestTwoVegan = false
//are both vegan? only offer vegan dishes if true
//neither vegan? offer no vegan dishes
//at least one vegan? offer both

let isGuestOneVegan = true
let isGuestTwoVegan = true

console.log("---LESSON 16 CHALLENGE---")
if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log("Only vegan options")
} else if( isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here is our full menu and one vegan menu")
} else {
    console.log("here is our full menu")
}