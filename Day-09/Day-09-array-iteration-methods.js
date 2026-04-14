// ============================================
// DAY 09 — Array Iteration Methods
// Author  : Vaibhav
// Topic   : forEach, every, some, sort, reverse
// ============================================

// ─── FOREACH ──────────────────────────────────
console.log("─── forEach ───");

let nums = [1, 2, 3, 4, 5];

nums.forEach(n => console.log(n));
// 1 2 3 4 5

// With index
nums.forEach((n, i) => console.log(`${i}: ${n}`));

// forEach always returns undefined
let result = nums.forEach(n => n * 2);
console.log(result);  // undefined ← not an array!

// ─── EVERY — ALL must match ───────────────────
console.log("\n─── every ───");

let evens = [2, 4, 6, 8, 10];
console.log(evens.every(n => n % 2 === 0));  // true — ALL even
console.log(evens.every(n => n > 5));         // false — not ALL > 5

// Stops at first FALSE
let mixed = [2, 4, 5, 8, 10];
console.log(mixed.every(n => n % 2 === 0));  // false — stops at 5

// ─── SOME — AT LEAST ONE must match ───────────
console.log("\n─── some ───");

let odds = [1, 3, 5, 7, 8];
console.log(odds.some(n => n % 2 === 0));  // true — 8 is even
console.log(odds.some(n => n > 10));        // false — none > 10

// Stops at first TRUE
let arr2 = [1, 3, 4, 7, 9];
console.log(arr2.some(n => n % 2 === 0));  // true — stops at 4

// ─── TRAP 1 : SORT IS STRING BY DEFAULT ───────
console.log("\n─── sort trap ───");

let arr3 = [10, 1, 21, 2, 100];

// Wrong — string sort
console.log([...arr3].sort());
// [1, 10, 100, 2, 21] ← WRONG! "10" < "2" as strings

// Correct — compare function
console.log([...arr3].sort((a, b) => a - b));  // ascending
// [1, 2, 10, 21, 100] ✅

console.log([...arr3].sort((a, b) => b - a));  // descending
// [100, 21, 10, 2, 1]

// How compare works:
// a - b < 0 → a first
// a - b > 0 → b first
// a - b = 0 → same

// String sort — default works fine
let fruits = ["banana", "apple", "mango", "cherry"];
console.log([...fruits].sort());
// ["apple", "banana", "cherry", "mango"] ✅

// ─── TRAP 2 : SORT MUTATES ────────────────────
console.log("\n─── sort mutates ───");

let arr4 = [3, 1, 4, 1, 5];
let sorted = arr4.sort((a, b) => a - b);
console.log(arr4);    // [1,1,3,4,5] ← original changed!
console.log(sorted);  // [1,1,3,4,5] ← same reference!

// Safe sort — copy first
let arr5 = [3, 1, 4, 1, 5];
let safeSorted = [...arr5].sort((a, b) => a - b);
console.log(arr5);        // [3,1,4,1,5] ← unchanged!
console.log(safeSorted);  // [1,1,3,4,5]

// ─── REVERSE ──────────────────────────────────
console.log("\n─── reverse ───");

let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);  // [5,4,3,2,1] ← MUTATES!

// Safe reverse
let arr7 = [1, 2, 3, 4, 5];
let reversed = [...arr7].reverse();
console.log(arr7);     // [1,2,3,4,5] ← unchanged!
console.log(reversed); // [5,4,3,2,1]

// ─── TRAP 3 : EMPTY ARRAY ─────────────────────
console.log("\n─── empty array ───");

let empty = [];
console.log(empty.every(n => n > 0));  // true ← vacuous truth!
console.log(empty.some(n => n > 0));   // false ← nothing matches

// ─── TRAP 4 : FOREACH CANT BREAK ──────────────
console.log("\n─── forEach can't break ───");

// forEach — can't break ❌
// [1,2,3,4,5].forEach(n => {
//     if (n === 3) break;  // ❌ SyntaxError!
// });

// for...of — can break ✅
for (let n of [1, 2, 3, 4, 5]) {
    if (n === 3) break;
    console.log(n);  // 1 2
}

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

let users = [
    { name: "Vaibhav", age: 20, active: true },
    { name: "Rahul",   age: 16, active: false },
    { name: "Amit",    age: 25, active: true }
];

// All active?
console.log(users.every(u => u.active));   // false
// Any minor?
console.log(users.some(u => u.age < 18));  // true
// Sort by age
let byAge = [...users].sort((a, b) => a.age - b.age);
console.log(byAge[0].name);  // "Rahul"
// Print names
users.forEach(u => console.log(u.name));

// ─── CHEATSHEET ───────────────────────────────
// forEach  → loops, returns undefined, can't break
// every    → ALL must match → false stops early
// some     → ANY must match → true stops early
// sort     → STRING by default → use (a,b)=>a-b for numbers!
// reverse  → mutates original → use [...arr].reverse() to be safe
// sort     → mutates! use [...arr].sort() to be safe
// every([]) → true  | some([]) → false (vacuous truth)
// forEach  → can't break — use for...of instead