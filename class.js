// function increment() {
//     console.log("The button was clicked");
// }

//  Game starting
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// The race starts 
// countdown()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
//  countdown()
//  instead of writing 54321 each time the game race starts, we assign the code into a function and call
//  the function each time we want 54321 to be displyed in our game

// create and invoke/call a function

// function Jumoke() {
//     console.log(42);
// }
// Jumoke()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


//  function lapTime() {
//     let lap4 = lap1 + lap2 + lap3;
//      console.log(lap4)
//  }
//  lapTime()

// Create a function that logs out the sum of all the lap times ---END----

// building a function that increments

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// let lapsCompleted = 0;
// function totalLaps() {
//    lapsCompleted = lapsCompleted + 1
// }

// totalLaps()
// totalLaps()
// totalLaps()
//  console.log(lapsCompleted);  
         // END  

                        //INCREMENT ON CLICKS

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// document.getElementById("count").innerText
// let count = 0;
// function increment() {
//    count = count + 1
//    console.log(counter);
//    counter.innerText = count;

// <---- MY SOLUTION


// counter = document.getElementById("count-el ");

// let count = 0;
// function increment() {
//    count = count + 1
//    console.log(count);
// }


// change the count-el in the HTML to reflect the new count
// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }                 
//END//  
  
 // 1. Create a function, save(), which logs out the count when it's called


// function save() {
//    console.log(count);
// }

// var name = "Jumoke";
// var greeting = "Good afternoon";
//  myGreetings = name + ", " + greeting + ".";
//  console.log(myGreetings);

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name
// console.log(welcomeEl.innerText)




// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText = + "👋"


// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

// }
//  SOLUTION:
//  let saveEl = document.getElementById("save-el");
//  console.log(saveEl)
// function save() {
//    let saver = count + " - ";
//    saveEl.innerText = saveEl.innerText + saver;
//    console.log(count)
// }


// let key = 42;
// function code(value){

//     let newCode = function(){
//         let key = 12;
//         console.log('the new code is: ', key);
//         return key;
//     }
//     let mine = value * newCode();
//     console.log('in mine:' , key);
//     return mine;
// }
// let answer = code(5)
// console.log(answer);

// function change(value){
//     document.getElementById("people").textContent =value 
//     // + " people entered just now"
// }


// let person = {
//     name: "ada",
//     tribe: "igbo",
//     children: 2,
//     age: 32
// }
// person.age++;

// console.log(person.age)

// let myDate = new Date();
// let show = myDate.toDateString();
// change(show)

// name = "Olajumoke"
// change(name.charAt(5))

// const header = document.getElementById("practice");
// header.style.backgroundColor = "blue";

// const button = document.getElementById("review");
// button.style.backgroundColor ="yellow"
// button.style.color = "black";
// button.style.fontWeight = "larger"

//             // DETECTING BUTTON CLICKS
// button.addEventListener('click', function (){
//     console.log("clicked")
// });


// // SHOWING AND HIDING DOM ELEMENTS
// button.addEventListener('click', function (){
//     if(review.classList.contains("another")){
//         review.classList.remove("another")
//         button.textContent= "disappear"; 
//     } else{
//         review.classList.add("another")
//         button.textContent= "See again";
//     }
// });
// const brand = ['toyota', 'honda', 'benz', 'nissan', "kia"]
// console.log(Array.isArray(brand));  //checking if it's an array
// const newBrand = brand.slice(1,4);
// console.log(newBrand); //'honda', 'benz', 'nissan'
//  brand.splice(1,0,'chevrolet');
//  //INDEXOF()
// console.log(brand.indexOf('kia'));  

//FILTER
// const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// const set = alpha.filter(function(item){
//     return item > 'c';
// });
// console.log(set);

//FIND()
// const look = ['a', 'b', 'c', 'eee']
// const found = look.find(function(item){
//     return item.length > 2;
// });
// console.log(found); //returns items in the array with length greater than 2

// //FOREACH() allows us execute a function on each element of array
// const values = ['a', 'b', 'c', 'd', 'e', 'f']
// values.forEach(function(item){
//     console.log(item);
// });


// brand.forEach(function(data){
//     console.log(data);
// });


// Array = ['ade', 'ayo', 'ola', 'arin', 'ade'];
// Array.forEach(function(info){
//     console.log(info);
// });

// let info = ('olajumoke');
// for(i = 0; i <= info.length-1; i++){
//     console.log(info[i]);
// }


//ARROW FUNCTION
//NORMAL FUNCTION TO ARROW FUNCTION
// let greetings = function(){
//     return 'Hello World!';
// };
// let message =  greetings();
// console.log(message);   //converted  to arrow function below

// let greetings = () => 'Hello World!';
// console.log(greetings());

// let greet = function greetings(name) {
//     return 'Hello' + name;
// }
// let message = greet(' Jummy');
// console.log(message);
 
// TO ARROW FUNCTION

// let greetings = name => 'Hello' + name;
// let message = greetings(' Jummy');
// console.log(message);


// function sum(num1, num2){
//     return num1 + num2;
// };
// let output = sum(10, 5);
// console.log(output);  //to arrow function

// sum = (num1, num2) => num1 + num2;
// output = sum(10, 5);
// console.log(output);

//BEHAVIOR OF  this keyword in an ARROW FUNCTION 
// let messsage = {
//     name: 'John',
//     regularFunction: function(){
//         console.log('Hello ' + this.name);
//     },
//     arrowFunction: () => console.log('Hi' + this.name)
// }
// messsage.regularFunction();
// messsage.arrowFunction();

//USING THE call(). The call method can only be invoked on another function
// let person1 = {name: 'John', age: 32}
// let person2 = {name: 'Mary', age: 18}
// let sayHi = function() { console.log('Hi ' + this.name);}
// sayHi.call(person1)  //Hi Mary
// sayHi.call(person2)  //Hi John

//USING apply() METHOD
//apply() versus call()
//call() accepts an argument list, while apply() accepts a single array of arguments
//apply accepts array input with similar elements while call() accepts individual arguments of varying type
// function introduction(name, profession) {
//     console.log("My name is " + name + " I am a " + profession + ".");
// }
// introduction("Adeola", "Student");
// introduction.apply(undefined, ["Mary", "Lawyer"]);
// introduction.call(undefined, ["Mary", "Lawyer"]);

