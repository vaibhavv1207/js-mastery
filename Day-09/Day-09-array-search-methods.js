// ============================================
// DAY 08 — Array Search Methods
// Author  : Vaibhav
// Topic   : indexOf, includes, find, filter
// ============================================

// ─── INDEXOF ──────────────────────────────────
console.log("─── indexOf ───");

let arr = [10, 20, 30, 20, 40];
console.log(arr.indexOf(20));     // 1 — first occurrence
console.log(arr.indexOf(99));     // -1 — not found
console.log(arr.indexOf(20, 2));  // 3 — search from index 2

// ─── LASTINDEXOF ──────────────────────────────
console.log("\n─── lastIndexOf ───");

console.log(arr.lastIndexOf(20));  // 3 — last occurrence
console.log(arr.lastIndexOf(99));  // -1 — not found

// ─── INCLUDES ─────────────────────────────────
console.log("\n─── includes ───");

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.includes(3));    // true
console.log(arr2.includes(99));   // false
console.log(arr2.includes(3, 3)); // false — search from index 3

// ─── TRAP 1 : NaN HANDLING ────────────────────
console.log("\n─── NaN trap ───");

let withNaN = [1, 2, NaN, "3", 3];
console.log(withNaN.indexOf(NaN));    // -1 ← can't find NaN!
console.log(withNaN.includes(NaN));   // true ✅ includes handles NaN
console.log(withNaN.indexOf(3));      // 4 — number 3
console.log(withNaN.indexOf("3"));    // 3 — string "3" strict!

// ─── FIND ─────────────────────────────────────
console.log("\n─── find ───");

let nums = [5, 12, 8, 130, 44];
console.log(nums.find(n => n > 10));     // 12 — first match
console.log(nums.find(n => n > 1000));   // undefined ← not -1!

// find with objects
let users = [
    { id: 1, name: "Vaibhav" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" }
];
let user = users.find(u => u.id === 2);
console.log(user.name);  // "Rahul"

// ─── FINDINDEX ────────────────────────────────
console.log("\n─── findIndex ───");

console.log(nums.findIndex(n => n > 10));    // 1 — index of 12
console.log(nums.findIndex(n => n > 1000));  // -1 ← not found

// ─── TRAP 2 : FIND vs FINDINDEX NOT FOUND ─────
console.log("\n─── find vs findIndex ───");

let arr3 = [1, 2, 3];
console.log(arr3.find(n => n > 10));       // undefined ← not -1!
console.log(arr3.findIndex(n => n > 10));  // -1

// NOT FOUND returns:
// find()      → undefined
// findIndex() → -1
// indexOf()   → -1
// includes()  → false

// ─── FILTER ───────────────────────────────────
console.log("\n─── filter ───");

let arr4 = [5, 12, 8, 130, 44];
let bigNums = arr4.filter(n => n > 10);
console.log(bigNums);  // [12, 130, 44] — ALL matches
console.log(arr4);     // [5, 12, 8, 130, 44] — UNCHANGED!

// ─── TRAP 3 : FIND vs FILTER ──────────────────
console.log("\n─── find vs filter ───");

let arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.find(n => n > 3));    // 4 — FIRST match only
console.log(arr5.filter(n => n > 3));  // [4,5,6] — ALL matches

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Cart check
let cart = ["apple", "banana", "mango"];
if (cart.includes("banana")) {
    console.log("Banana in cart!");
}

// Remove item from array
let removeItem = "banana";
let newCart = cart.filter(item => item !== removeItem);
console.log(newCart);  // ["apple", "mango"]

// Find index to update
let scores = [
    { name: "Vaibhav", score: 90 },
    { name: "Rahul", score: 75 }
];
let idx = scores.findIndex(s => s.name === "Rahul");
scores[idx].score = 85;  // update Rahul's score
console.log(scores[1].score);  // 85 ✅

// ─── CHEATSHEET ───────────────────────────────
// indexOf()   → first index  | not found → -1
// lastIndexOf → last index   | not found → -1
// includes()  → true/false   | handles NaN ✅
// find()      → first element | not found → undefined
// findIndex() → first index  | not found → -1
// filter()    → ALL matches  | not found → []
// indexOf uses === strict — can't find NaN
// includes handles NaN correctly — use it for existence check