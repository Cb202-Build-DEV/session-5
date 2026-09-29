/**
 * solution.js
 * Arrays & Objects — Practice Set (worked solution)
 *
 * Mirrors exercise.js section by section and step by step. Run with
 * `node solution.js` to see all the console.log output at once, or
 * copy one section at a time into your browser console.
 */


/* ------------------------------------------------------------------ *
 * SECTION 1 — Build your first array
 *
 * STEP 1: Create an array called `fruits` with at least 3 strings.
 * STEP 2: Log the first fruit in the array (by index).
 * STEP 3: Log the array's length.
 * ------------------------------------------------------------------ */

// STEP 1:
const fruits = ["Mango", "Kiwi", "Pear"];

// STEP 2: index 0 is the first item
console.log(fruits[0]);

// STEP 3: .length is a property, not a method — no parentheses
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
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
};

// STEP 2: dot notation — simplest, most common way to access a property
console.log(book.title);

// STEP 3: bracket notation — required when the key is a variable or
// has special characters; here it's just shown for contrast
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

  // `this` inside the method refers to `circle` itself, so
  // this.radius is the same as circle.radius
  area: function () {
    return Math.PI * this.radius * this.radius;
  }
};

// STEP 3:
console.log(circle.area());



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

// STEP 1: .forEach() runs the function once per item — no index needed
inventory.forEach(function (entry) {
  totalQty += entry.qty;
});

// STEP 2:
console.log(totalQty); // 49

const store = { city: "Austin", zip: "78701", open: true };

// STEP 3: for...in gives you each key as a string; access the value
// with store[key]
for (const key in store) {
  console.log(`${key}: ${store[key]}`);
}



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

// STEP 1: .map() returns a new array, same length, transformed values
const withTax = prices.map(p => p * 1.08);

// STEP 2: .filter() returns a new array with only the items that pass
// the test — here, prices over 40
const premium = prices.filter(p => p > 40);

// STEP 3: .reduce() collapses the array into a single value — here,
// a running sum starting from 0
const total = prices.reduce((sum, p) => sum + p, 0);

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
  { name: "Sam", number: 7, pointsPerGame: [12, 18, 9] },
  { name: "Priya", number: 23, pointsPerGame: [20, 25, 22] },
  { name: "Jordan", number: 4, pointsPerGame: [5, 8, 11] }
];

// STEP 3: one function, reused for every player
function addAverage(player) {
  const sum = player.pointsPerGame.reduce((a, b) => a + b, 0);
  player.avgPoints = sum / player.pointsPerGame.length;
}

// STEP 4: call the function once per player
for (const player of roster) {
  addAverage(player);
}

// STEP 5:
console.log(roster);
