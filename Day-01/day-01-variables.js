// ============================================
// DAY 01 — Variables (var, let, const)
// Author  : Vaibhav
// Topic   : Scope, Hoisting, TDZ, Redeclare/Reassign
// ============================================

// ─── 1. VAR ───────────────────────────────
// Function/globally scoped
// Hoisted as undefined
// Allows redeclare + reassign

var a = 5;
console.log(a); // 5

// var leaks out of blocks
if (true) {
  var b = "Hello Welcome";
}
console.log(b); // "Hello Welcome" — leaked!

// var stays inside functions
function test() {
  var inside = "trapped";
}
// console.log(inside); // ReferenceError

// Redeclare ✅
var c = "Ajay";
var c = "Aman";
console.log(c); // "Aman"

// Hoisting behavior
console.log(hoisted); // undefined — not an error
var hoisted = 10;

// ─── 2. LET ───────────────────────────────
// Block scoped
// NOT hoisted (TDZ)
// Allows reassign, NOT redeclare

let name1 = "John";
console.log(name1); // "John"

// Block scope — stays inside {}
if (true) {
  let value = 5;
}
// console.log(value); // ReferenceError

// Reassign ✅
let num1 = 10;
num1 = num1 * 2;
console.log(num1); // 20

// Redeclare ❌
// let num1 = 6; // SyntaxError: already declared

// ─── 3. CONST ─────────────────────────────
// Block scoped
// NOT hoisted (TDZ)
// NO reassign, NO redeclare
// BUT object/array contents CAN be mutated

const PI = 3.14;
// PI = 3; // TypeError: Assignment to constant variable

// GOTCHA — const with objects
const user = { name: "Vaibhav" };
user.name = "Rahul"; // ✅ allowed — mutating property
console.log(user);   // { name: "Rahul" }
// user = {};        // ❌ TypeError — can't reassign reference

// ─── INTERVIEW CHEATSHEET ─────────────────
// var  → function scope | hoisted as undefined | redeclare ✅ reassign ✅
// let  → block scope    | TDZ                  | redeclare ❌ reassign ✅
// const→ block scope    | TDZ                  | redeclare ❌ reassign ❌
// const objects → reference locked, contents mutable