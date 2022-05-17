// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we check if name is strictly equal to Mary. Dane is not strictly equal to Mary, so
// we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Firt we initialize the variable called secret.
// We make a variable called code and set it 123 as a number.
// Then we check if code is strictly equal to 123. 123 is strictly equal to 123, so
// the variable secret is reassigned with value "super" and the variable code is reassigned with
// value multiplied by 2 (which is 246). Then we check if code value (246) is greater than 250.
// It is not, so then we console.log the variable called secret which logs the value super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it to true as a boolean.
// We make a variable called age and set it 34 as a number.
// We make a variable called zip and set it 55407 as a number.
// Then we check if isStudent is strictly equal to true and if zip is greater than 80000, 
// but its not greater than 80000 so we move on to the next.
// Then we check if isStudent is strictly equal to false or if age is less than 30, 
// but its not strictly equal to false nor less than 30 so we move on to the next.
// Then we check if isStudent is strictly equal to true. True is strictly equal to true, so
// we console.log 'Welcome to Prime!'. The last else statement is never reached.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX - colorOne and colorTwo are set to wrong colors. Also, colorTwo isn't changed to purple.
// Should be  - let colorOne = 'blue'; 
                let colorTwo = 'red';
                let mix = true;

                if (mix) {
                  colorOne = 'purple';
                  colorTwo = 'purple';
                }

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - || means 'or' not 'and'.
// Should be - if (temp > 39 && time >= 4) {

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - comparing minAge to age instead of age to minAge with wrong console.log in each place
// Should be - if(age >= minAge) {
                console.log('enter');
               } else {
                console.log('no entry');
               }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

