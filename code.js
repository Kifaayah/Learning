/*let name = "Ada";
alert(name);

var colours = ["red", "blue", "green", "yellow"];
console.log(colours);

var info = ["olajumoke", "Female", "Islam", "Yoruba"];
console.log(info);

let firstName = "Kifaayah";
let lastName = "Jimoh";
let middleName = "Olajumoke"
let fullName = lastName + " " + firstName + " " + middleName ;
console.log(fullName);


let message = prompt(" What is your name dear customer?");
let tag = prompt(`Welcome to our store ${message}`);
let amount = prompt(`How much is the item bought ${message}`);
let reply = (`Dear ${message} the price of items you bought from our store is ${amount} dollar?`);
console.log(reply);

// let price = prompt("How much is the price of the good you bought?");
// console.log(`The price of the item is: ${price} dollar`);
*/


// Conditional Statements:
// if condition is used to execute a block of code if a condition is true
/*let hour = new Date().getHours();
if (hour > 18) {
    console.log('Good Day');
} else {
    console.log("Good Night");
}


// else if is used to xecute a block of code for more than two conditions
/*let hour = new Date().getHours();
if (hour < 12) {
    console.log("Good Morning");
} else if(hour < 16) {
    console.log("Good Afternoon")
} else if (hour  < 22) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}*/


// Switch statements: it selects one out of many block of codes to be executed. They take an expression/value as an input, 
// and then look through a number of cases until they find one that matches that value, break is used to prevent the 
// next code from running automatically
/*let fruit = "Mangoes";

switch(fruit) {
    case "Oranges":
    console.log("I love Oranges.");
    break;
    case "Papayas":
    console.log("Papayas are my favorite fruit.");
    break;
    default:
        console.log("I do not have a favorite fruit.");
}*/

// Comparison Operators
// The following code ensures that those who visit your website must be 18years and above
/*var age = 20;
if (age >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}*/

// Logical Operators
// Logical operators are used to find a boolean (logical) value between variables. they return the boolean value (either true or false).
// There are 3 logical operators in javaScript: 
//1.    Logical AND (&&) Operator
//2.    Logical OR (||) Operator
//3.    Logical NOT (!) Operator
//4.    Nullish coalescing (??)- it returns the first defined value in an operation
// Example for Logical Operator AND (&&): This returns true if all conditions are true.

/*let name = "Jumoke",
    age = 16;
if (name == "Jumoke" && age >= 18){
    console.log("You are elligible for this examination")
} else {
    console.log("Access denied, please try later.")
}*/
// Another Example

/*var age = 36;
if (age >= 18 && age <=35){
    console.log("You can apply");
} else{
    console.log("You can not apply");
}*/


// Logical operator OR (||): This returns true if at least one condition is true

// EXAMPLE:
// var gender = "none";

// if (gender === "male" || gender === "female"){
//     console.log("You can apply");
// } else{
//     console.log("You can not apply");
// }

// Logical Operator NOT (!): This simply negates the value, it turns a true statement to false and false to true.

// Example:
/*var device = "iPhone"

if(!(device === "Android")){
    console.log("The device isn't android")
} else {
    console.log("The devce is an android");
}*/

// Ternary Operators: This takes three operands: a condition followed by a question mark(?), 
// then an expression to execute if the condition is true, followed by a colon(:), and finallly 
// the expression to execute if the condition is false.
// This operator is frequently used as a shortcut for the if statement.
// Syntax: 
// var variableName = condition ? expression1 : expression2

// Example
// var device = "android",
//     output = (device === "iPhone")? "you use an iPhone" : "you do not use an an Android";
// //     console.log(output);


// LOOPING

//for loop-
// From the Example:
// statement 1- sets a variable before the loop starts (var i = 0).
// statement 2- declares the condition that must be met before the code block can run (i must be less than 9).
// atatement 3- increments the value of i by 1 (i++) every time the code block in the loop is executed.

// Example:
// var str = "";
// for (var i = 0; i < 9; i++) {       //var i = 0 is the initialization clause,i < 9 is the comparison clause
//     str = str + i; or str += i;
// }

// console.log(str);
// Expected output: "012345678" 

// while loop
// From the example:
// set a variable before loop starts
// (var n = 0).
// The while statement takes the condition that must be met before the loop starts
// (var n = 0).
// The while statement takes the condition that must be met before the code block can run (n must be les than 9).
//Lastly, increment the value of n by 1 (n++) each time the code block in the loop has been executed

// Example:
//var n = 0;
// var str = ""
//while (n <= 9) {
//  str = str + n;
//  n++;
// }
// console.log(str);
// Expected output: "012345678" 
// do... while loop

// A do while loop:
// A do.. while loop statement creates a loop that executes a code block once before checking if the condition evaluates to true. 
// The condition is evaluated after executing the statement,and if the condition is true, the loop is repeated.
// // Example:
// var str = "";
// i = 0;

