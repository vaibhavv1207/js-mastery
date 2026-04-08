// ============================================
// DAY 08 — Array Basics
// Author  : Vaibhav
// Topic   : arrays, access, reference, typeof
// ============================================

// ─── CREATING ARRAYS ──────────────────────────
console.log("─── Creating arrays ───");

let arr1 = [1, 2, 3, 4, 5];          // literal
let arr2 = new Array(1, 2, 3);        // constructor
let arr3 = [];                         // empty
let mixed = [1, "hello", true, null]; // mixed types

console.log(arr1);   // [1, 2, 3, 4, 5]
console.log(arr2);   // [1, 2, 3]
console.log(arr3);   // []
console.log(mixed);  // [1, "hello", true, null]

// ─── ACCESSING ELEMENTS ───────────────────────
console.log("\n─── Accessing ───");

let fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits[0]);                    // "apple"
console.log(fruits[2]);                    // "mango"
console.log(fruits[10]);                   // undefined — no error!
console.log(fruits[fruits.length - 1]);    // "orange" — last element
console.log(fruits[-1]);                   // undefined — negative not supported!

// ─── ARRAY LENGTH ─────────────────────────────
console.log("\n─── Length ───");

let nums = [1, 2, 3, 4, 5];
console.log(nums.length);   // 5

// ─── MODIFYING ELEMENTS ───────────────────────
console.log("\n─── Modifying ───");

let colors = ["red", "blue", "green"];
colors[1] = "yellow";       // modify existing
console.log(colors);         // ["red", "yellow", "green"]

// ─── TRAP 1 : REFERENCE TYPE ──────────────────
console.log("\n─── Reference trap ───");

let a1 = [1, 2, 3];
let a2 = a1;         // same reference!
a2.push(4);
console.log(a1);     // [1, 2, 3, 4] ← a1 also changed!
console.log(a2);     // [1, 2, 3, 4]

// Proper copy — spread operator
let a3 = [...a1];
a3.push(5);
console.log(a1);     // [1, 2, 3, 4] ← unchanged!
console.log(a3);     // [1, 2, 3, 4, 5]

// ─── TRAP 2 : TYPEOF ARRAY ────────────────────
console.log("\n─── typeof array ───");

let arr = [1, 2, 3];
console.log(typeof arr);           // "object" ← not "array"!
console.log(Array.isArray(arr));   // true ✅ correct way
console.log(Array.isArray({}));    // false
console.log(Array.isArray("hi"));  // false

// ─── TRAP 3 : SPARSE ARRAYS ───────────────────
console.log("\n─── Sparse arrays ───");

let sparse = [1, 2, 3];
sparse[6] = 10;
console.log(sparse.length);  // 7
console.log(sparse[4]);      // undefined — empty slot
console.log(sparse);         // [1, 2, 3, empty×3, 10]

// ─── TRAP 4 : ARRAY COMPARISON ────────────────
console.log("\n─── Array comparison ───");

console.log([1,2,3] === [1,2,3]);  // false — different references!
console.log([] === []);             // false!

let x = [1, 2, 3];
let y = x;
console.log(x === y);  // true — same reference ✅

// ─── CHEATSHEET ───────────────────────────────
// arr[index]         → access element
// arr[arr.length-1]  → last element
// arr[-1]            → undefined — not supported in JS!
// arr[100]           → undefined — no error thrown
// typeof arr         → "object" — use Array.isArray() instead
// arr1 = arr2        → same reference — changes affect both!
// [...arr]           → proper copy — independent
// [1,2,3]===[1,2,3]  → false — different references
// arr[6] = 10        → creates sparse array