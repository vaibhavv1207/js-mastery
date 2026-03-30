// ============================================
// DAY 08 — Local / Function Scope
// Author  : Vaibhav
// Topic   : local scope, var vs let, inner/outer
// ============================================

// ─── BASIC LOCAL SCOPE ────────────────────────
console.log("─── Basic local scope ───");

function greet() {
    let message = "Hello!";   // local variable
    console.log(message);     // ✅ accessible here
}
greet();
// console.log(message);  // ❌ ReferenceError — outside!

// ─── EACH FUNCTION OWN SCOPE ──────────────────
console.log("\n─── Each function own scope ───");

function funcA() {
    let x = 10;
    console.log(x);   // 10
}
function funcB() {
    let x = 20;       // same name — different scope!
    console.log(x);   // 20
}
funcA();  // 10
funcB();  // 20

// ─── LOCAL vs GLOBAL ──────────────────────────
console.log("\n─── Local vs Global ───");

let name = "Global Vaibhav";

function test() {
    let name = "Local Vaibhav";  // shadows global
    console.log(name);            // "Local Vaibhav"
}
test();
console.log(name);  // "Global Vaibhav" — unchanged!

// ─── TRAP 1 : VAR LEAKS BLOCKS NOT FUNCTIONS ──
console.log("\n─── var leak trap ───");

// var leaks out of if/for blocks
if (true) {
    var leaked = "I leaked!";
    let stayed = "I stayed!";
}
console.log(leaked);   // ✅ "I leaked!" — var leaked out
// console.log(stayed); // ❌ ReferenceError — let stayed

// var STAYS inside functions
function testVar() {
    var trapped = "I'm trapped!";
}
testVar();
// console.log(trapped);  // ❌ ReferenceError — stayed inside!

// ─── TRAP 2 : INNER FUNCTION SCOPE ────────────
console.log("\n─── Inner function ───");

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);  // ✅ inner CAN access outer's x
        console.log(y);  // ✅ inner CAN access own y
    }

    inner();
    console.log(x);   // ✅ outer CAN access own x
    // console.log(y); // ❌ outer CANNOT access inner's y!
}
outer();
// Inner → can use outer's variables ✅
// Outer → cannot use inner's variables ❌

// ─── TRAP 3 : SAME NAME DIFFERENT SCOPE ───────
console.log("\n─── Same name ───");

function add() {
    let result = 10 + 20;
    return result;   // 30
}
function multiply() {
    let result = 10 * 20;  // same name — independent!
    return result;   // 200
}
console.log(add());       // 30
console.log(multiply());  // 200

// ─── TRAP 4 : RETURN LOCAL VALUE ──────────────
console.log("\n─── Return local ───");

function makeMessage() {
    let msg = "Hello from inside!";
    return msg;   // pass value out before it dies
}
let message = makeMessage();
console.log(message);  // "Hello from inside!" ✅
// msg is gone — but VALUE was returned

// ─── TRAP 5 : MODIFYING GLOBAL ────────────────
console.log("\n─── Modifying global ───");

let count = 0;

function increment() {
    count++;  // modifying global — bad practice!
}
increment();
increment();
increment();
console.log(count);  // 3 — global modified!

// Better practice — use return
function incrementBetter(c) {
    return c + 1;
}
let c = 0;
c = incrementBetter(c);
c = incrementBetter(c);
c = incrementBetter(c);
console.log(c);  // 3 ✅ — cleaner!

// ─── CHEATSHEET ───────────────────────────────
// local variable  → only accessible inside its function
// var in function → stays inside (same as let/const)
// var in block    → leaks out! let/const stay inside
// inner function  → can access outer variables
// outer function  → CANNOT access inner variables
// same name       → each function has independent copy
// return          → only way to pass local value outside
// modifying global → works but bad practice — use return