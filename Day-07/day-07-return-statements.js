// ============================================
// DAY 07 — Return Statement
// Author  : Vaibhav
// Topic   : return, multiple returns, traps
// ============================================

// ─── BASIC RETURN ─────────────────────────────
console.log("─── Basic return ───");

function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);   // 8

// ─── RETURN EXITS IMMEDIATELY ─────────────────
console.log("\n─── Return exits ───");

function test(n) {
    if (n > 0) return "Positive";
    console.log("Never runs if n > 0");
    return "Not positive";
}
console.log(test(5));   // "Positive"
console.log(test(-1));  // "Not positive"

// ─── NO RETURN = UNDEFINED ────────────────────
console.log("\n─── No return ───");

function noReturn() {
    let x = 10;
}
console.log(noReturn());  // undefined

// ─── TRAP 1 : RETURN ON NEW LINE ──────────────
console.log("\n─── Return newline trap ───");

function getValue() {
    return      // ← JS inserts semicolon!
    42;         // never reached
}
console.log(getValue());  // undefined ← NOT "nothing"!
// console.log(undefined) prints "undefined" on screen

// Fix — always on same line
function getValueFixed() {
    return 42;  // ✅
}
console.log(getValueFixed());  // 42

// ─── TRAP 2 : CONSOLE.LOG vs RETURN ───────────
console.log("\n─── console.log vs return ───");

// console.log inside — prints but returns undefined
function badAdd(a, b) {
    console.log(a + b);  // prints 8
}
let r1 = badAdd(5, 3);  // 8 prints here
console.log(r1);         // undefined ← function returned nothing!
// Total output: 8 then undefined

// return — sends value back
function goodAdd(a, b) {
    return a + b;  // sends 8 back
}
let r2 = goodAdd(5, 3);
console.log(r2);  // 8 ✅

// ─── TRAP 3 : MULTIPLE RETURNS ────────────────
console.log("\n─── Multiple returns ───");

function check(n) {
    if (n > 0) return "Positive";
    if (n === 0) return "Zero";
    return "Negative";
    return "Never runs";  // dead code — never reached!
}
console.log(check(5));   // "Positive"
console.log(check(0));   // "Zero"
console.log(check(-3));  // "Negative"

// ─── TRAP 4 : RETURN IN LOOP ──────────────────
console.log("\n─── Return in loop ───");

function findNum(arr, target) {
    for (let num of arr) {
        if (num === target) return "Found!";  // exits function!
        console.log(num);                      // prints before target
    }
    return "Not found";
}
console.log(findNum([1, 2, 3, 4, 5], 3));
// 1
// 2
// Found! ← exits at 3, never checks 4 and 5

// ─── RETURN MULTIPLE VALUES ────────────────────
console.log("\n─── Return multiple ───");

// Return array
function minMax(a, b, c) {
    let min = a < b ? (a < c ? a : c) : (b < c ? b : c);
    let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return [min, max];
}
let mm = minMax(3, 1, 8);
console.log(mm[0]);  // 1 — min
console.log(mm[1]);  // 8 — max

// Return object
function getUser(name, age) {
    return { name: name, age: age };
}
let user = getUser("Vaibhav", 20);
console.log(user.name);  // "Vaibhav"
console.log(user.age);   // 20

// ─── CHEATSHEET ───────────────────────────────
// return exits function immediately — code after never runs
// no return → undefined
// return on new line → JS adds semicolon → undefined
// console.log(undefined) → prints "undefined" not blank!
// console.log inside ≠ return — both output separately
// return in loop → exits entire function not just loop
// dead code after return → never runs
// return array/object → send multiple values back