//Lexical Scope (Static Scope)
//Global scope - defined outside of all code blocks == varOne
//Local scope - defined within a code block (functions, etc.) == varTwo

//in a scope you can access variables defined in that scope, or in any parent/ancestor scope

//global scope (varOne)
    //local scope (varTwo)
        //local scope (varFour)
    //local scope (varThree)

//global scope variable
let varOne = "varOne";

if (true) {
  console.log(varOne);
  //local scope variable
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);
