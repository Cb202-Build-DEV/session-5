/**
 * exercise.js
 * Arrays & Objects — Practice Set
 *
 * Work through each section in order. Every section lists the steps you
 * need to complete, with a blank or partial starting point underneath.
 * Run this file with `node exercise.js` (or paste a section into your
 * browser console) after each section to check your console.log output.
 *
 * Stuck? solution.js has a fully worked version with the same step
 * numbers, so you can compare your approach line by line.
 */


/* ------------------------------------------------------------------ *
 * SECTION 1 — Build your first array
 *
 * STEP 1: Create an array called `fruits` with at least 3 strings.
 * STEP 2: Log the first fruit in the array (by index).
 * STEP 3: Log the array's length.
 * ------------------------------------------------------------------ */

// STEP 1:
const fruits = ["mango", "strawberry", "bananna"];

// STEP 2:
console.log(fruits[0]);
console.log(fruits[2]);
// STEP 3:
console.log(fruits.length);


/* ------------------------------------------------------------------ *
 * SECTION 2 — Objects & notation
 *
 * STEP 1: Create an object called `book` with three properties:
 *         title, author, and year.
 * STEP 2: Log book.title using dot notation.
 * STEP 3: Log book["author"] using bracket notation.
 * ------------------------------------------------------------------ */

// STEP 1:
const book = {
  title: "lord of the flies",
  author: "william golberg",
  year: "september 17,1954"
};

// STEP 2:
console.log(book.title);

// STEP 3:
console.log(book["author"]);


/* ------------------------------------------------------------------ *
 * SECTION 3 — The this keyword
 *
 * STEP 1: Create an object called `circle` with a radius property.
 * STEP 2: Add a method called area() that returns the circle's area
 *         using this.radius (formula: Math.PI * radius * radius).
 * STEP 3: Call circle.area() and log the result.
 * ------------------------------------------------------------------ */

// STEP 1 + STEP 2:
const circle = {
  radius: 5,
  area: function() {
    return this.radius * Math.PI * this.radius
  }

  // add your area() method here

};
  console.log(circle.area());
// STEP 3:



/* ------------------------------------------------------------------ *
 * SECTION 4 — Looping arrays & objects
 *
 * STEP 1: Given the `inventory` array below, use .forEach() to add up
 *         every item's qty into a variable called totalQty.
 * STEP 2: Log totalQty.
 * STEP 3: Use a for...in loop to log each key and value in `store`.
 * ------------------------------------------------------------------ */

const inventory = [
  { item: "Pencils", qty: 24 },
  { item: "Notebooks", qty: 10 },
  { item: "Erasers", qty: 15 }
];

let totalQty = 0;

// STEP 1:


// STEP 2:


const store = { city: "Austin", zip: "78701", open: true };

// STEP 3:



/* ------------------------------------------------------------------ *
 * SECTION 5 — map, filter, reduce
 *
 * STEP 1: Starting from `prices` below, use .map() to build `withTax`
 *         — each price multiplied by 1.08.
 * STEP 2: Use .filter() to build `premium` — only prices over 40.
 * STEP 3: Use .reduce() to build `total` — the sum of the original
 *         prices.
 * STEP 4: Log withTax, premium, and total.
 * ------------------------------------------------------------------ */

const prices = [12, 45, 8, 30, 99];

// STEP 1:
const withTax = prices.map(price => price * 1.08);

// STEP 2:
const premium = prices.filter(price => price > 40);

// STEP 3:
const total = prices.reduce((total, price) => total + price, 0);

// STEP 4:

console.log(withTax, premium, total);

/* ------------------------------------------------------------------ *
 * SECTION 6 — Capstone: Team roster tracker
 * (Same pattern as the Student Gradebook lab, different data.)
 *
 * STEP 1: Create an array called `roster`.
 * STEP 2: Each item is an object with name, number, and a
 *         pointsPerGame array (at least 3 numbers). Add at least
 *         3 players.
 * STEP 3: Write a function addAverage(player) that calculates the
 *         player's scoring average and adds it as a new avgPoints
 *         property on that player object.
 * STEP 4: Loop through roster, calling addAverage on every player.
 * STEP 5: Log the final roster.
 * ------------------------------------------------------------------ */

// STEP 1 + STEP 2:
const roster = [ 
  // { name: "Sam", number: 7, pointsPerGame: [12, 18, 9] }
  {name: "ethan", id: 23, grades: [23,67,93] },
  {name: "brent", id: 8, grades: [20,15,10] },
  {name: "tiffany", id: 1, grades: [99,98,100] },
];

// STEP 3:
function addAverage(player) {
  const total = student.reduce((total, grade) => total + grade, 0)
  const avg = total / (student.grades.length);
  student.average = avg;

}

// STEP 4:
for (const student in roster){
  console.log({student.name}: average grade is - ${student.average})
}

// STEP 5:


