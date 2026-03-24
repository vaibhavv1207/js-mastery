// ============================================
// DAY 06 — Parameters & Arguments
// Author  : Vaibhav
// Topic   : params, args, value vs reference
// ============================================

// ─── PARAMS vs ARGS ───────────────────────────
console.log("─── Params vs Args ───");

// a, b = PARAMETERS (in definition)
function add(a, b) {
    return a + b;
}
// 5, 3 = ARGUMENTS (when calling)
console.log(add(5, 3));  // 8

// ─── TOO MANY ARGS — ignored ──────────────────
console.log("\n─── Too many args ───");

console.log(add(5, 3, 100, 200));  // 8 — extras ignored

// ─── TOO FEW ARGS — undefined ─────────────────
console.log("\n─── Too few args ───");

console.log(add(5));  // NaN — b is undefined, 5+undefined=NaN

function test(a, b, c) {
    console.log(a + b + c);
}
test(1, 2);  // NaN — c is undefined, not an error!

// ─── ARGUMENTS OBJECT ─────────────────────────
console.log("\n─── arguments object ───");

function showArgs() {
    console.log(arguments.length);   // 3
    console.log(arguments[0]);       // 10
    console.log(arguments[1]);       // 20
    console.log(arguments[2]);       // 30
}
showArgs(10, 20, 30);

// arguments is NOT a real array
function testArgs() {
    console.log(Array.isArray(arguments));  // false!
    console.log(arguments.length);          // works ✅
    // arguments.map(...)  // ❌ TypeError!
}
testArgs(1, 2, 3);

// arguments doesn't work in arrow functions
const arrowArgs = (...args) => {
    console.log(args);  // ✅ use rest params instead
};
arrowArgs(1, 2, 3);  // [1, 2, 3]

// ─── TRAP 1 : PRIMITIVE — PASS BY VALUE ───────
console.log("\n─── Primitive by value ───");

function updateAge(age) {
    age = 30;           // local copy only!
    console.log("Inside:", age);  // 30
}
let myAge = 20;
updateAge(myAge);
console.log("Outside:", myAge);  // 20 — unchanged!
// Like giving a PHOTOCOPY — original safe ✅

// ─── TRAP 2 : OBJECT — PASS BY REFERENCE ──────
console.log("\n─── Object by reference ───");

function updateName(user) {
    user.name = "Rahul";  // modifies ORIGINAL!
}
let person = { name: "Vaibhav" };
updateName(person);
console.log(person.name);  // "Rahul" ← original changed!
// Like giving the ADDRESS of house — changes are real ✅

// ─── REAL PATTERN : VALIDATE ARGS ─────────────
console.log("\n─── Validate args ───");

function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both must be numbers";
    }
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}
console.log(divide(10, 2));    // 5
console.log(divide(10, 0));    // "Cannot divide by zero"
console.log(divide(10, "a"));  // "Both must be numbers"

// ─── CHEATSHEET ───────────────────────────────
// Parameters → variables in definition
// Arguments  → values passed when calling
// Extra args → ignored
// Missing args → undefined — NOT an error
// number + undefined → NaN
// Primitive → pass by value → original safe
// Object → pass by reference → original changes!
// arguments object → array-like but NOT real array
// arguments → doesn't work in arrow functions