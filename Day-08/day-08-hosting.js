// ============================================
// DAY 08 — Hoisting Deep Dive
// Author  : Vaibhav
// Topic   : var, let, const, function hoisting
// ============================================

// ─── WHAT IS HOISTING ─────────────────────────
// JS moves declarations to top of scope BEFORE running
// Only declarations hoisted — NOT assignments!

// ─── VAR HOISTING ─────────────────────────────
console.log("─── var hoisting ───");

console.log(a);  // undefined — hoisted!
var a = 10;
console.log(a);  // 10

// What JS does internally:
// var a;           → hoisted to top
// console.log(a);  → undefined
// a = 10;          → assignment stays here
// console.log(a);  → 10

// ─── FUNCTION DECLARATION HOISTING ────────────
console.log("\n─── Function declaration ───");

greet();  // "Hello!" ✅ — fully hoisted!
function greet() {
    console.log("Hello!");
}

// Entire function body is hoisted — not just name!

// ─── FUNCTION EXPRESSION — NOT HOISTED ────────
console.log("\n─── Function expression ───");

console.log(typeof fn);  // "undefined" — var hoisted as undefined
var fn = function() { return 42; };
console.log(typeof fn);  // "function" ✅

// Calling before declaration
// fn();  // ❌ TypeError — fn is undefined, not a function!

// ─── ARROW FUNCTION — NOT HOISTED ─────────────
console.log("\n─── Arrow function ───");

// sayHi();  // ❌ ReferenceError — const in TDZ!
const sayHi = () => console.log("Hi!");
sayHi();  // "Hi!" ✅

// With var:
// sayHello();  // ❌ TypeError — undefined is not a function
var sayHello = () => console.log("Hello!");
sayHello();  // "Hello!" ✅

// ─── TRAP 1 : VAR HOISTING IN FUNCTIONS ───────
console.log("\n─── var in function ───");

function test() {
    console.log(x);  // undefined — hoisted within function!
    var x = 10;
    console.log(x);  // 10
}
test();

// ─── TRAP 2 : TYPEOF NEVER CRASHES ────────────
console.log("\n─── typeof never crashes ───");

console.log(typeof undeclared);  // "undefined" — never ReferenceError!
console.log(typeof fn2);         // "undefined" — var hoisted
var fn2 = function() {};
console.log(typeof fn2);         // "function"

// typeof ALWAYS returns a string — never throws!

// ─── TRAP 3 : FUNCTION vs VAR SAME NAME ───────
console.log("\n─── Function vs var ───");

console.log(typeof foo);  // "function" — function hoists ABOVE var!
var foo = "variable";
function foo() { return "I am function"; }
console.log(typeof foo);  // "string" — assignment ran

// Hoisting order:
// 1. Function declarations — FIRST
// 2. var declarations — SECOND
// 3. Assignments — stay in place

// ─── TRAP 4 : HOISTING IN BLOCKS ──────────────
console.log("\n─── Hoisting in blocks ───");

{
    console.log(y);  // undefined — var hoisted to global!
    var y = 10;
}
console.log(y);  // 10 — var leaked AND hoisted

// let/const stay in TDZ — covered in Part 7

// ─── TRAP 5 : FUNCTION OVERWRITING ────────────
console.log("\n─── Function overwriting ───");

function duplicate() { return 1; }
function duplicate() { return 2; }  // overwrites first!
console.log(duplicate());  // 2 — last declaration wins

// ─── REAL EXECUTION ORDER ─────────────────────
console.log("\n─── Execution order ───");

// What you write:
// var x = 1;
// function greet2() { console.log("Hello"); }
// var y = 2;

// What JS does — PHASE 1 HOISTING:
// var x;
// var y;
// function greet2() { console.log("Hello"); }

// PHASE 2 EXECUTION:
// x = 1;
// greet2();
// y = 2;

// ─── HOISTING CHEATSHEET ──────────────────────
// var               → hoisted as undefined
// let/const         → hoisted but TDZ — ReferenceError
// function declaration → FULLY hoisted with body
// function expression → NOT hoisted (var = undefined)
// arrow function    → NOT hoisted
// typeof            → NEVER throws — always returns string
// function vs var   → function hoists ABOVE var
// duplicate functions → last one wins