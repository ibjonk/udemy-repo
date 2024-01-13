let isAccountLocked = false;
let userRole = 'admin'

// if (isAccountLocked === true) {
//   console.log("The account is locked");
// } else {
//   console.log("WELCOME");
//     }  

    if (isAccountLocked) {
        console.log("Account is locked")
    } else if ( userRole === 'admin') {
        console.log("Welcome admin!")
    } else {
        console.log("Welcome")
    }

    //LESSON 16 CHALLENGE
    let temp = 75;

    console.log("---LESSON 16 CHALLENGE---")
    if (temp <= 32) {
      console.log("It is freezing outside!");
    } else if (temp >= 110) {
      console.log("It is hot outside!");
    } else {
        console.log("Go for it. It is pretty nice.")
    }