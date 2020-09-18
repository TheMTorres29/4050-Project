//Console logging messages
console.log('Ello :^)');
console.error('This is an error');
console.warn('This is a warning');

//Assigning variables
score = 10;
console.log(score);

//Data Types
const name = 'Miguel';
age = 24;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

//Concatenation
console.log(`My name is ${name} and I am ${age}`);

//Strings
const s = "hello world!";
//num of characters     12
console.log(s.length);
//toUpperCase and toLowerCase are functions
console.log(s.toUpperCase());
console.log(s.toLowerCase());
//choosing how many characters to display
console.log(s.substring(0,5));
// you can combine these functions too
console.log(s.substring(0,5).toUpperCase());
//split into array
console.log(s.split(''));

const tags = "technology, computers, code, studying";
console.log(tags.split(','));

//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 12];
console.log(fruits);
//access one piece of data from an Array
console.log(fruits[1]);
//how to append to the Array
fruits[4] = 'grapes'
console.log(fruits);
//not the best way^, so we do this instead
fruits.push('bananas');
console.log(fruits);
//to add to the beginning of the araray use this..
fruits.unshift('mangos');
console.log(fruits);
//how to check if something is an Array
console.log(Array.isArray(fruits));

//Object literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'sports'],
  address: {
    street: '50 street st.',
    city: 'downtown',
    state: 'CA'
  }
}

console.log(person.firstName, person.lastName, person.hobbies[1]);
//you can add values objects like this too
person.email = 'john@gmail.com';
console.log(person);
console.log(person.email);

//Print out 'Study hard' from this code
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: true
  },
  {
    id: 2,
    text: 'Study hard',
    isComplete: true
  },
  {
    id: 3,
    text: 'Play video games',
    isComplete: true
  },
];

console.log(todos[1].text);

//JSON
//convert the above todos into JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loops
for(let i = 0; i < 10; i++) {
  console.log(i);
}

for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.id);
}

//forEach, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  return todo.text;
});

const todoCompleted = todos.filter(function(todo) {
  return todo.isComplete === true;
});
console.log(todoCompleted);
//combines a filter and map
const todoCompleted2 = todos.filter(function(todo) {
  return todo.isComplete === true;
}).map(function(todo) {
  return todo.text;
})

console.log(todoCompleted2);

//while loops
  let i = 0;
  while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
  }

//conditionals
const myNumber = 10;
//double equal
if(myNumber == '10') {
  console.log('myNumber is == 10');
}
else {
  console.log('myNumber is not == 10');
}
//triple equal check data type, not just values
if(myNumber === '10') {
  console.log('myNumber is === 10');
}
else {
  console.log('myNumber is not === 10');
}

//adding numbers
const addNums = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums(5, 5));
