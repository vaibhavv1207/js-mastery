// ============================================
// DAY 07 — Global Scope
// Author  : Vaibhav
// Topic   : global scope, shadowing, accidental globals
// ============================================

// ─── WHAT IS SCOPE ────────────────────────────
// Scope = where a variable can be accessed
// Global scope = accessible everywhere
// Local scope  = only inside that block/function

// ─── GLOBAL SCOPE ─────────────────────────────
console.log("─── Global scope ───");

let name = "Vaibhav";
var age  = 20;
const city = "Delhi";

function greet() {
    console.log(name);  // ✅ global accessible inside
    console.log(age);   // ✅ global accessible inside
    console.log(city);  // ✅ global accessible inside
}
greet();
console.log(name);  // ✅ accessible outside too

// ─── VAR vs LET on GLOBAL ─────────────────────
console.log("\n─── var vs let global ───");

var x = 10;   // adds to window object in browser
let y = 20;   // does NOT add to window

// In browser:
// console.log(window.x);  // 10 ✅
// console.log(window.y);  // undefined

// ─── TRAP 1 : ACCIDENTAL GLOBALS ──────────────
console.log("\n─── Accidental global ───");

function test() {
    z = 50;    // ❌ no keyword → becomes GLOBAL!
    let w = 60; // ✅ stays local
}
test();
console.log(z);  // 50 — leaked into global! 🚨
// console.log(w);  // ReferenceError ✅ — local stays local

// Always use let/const to avoid accidental globals

// ─── TRAP 2 : VARIABLE SHADOWING ──────────────
console.log("\n─── Shadowing ───");

let score = 100;  // global

function update() {
    let score = 200;  // local — shadows global!
    console.log(score);  // 200 — local wins
}

update();
console.log(score);  // 100 — global unchanged!

// ─── TRAP 3 : NESTED FUNCTION SCOPE ───────────
console.log("\n─── Nested scope ───");

let userName = "Vaibhav";

function outer() {
    let userName = "Rahul";  // shadows global
    function inner() {
        console.log(userName);  // "Rahul" — nearest scope wins
    }
    inner();
}
outer();
console.log(userName);  // "Vaibhav" — global unchanged

// ─── GLOBAL ACCESS FROM ANYWHERE ──────────────
console.log("\n─── Global access ───");

let a = 1;
let b = 2;

function showGlobals() {
    console.log(a);  // 1 ✅
    console.log(b);  // 2 ✅
}
showGlobals();

// ─── CHEATSHEET ───────────────────────────────
// Global scope    → accessible everywhere
// var global      → added to window object
// let/const global→ NOT added to window
// x = 50          → no keyword = accidental global! always use let/const
// shadowing       → local variable hides global with same name
// global unchanged→ shadowing doesn't modify global
// nearest scope   → inner function uses closest variable first