// do {
//     str += i;
//     i++;
// }
// while(i <= 9)
// console.log(str);
// A for... in loop is used to iterate through an object's properties.
// The Syntax looks like this: for (variableName in object) {
//     code to be executed
// }
// Example:
// var str = '';
// person = {
//     name: 'Jumoke',
//     age: 23
// };
// for (x in person) {
//     str += person[x];
// }
// console.log(str);

// Break and continue
// Break is used to break out of a loop completely if a specific condition returns true. Break statement breaks the loop and 
// continues executing the code block after the loop.

// Continue- it is used to break one iteration in a loop if a specific condition returns true the continue with the loop afterward
// Example:
// var n = 0;
// var str = "";
// while (n < 9) {
//     if (n === 5) {
//         break;
//     }
//     str = str + n;
//     n++;
// }
// console.log(str);
// Expected Output: 01234


// var n = 0;
// var str = "";
// while (n < 9) {
//     if (n === 5) {
//         continue;
//     }
//     str = str + n;
//     n++;
// }
// console.log(str);


//  Function
// Example of function that returns the square of a number:
// function square (number) {
//     return number * number
// }
// console.log(square(2));
// console.log(square(10));
// console.log(square(30));
// }
// A variable can hold a function. See the sample code below:

//     var square = function (number) {
//         let result = number * number;
//         return result;
//     }
// console.log(square(10));

// Shortening the syntax using the Arrow function, Example below:
// square = (number) => {
//     return number * number;
// }

// console.log(square(2));
// console.log(square(5));
// console.log(square(8));

// Arrays
// var colors = new Array("red", "blue", "orange");
// console.log(colors.length);
// var fruits = Array("banana", "apple", "mango");
// console.log(fruits.length);
// var evenNumbers = [ 2,4,6,8,10];
// console.log(evenNumbers.length)


// Getting Array Length-
// let fruits = ['Apple', 'Banana', 'Grape'];
// let arrLength= fruits.length;
// console.log(arrLength);
// var colors = new Array("red", "blue", "orange");
// console.log(colors.length);
// var fruits = Array("banana", "apple", "mango");
// console.log(fruits.length);
// var evenNumbers = [ 2,4,6,8,10];
// console.log(evenNumbers.length)

// var colors = new Array("red", "blue", "orange");
// console.log("The color array has " + colors.length + " elements");
// var fruits = Array("banana", "apple", "mango");

// console.log(fruits.length);

// Access an array item using the index position
// The first element in an array has an index value of zero, wile the second has an index value
// of 1, the third value has an index value of 2, and so on. 
// Finding an element using their index value. 
// Example:
// var colors = new Array("red", "blue", "orange");
// console.log(colors[colors.length -1]);

// to get the value of the last element in an array
// var evenNumbers = [ 2,4,6,8,10,12, 14, 16, 18, 20];
// console.log(evenNumbers[evenNumbers.length -1])

// var title = ["bola", "ade", "lola", "aisha", "tayo"];
// console.log(title [title.length -1]);


