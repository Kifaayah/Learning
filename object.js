// //NOTES IN code.txt FILE


// let person = {
//     name: 'Jumoke',
//     age: 29,
//     gender: 'female',
//     interests:['cooking', 'shopping'],
//     dream: function() {
//         return "I " + this.name + " am a Software Developer" + '.'
//     },
//     greeting: function() {
//         return "Hi! I'm " + this.name + '.';
//     },

//     tribe: 'Yoruba',
// };   
//    //"this" keyword allows us to access the object we are working with and access all the 
//         //properties 
// //Changing the value of a property
// person.age = 32;
// person.religion = 'Islam';

console.log(person.greeting());
// Hi! I'm Jumoke.
console.log(person.age);
console.log(person.interests[0]);
console.log(person['gender']);
console.log(person.tribe);
console.log(person.dream());
console.log(person['religion']);

//Adding a new property to an existing object
person.occupation = 'Software Developer';
console.log(person);



let hobby = 'reading';
switch (hobby) {
    case 'cooking':
    console.log("I love cooking");
    break;
    case 'traveling':
    console.log("traveling isn't my favorite");
    break;
    case "shopping":
    console.log("I love shopping a lot");
    break;
    default:
    console.log("I have lots of hobbies");

}

//Greetings in different times of the day
let hour = new Date().getHours();
if (hour > 18) {
    console.log('Good evening');
} else if(hour < 12) {
    console.log("Good morning");
} else {
    console.log('Good Day');
}
let myAge = 29;
let myCatAge = 5;
let myPetAge = myAge * myCatAge;

console.log(myPetAge);

