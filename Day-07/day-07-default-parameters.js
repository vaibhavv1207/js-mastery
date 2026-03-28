// ============================================
// DAY 06 — Default Parameters
// Author  : Vaibhav
// Topic   : default params, ES6, traps
// ============================================

// ─── OLD WAY vs NEW WAY ───────────────────────
console.log("─── Old vs New ───");

// Old way — manually check
function greetOld(name) {
    if (name === undefined) name = "Guest";
    console.log(`Hello ${name}!`);
}

// New way — default params
function greet(name = "Guest") {
    console.log(`Hello ${name}!`);
}

greet("Vaibhav");  // "Hello Vaibhav!"
greet();           // "Hello Guest!"

// ─── MULTIPLE DEFAULTS ────────────────────────
console.log("\n─── Multiple defaults ───");

function createUser(name = "Anonymous", age = 18, city = "Delhi") {
    console.log(`${name}, ${age}, ${city}`);
}
createUser("Vaibhav", 20, "Mumbai");  // Vaibhav, 20, Mumbai
createUser("Rahul");                   // Rahul, 18, Delhi
createUser();                          // Anonymous, 18, Delhi

// ─── TRAP 1 : ONLY UNDEFINED TRIGGERS ─────────
console.log("\n─── Only undefined triggers ───");

function test(a = 10) {
    console.log(a);
}
test(5);          // 5     — arg provided
test();           // 10    — no arg → default
test(undefined);  // 10    — undefined → default ✅
test(null);       // null  — null NOT undefined → no default!
test(0);          // 0     — 0 NOT undefined → no default!
test("");         // ""    — "" NOT undefined → no default!
test(false);      // false — false NOT undefined → no default!

// ─── TRAP 2 : NULL IN MATH ────────────────────
console.log("\n─── null in math ───");

function add(a, b = 10) {
    return a + b;
}
console.log(add(5));           // 15 — b=10
console.log(add(5, 3));        // 8
console.log(add(5, undefined)); // 15 — undefined triggers default
console.log(add(5, null));      // 5  ← null=0 in math, 5+0=5!
// null is NOT a string — no concatenation!

// ─── TRAP 3 : DEFAULT USES PREVIOUS PARAM ─────
console.log("\n─── Default uses previous param ───");

function multiply(a, b = a * 2) {
    return a + b;
}
console.log(multiply(5));     // 15 — b=5*2=10, 5+10=15
console.log(multiply(5, 3));  // 8  — b=3, 5+3=8

function testAB(a = 5, b = a * 2) {
    return a + b;
}
console.log(testAB());      // 15 — a=5, b=10
console.log(testAB(3));     // 9  — a=3, b=6
console.log(testAB(3, 4));  // 7  — a=3, b=4

// ─── TRAP 4 : ORDER MATTERS ───────────────────
console.log("\n─── Order matters ───");

// Always put defaults at END
function good(a, b = 10) {
    return a + b;
}
console.log(good(5));     // 15
console.log(good(5, 3));  // 8

// ─── TRAP 5 : DEFAULT OBJECT ──────────────────
console.log("\n─── Default object ───");

// Without default — crashes
// function bad(user) { console.log(user.name); }
// bad();  // ❌ TypeError

// With default — safe
function getUser(user = {}) {
    console.log(user.name);  // undefined — no crash ✅
}
getUser();                         // undefined — safe
getUser({ name: "Vaibhav" });      // "Vaibhav"

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// API call
function fetchData(url, method = "GET", timeout = 3000) {
    console.log(`${method} → ${url} (${timeout}ms)`);
}
fetchData("https://api.example.com");           // GET → ... (3000ms)
fetchData("https://api.example.com", "POST");   // POST → ... (3000ms)

// Price calculator
function calculatePrice(price, discount = 0, tax = 18) {
    let discounted = price - (price * discount / 100);
    let taxed = discounted + (discounted * tax / 100);
    return taxed.toFixed(2);
}
console.log(calculatePrice(1000));         // 1180.00
console.log(calculatePrice(1000, 10));     // 1062.00
console.log(calculatePrice(1000, 10, 5)); // 945.00

// Array default
function count(arr = [], start = 1) {
    return arr.length + start;
}
console.log(count([1, 2, 3]));      // 4
console.log(count([1, 2, 3], 10));  // 13
console.log(count());               // 1

// ─── CHEATSHEET ───────────────────────────────
// default triggers ONLY on undefined — not null, 0, "", false
// null in math → 0 → 5 + null = 5 (not "5null"!)
// defaults can reference previous params
// always put defaults at END of param list
// default = {} → safe from crash when no arg passed