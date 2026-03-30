// ============================================
// DAY 08 — Lexical Scope
// Author  : Vaibhav
// Topic   : write location, lexical vs dynamic
// ============================================

// ─── WHAT IS LEXICAL SCOPE ────────────────────
// Function accesses variables from WHERE IT WAS WRITTEN
// NOT from where it was called

// ─── BASIC LEXICAL SCOPE ──────────────────────
console.log("─── Basic lexical ───");

let name = "Vaibhav";

function greet() {
    console.log(name);  // written in global → uses global
}
greet();  // "Vaibhav" ✅

// ─── WRITE LOCATION WINS ──────────────────────
console.log("\n─── Write location wins ───");

let x = "global";

function outer() {
    let x = "outer";
    function inner() {
        console.log(x);  // written inside outer → uses outer's x
    }
    inner();
}
outer();  // "outer" ✅

// ─── TRAP 1 : CALL LOCATION DOESN'T MATTER ────
console.log("\n─── Call location trap ───");

let value = "global";

function getValue() {
    return value;  // written in global → always global
}

function test() {
    let value = "local";
    console.log(getValue());  // "global" ← not "local"!
}
test();  // "global"

// ─── TRAP 2 : SHOWCOLOR EXAMPLE ────────
console.log("\n─── showColor trap ───");

let color = "red";

function showColor() {
    console.log(color);  // written in global → uses global color
}

function changeColor() {
    let color = "blue";  // local — doesn't affect showColor!
    showColor();          // still prints "red"
}
changeColor();  // "red" ← not "blue"!

// ─── TRAP 3 : NESTED LEVELS ───────────────────
console.log("\n─── Nested levels ───");

function level1() {
    let a = 1;
    function level2() {
        let b = 2;
        function level3() {
            let c = 3;
            console.log(a);        // ✅ level1's a
            console.log(b);        // ✅ level2's b
            console.log(c);        // ✅ own c
            console.log(a + b + c); // 6
        }
        level3();
        // console.log(c);  // ❌ ReferenceError
    }
    level2();
    // console.log(b);  // ❌ ReferenceError
    // console.log(c);  // ❌ ReferenceError
}
level1();

// ─── TRAP 4 : RETURNED FUNCTION REMEMBERS ─────
console.log("\n─── Returned function ───");

function makeGreeter(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}!`);
        // greeting remembered from makeGreeter's scope!
    };
}

let sayHello = makeGreeter("Hello");
let sayHi    = makeGreeter("Hi");
sayHello("Vaibhav");  // "Hello Vaibhav!" ✅
sayHi("Rahul");       // "Hi Rahul!" ✅

// ─── TRAP 5 : MULTIPLIER — HOW Y GETS VALUE ───
console.log("\n─── makeMultiplier ───");

function makeMultiplier(x) {
    return function(y) {  // y gets value when THIS is called
        return x * y;     // x remembered, y passed at call time
    };
}

let double = makeMultiplier(2);  // x=2 remembered
let triple = makeMultiplier(3);  // x=3 remembered

// double = function(y) { return 2 * y }
// y gets value when double() is called!
console.log(double(5));  // y=5 → 2*5=10 ✅
console.log(triple(5));  // y=5 → 3*5=15 ✅

// BACKPACK MENTAL MODEL:
// makeMultiplier(2) → puts x=2 in backpack → returns function
// double(5)         → opens backpack (x=2), y=5 passed → 10

// ─── LEXICAL vs DYNAMIC SCOPE ─────────────────
console.log("\n─── Lexical vs Dynamic ───");

let msg = "global";

function show() {
    console.log(msg);  // JS → lexical → always looks at WRITE location
}

function wrapper() {
    let msg = "local";
    show();  // still "global" — JS is lexical not dynamic!
}
wrapper();  // "global"

// ─── CHEATSHEET ───────────────────────────────
// Lexical scope  → variable access based on WRITE location
// Call location  → doesn't matter for scope lookup
// Inner function → can access ALL outer variables
// Outer function → CANNOT access inner variables
// Returned function → REMEMBERS its write scope (closure!)
// JS is LEXICAL → write location always wins
// x in backpack  → remembered | y passed at call → new each time