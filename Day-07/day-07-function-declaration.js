// ============================================
// DAY 07 — Function Declaration
// Author  : Vaibhav
// Topic   : declaration, hoisting, return
// ============================================

// ─── BASIC FUNCTION ───────────────────────────
console.log("─── Basic ───");

function greet() {
    console.log("Hello Vaibhav!");
}
greet();  // "Hello Vaibhav!"

// ─── WITH PARAMETERS ──────────────────────────
console.log("\n─── Parameters ───");

function greetName(name) {
    console.log(`Hello ${name}!`);
}
greetName("Vaibhav");  // "Hello Vaibhav!"
greetName("Rahul");    // "Hello Rahul!"

// ─── WITH RETURN ──────────────────────────────
console.log("\n─── Return ───");

function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);   // 8

// ─── HOISTING ─────────────────────────────────
console.log("\n─── Hoisting ───");

// Call BEFORE declaration — works!
sayHello();  // "Hello!" ✅

function sayHello() {
    console.log("Hello!");
}

// ─── TRAP 1 : RETURN EXITS IMMEDIATELY ────────
console.log("\n─── Return exits ───");

function check(num) {
    if (num > 0) return "Positive";
    if (num < 0) return "Negative";
    return "Zero";
}
console.log(check(5));    // "Positive"
console.log(check(-3));   // "Negative"
console.log(check(0));    // "Zero"

// Code after return NEVER runs
function multiply(a, b) {
    return a * b;
    console.log("Done");  // never runs!
}
console.log(multiply(4, 5));  // 20

// ─── TRAP 2 : NO RETURN = UNDEFINED ───────────
console.log("\n─── No return ───");

function noReturn(a, b) {
    let sum = a + b;  // forgot return!
}
console.log(noReturn(5, 3));  // undefined ← no return!

// ─── TRAP 3 : RETURN ON NEW LINE ──────────────
console.log("\n─── Return newline trap ───");

// Wrong — JS inserts semicolon after return
function badReturn() {
    return          // ← semicolon inserted here!
    42;
}
console.log(badReturn());  // undefined ← bug!

// Correct — value on same line as return
function goodReturn() {
    return 42;      // ✅
}
console.log(goodReturn());  // 42

// ─── FUNCTIONS CALLING FUNCTIONS ──────────────
console.log("\n─── Nested calls ───");

function outer() {
    return inner();
}
function inner() {
    return "I am inner!";
}
console.log(outer());  // "I am inner!"

// ─── CHEATSHEET ───────────────────────────────
// function declarations are FULLY hoisted — can call before defining
// no return statement → returns undefined
// return exits function immediately — code after never runs
// return on new line → JS adds semicolon → returns undefined
// functions can call other functions