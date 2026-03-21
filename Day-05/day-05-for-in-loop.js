// ============================================
// DAY 05 — for...in Loop
// Author  : Vaibhav
// Topic   : for...in, objects, keys, traps
// ============================================

// ─── BASIC FOR...IN ───────────────────────────
console.log("─── Basic for...in ───");

let user = {
    name: "Vaibhav",
    age: 20,
    city: "Delhi"
};

for (let key in user) {
    console.log(key);         // name age city
    console.log(user[key]);   // Vaibhav 20 Delhi
}

// ─── KEY AND VALUE TOGETHER ───────────────────
console.log("\n─── Key + Value ───");

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
// name : Vaibhav
// age  : 20
// city : Delhi

// ─── FOR...IN vs FOR...OF ─────────────────────
console.log("\n─── for...in vs for...of ───");

let arr = ["a", "b", "c"];

// for...of — gives values
for (let val of arr) {
    console.log(val);   // a b c
}

// for...in — gives indexes (as strings!)
for (let key in arr) {
    console.log(key);   // "0" "1" "2"
}

// ─── TRAP 1 : ARRAY KEYS ARE STRINGS ──────────
console.log("\n─── String keys trap ───");

let fruits = ["apple", "banana", "mango"];
for (let key in fruits) {
    console.log(key);           // "0" "1" "2" — strings!
    console.log(typeof key);    // "string" not "number"!
    console.log(fruits[key]);   // apple banana mango
}

// ─── TRAP 2 : INHERITED PROPERTIES ───────────
console.log("\n─── Inherited properties ───");

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {};

let p = new Person("Vaibhav");

// Without hasOwnProperty — gets inherited too
for (let key in p) {
    console.log(key);   // name AND greet!
}

// With hasOwnProperty — only own properties
for (let key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key);   // only name ✅
    }
}

// ─── TRAP 3 : FOR...IN ON STRINGS ─────────────
console.log("\n─── String trap ───");

let str = "Hello";
for (let key in str) {
    console.log(key);       // 0 1 2 3 4
    console.log(str[key]);  // H e l l o
}
// use for...of for strings instead!

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Count properties
let obj = { name: "Vaibhav", age: 20, city: "Delhi" };
let count = 0;
for (let key in obj) count++;
console.log("Properties:", count);   // 3

// Copy object
let original = { a: 1, b: 2, c: 3 };
let copy = {};
for (let key in original) {
    copy[key] = original[key];
}
console.log(copy);   // { a:1, b:2, c:3 }

// Sum all values
let scores = { x: 10, y: 20, z: 30 };
let sum = 0;
for (let key in scores) {
    sum += scores[key];
}
console.log("Sum:", sum);   // 60

// Find by value
let results = { Vaibhav: 95, Rahul: 87, Amit: 92 };
for (let name in results) {
    if (results[name] > 90) {
        console.log(`${name} scored above 90`);
    }
}
// Vaibhav scored above 90
// Amit scored above 90

// ─── CHEATSHEET ───────────────────────────────
// for...in  → loops object KEYS
// for...of  → loops array/string VALUES
// for...in on array → gives string indexes "0","1","2"
// typeof key in for...in → always "string"
// use hasOwnProperty → skip inherited properties
// never use for...in on arrays → use for...of instead