// LOOPING AN ARRAY
// let fruits = ['Apple', 'Banana', 'Grape'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
//     OR
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.forEach(function(item){
//     console.log(item);
// });

// var evenNumbers = [ 2,4,6,8,10,12,14,16,18,20];
// for (let i = 0; i < evenNumbers.length; i++){
//     console.log(evenNumbers[i])
// }
// using the forEach keyword to lop an Array
// let family = ['Dayo', 'Jumoke', 'Laolu', 'Lamide', 'Ladipupo'];
// family.forEach(function(child){
//     console.log(child);
// });

// Populating an Array:
// var subject = [];
// console.log(subject);

// subject[0] = 'english';
// subject[1] = 'yoruba';
// subject[2] = 'biology';
// subject[3] = 'physics';
// console.log(subject);


// OTHER ARRAY METHODS:
// Adding item to the end of an array
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.push('Orange');
// console.log(fruits);

// Removing item from the end of an array
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.pop();
// console.log(fruits);

// Removing item from the beginning of na Array
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.shift();
// console.log(fruits);


// Add an item to the beginning of an Array
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.unshift('Mango');
// console.log(fruits);

// let arr = [
//     ['red', 'blue', 'yellow', 'pink'],
//     [20, 300, 400, 23, 10, 5],
//     ['apple', 'grape', ['orange', 'tomato']]
// ]
// console.log(arr);

// To access the value 400 in the second array above:
// console.log(arr[1][2]);

// BLOCK SCOPE
// if (true) {
//     let name = 'Ola';

// }
// console.log(name);

// Hoisting
// console.log(y);
// var y = 5;
// console.log(y);
//Hoisting only works with the var keyword, the let keyword will return an error when used in place of var

//                      JAVASCRIPT CLASSES
// CLASSES IN JAVASCRIPT ARE SPECIAL TYPE OF FUNCTIONS
//  Syntax-           class ClassName {
//                 constructor(property1, property2) {
//                     this.property1 = property1;
//                     this.property2 = property2;
//                 }
//             }
//             objectName = new ClassName('property1', 'property2');

// Example:
// class person {
//     constructor(firstname, surname, age) {
//         this.firstname = firstname;
//         this.lastname = surname;
//         this.age = age;
//     }
//     // creating a method in our class [ NB:"Method is the same thing as function" ]
//     fullname() {
//         return 'My name is ' + this.firstname + ' ' + this.lastname;
//     }
// }
// var jumoke = new person("Jumoke", "Jimoh", 30);
// console.log(jumoke)

//             to print out the values assigened to fullname() above
// console.log(jumoke.fullname());

//              MAKING A STATIC METHOD OR FUNCION
// class person {
//         constructor(firstname, surname, age) {
//             this.firstname = firstname;
//             this.lastname = surname;
//             this.age = age;
//         }
//         static fullname($this) {
//             return 'My name is ' + $this.firstname + ' ' + $this.lastname
//         }
//     }
//     myFullName = new person('Ada', 'Ojo', 29);
//     console.log(person.fullname(myFullName));


            // INHERITANCE
           // class person {
            //         constructor(firstname, surname, age) {
            //             this.firstname = firstname;
            //             this.lastname = surname;
            //             this.age = age;
            //         }
        
            //         fullname() {
            //             return 'My name is ' + this.firstname + ' ' + this.lastname;
            //         }
            //     }
            // class Parent extends person{
            //     constructor (firstname, lastname, occupation) {
            //         super(firstname, lastname);
            //         this.occupation = occupation;
            //     }
            // }
            // var kifaayah = new Parent('Kafayat', 'Jimoh', 'Software Developer');
            // console.log(kifaayah);


                        // GETTERS AND SETTERS
// Example:
        // class Lesson {
        //     constructor(firstname, lastname, age) {
        //         this.firstname = firstname;
        //         this.lastname = lastname;
        //         this.age = age;
        //     }

        //     get fname() {
        //         return this.firstname;
        //     }

        //     set fname(value) {
        //         this.firstname = value;
        //     }
        // }
        // myFirstName = new Lesson( 'Olajumoke', 'Qamardeen', 'Accountant');
        // console.log(myFirstName.fname);

        // myFirstName.fname = "Oluwatosin";
        // console.log(myFirstName.fname);
// let x = 20;
// let y = x++;
// let z = x % 2;
// console.log(x);
// console.log(y);
// console.log(z);



// function detectWord(word) {
//     let wantedWord = '';
  
//     for (let index = 0; index < word.length; index++) {
//       const letter = word[index];
  
//       if (letter === letter.toLowerCase()) {
//         wantedWord = wantedWord + letter; // String concatenation
//       }
//     }
  
//     return wantedWord;
//   }
  
// let jumoke = 9;
// for(i = 0; i < 7; i++) {
//     console.log(jumoke);
// }

//  let j = 0;
//  while (j < 5) {
//      console.log(jumoke);
//  }


                                 // ALGORITHM
// Algorithm Exercise:
// Binary conversion: write an algorithm that converts number from base 10 to base 2
// String Reversal: write an algorithm that reverses the character of a given string
// Sort numbers: write an algorithm that sort numbers in ascending order

// Solution:
// binary conversion:
// steps:
// 1.  if it's an even number there will be remainder; 0
// 2 if it's odd number; 1
// 3. Add the remainder into a variable/container
// 4. Reverse the array content
// 5.  Print out the Result.

// function convertToBaseTwo(value) {
//     let resultHolder = [];
//     let resultToReturn = [];
//     let count = 0;
//     let newCount = 0;
//     while(value > 1) {
//         if (value % 2 === 0 ) {
//             value /= 2;

//             resultHolder[count++] = 0;
//         }
    
//     else {
//         value /= 2;
//         value = Math.trunc(value);
//         resulHolder[count++] = 1;
//     }
//     if (value === 1) {
//         resulHolder[count++] = value; 
//         // count++
//      }
//      if (value === 0) {
//          resulHolder[count++] = o;
//      }
//      for (let i = resulHolder.length -1; i >=0 ; i++) {
//          resultToReturn[newCount++] = resulHolder[i]; 
//      }
    
//      return resultToReturn;
// }
// console.log(convertToBaseTwo(12));





let a = 20;
let b = 100;
// function check() {
//     if (typeof a === typeof b){
//         console.log('true')
//     } else {
//         console.log('false');
//     }
// };
// check();

// let flag = 20;
// console.log(flag.toString());
        //OR
// function test(a, b) {
//  if (a === b){return true;}
//  else {return false;}
// }
// console.log(test(1, '3'));

    // IF ITEMS*PRICE IS GREATER THAN PAY IT SHD RETURN TRUE
// function business (items, price, pay) {
//     if (items* price > pay) {return true;}
//     else {return false;}
// }   
// console.log(business(20, 5, 500));


//this should give me "true" as a string
// function boolToString(flag) {
//     return flag.toString();
//    }
   
// //    here is the corresponding arrow function
   
//    boolToString = (flag) => flag.toString();

function total(distance){
    let fuel = distance*10;
    return fuel;
}
console.log(total(100));

// QUESTION:
// 9. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// Examples
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

// Hint: Use the logical or operator (||) and if…else statements


function makesTen(a, b) {
    if (a || b === 10) {return true;}
    else if (a + b == 10) {return true;}
    else {return false;}
    }
    console.log(makesTen(9, 10));
    
    //I should get true
    //a little tweak....
    //lets remove the else...if statements
    
    function makesTen(a, b) {
    if ((a || b === 10) || (a+b == 10)) {return true;}
    else {return false;}
    }
    
    //if I
    
    // console.log(makesTen(9, 10));
    
    // I should get true
    // another tweak, lets use tenary
    
    // function makesTen(a, b) {
    // return (a || b === 10) || (a+b == 10) ? true : false
    // }
    // console.log(makesTen(9, 10));
    // // finally lets convert to arrow functions>>>
    
    // makesTen = (a, b) =>(a || b === 10) || (a+b == 10) ? true : false
    
    // console.log(makesTen(9, 10));

    // const person = {
    //     firstName: "John",
    //     lastName: "Doe"
    //   };
      
    //   alert('good afternoon '+  person.firstName);
      
// 1
// var repeatedCharA = (function (length) { 
//     var s = ''; 
//     for (var i = 0; i < length; i++) {  s += 'A'} 
//         return s; }
//         (8));


// function DisplayMessage () {
// document.write ("Learn JavaScript from the Scripting Master!");
// }
// document.write ("Calling the function....<br>");
// DisplayMessage ();
// document.write ("<br>..Done!");
// document.write('<br> This is UAR ')
// var ab = " "
// for(var i = 5; i<= 50; i *= 5){
//     // ab = ab + i; OR
//     document.write(i + '');
// }
// console.log(ab);


// var str = "";
//  for (var i = 0; i < 9; i++) {       //var i = 0 is the initialization clause,i < 9 is the comparison clause
//     str = str + i; 
// }

// console.log(str);
// var min = "";
// for(var i = 0; i <= 20; i++){
//     min += i;
// }
// console.log(min);

// for(i = 20; i>= 0; i--) {
//     document.write(i + " ");
// };


// var i = 1;
// // this while loop prints odd numbers between 1 and 10.
// while (i <= 10) {
// document.write (i + "<br>");
// i += 2;
// };

// var i = 2;
// // this while loop squares i as long as i is less than or equal to 1024.
// while (i <= 1024) {
// document.write (i + "<br>");
// i *= 2;
// }

// let date = new Date("2015-01-01");
// let region = "US";

// // Some were further in the code
// if (region === "US") {
//   let date = new Date();
//   console.log("New date", date); // We get the current date as expected
// }

// console.log(date); //We get 2015-01-01T00:00:00.000Z as expected :)
// let date = new Date();
// console.log(date);

// let names = ["ade", "ayo", "ola", "ada"];
// console.log(names);
// let street = ["gate", "iwo-road", "basorun"];
// console.log(street);
// names.push(...street);
// console.log(names);

// let names='Mike';
// let age=30;
// let country='Italy';

// console.log(`${names} is
//   ${age} years old and
//   lives in ${country}
// `);

// let surname = "jumoke";
// switch(surname){
//     case "Ola":
//     console.log("This isn't a surname" );
//     break;

//     case "ade":
//     console.log("not a surname");
//     break;

//     case "Jimoh":
//     console.log("correct input");
//     break;

//     default:
//     console.log("not a valid input");
// };

// function name(a, b){

// }
// let fruits = ['Apple', 'Banana', 'Grape'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
//     OR
// let fruits = ['Apple', 'Banana', 'Grape'];
// fruits.forEach(function(item){
//     console.log(item);
// });
//  let schools = [1,2, 35, 40, 3];
//  for( i = schools.length-1; i>=0; i--) {
//      console.log(schools[i]);
//  }

// let arr = [
//     ['red', 'blue', 'yellow', 'pink'],
//     [20, 300, 400, 23, 10, 5],
//     ['apple', 'grape', ['orange', 'tomato']]
// ]

// var myVar = 87;

// Only change code below this line
//  myVar++
//  console.log(myVar);