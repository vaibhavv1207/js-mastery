// ============================================
// DAY 06 — Arrow Functions
// Author  : Vaibhav
// Topic   : =>, implicit return, this, traps
// ============================================

// ─── THREE LEVELS OF SHORTENING ───────────────
console.log("─── Shortening levels ───");

// Level 1 — basic arrow
const greet1 = (name) => {
    return `Hello ${name}!`;
};

// Level 2 — single param, no brackets
const greet2 = name => {
    return `Hello ${name}!`;
};

// Level 3 — implicit return (one line)
const greet3 = name => `Hello ${name}!`;

console.log(greet1("Vaibhav"));  // "Hello Vaibhav!"
console.log(greet2("Vaibhav"));  // "Hello Vaibhav!"
console.log(greet3("Vaibhav"));  // "Hello Vaibhav!"

// ─── NO PARAMETERS ────────────────────────────
console.log("\n─── No params ───");

const sayHello = () => {
    console.log("Hello!");
};
sayHello();  // "Hello!"

// ─── BASIC MATH ───────────────────────────────
console.log("\n─── Math ───");

const add      = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const square   = n => n * n;
const cube     = n => n * n * n;
const double   = n => n * 2;

console.log(add(5, 3));           // 8
console.log(subtract(10, 4));     // 6
console.log(multiply(3, 4));      // 12
console.log(square(4));           // 16 ← 4*4 not 8!
console.log(cube(3));             // 27
console.log(double(square(3)));   // 18 ← square(3)=9, double(9)=18

// ─── TRAP 1 : RETURNING OBJECT ────────────────
console.log("\n─── Object return trap ───");

// Wrong — {} treated as code block!
const getBad  = () => { name: "Vaibhav" };
console.log(getBad());   // undefined ← bug!

// Correct — wrap in ()
const getGood = () => ({ name: "Vaibhav" });
console.log(getGood());  // { name: "Vaibhav" } ✅

// ─── TRAP 2 : NOT HOISTED ─────────────────────
console.log("\n─── Hoisting trap ───");

// Regular — hoisted ✅
hello();
function hello() { console.log("Hello!"); }

// Arrow — NOT hoisted ❌
// sayHi();  // ReferenceError!
const sayHi = () => console.log("Hi!");
sayHi();  // works after declaration

// ─── TRAP 3 : THIS KEYWORD ────────────────────
console.log("\n─── this trap ───");

// Regular function — own this ✅
const obj1 = {
    name: "Vaibhav",
    greet: function() {
        console.log(this.name);  // "Vaibhav"
    }
};
obj1.greet();

// Arrow function — inherits this ❌
const obj2 = {
    name: "Vaibhav",
    greet: () => {
        console.log(this);  // undefined in strict mode
    }
};
obj2.greet();

// ─── REAL WORLD : ARRAYS ──────────────────────
console.log("\n─── Real world ───");

let numbers = [1, 2, 3, 4, 5];

// Old way
let doubledOld = numbers.map(function(n) { return n * 2; });

// Arrow way — clean!
let doubledNew = numbers.map(n => n * 2);
console.log(doubledNew);  // [2, 4, 6, 8, 10]

// Filter evens
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// ─── COMPARISON TABLE ─────────────────────────
// Declaration  → function fn(){}     → hoisted ✅  own this ✅
// Expression   → const fn=function() → hoisted ❌  own this ✅
// Arrow        → const fn=()=>{}     → hoisted ❌  inherits this ✅

// ─── CHEATSHEET ───────────────────────────────
// ()  => {}          → no params
// n   => n * 2       → single param, no brackets
// (a,b) => a + b     → implicit return, one line
// ()  => ({})        → returning object — wrap in ()!
// Arrow not hoisted  → ReferenceError if called before
// Arrow this         → inherits from parent scope