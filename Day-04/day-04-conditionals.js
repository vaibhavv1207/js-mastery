// ============================================
// DAY 04 — Conditionals: if, else if, else
// Author  : Vaibhav
// Topic   : Decision making in JS
// ============================================

// ─── BASIC IF ELSE ────────────────────────────
console.log("─── Basic if/else ───");

let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// "Adult"

// ─── ELSE IF CHAIN ────────────────────────────
console.log("\n─── else if chain ───");

let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}
// "Grade C"

// ─── TRAP 1 : FIRST TRUE WINS ─────────────────
console.log("\n─── First true wins ───");

let x = 100;
if (x > 10) {
    console.log("A");       // runs — first true condition
} else if (x > 50) {
    console.log("B");       // skipped — even though true!
} else if (x > 90) {
    console.log("C");       // skipped — even though true!
} else {
    console.log("D");
}

// ─── TRAP 2 : ASSIGNMENT IN CONDITION ─────────
console.log("\n─── Assignment trap ───");

let a = 5;
if (a = 0) {                    // assigns 0 — falsy!
    console.log("Inside if");
} else {
    console.log("Inside else"); // runs — 0 is falsy
}
console.log(a);                 // 0 — a was changed!

// Correct way
let b = 5;
if (b === 0) {                  // comparison — safe
    console.log("b is zero");
} else {
    console.log("b is not zero"); // runs
}

// ─── TRAP 3 : TRUTHY FALSY IN CONDITIONS ──────
console.log("\n─── Truthy/Falsy ───");

let name = "";
if (name) {
    console.log("Name exists");
} else {
    console.log("No name");     // runs — "" is falsy
}

let arr = [];
if (arr) {
    console.log("Array exists"); // runs — [] is truthy!
} else {
    console.log("No array");
}

// ─── TRAP 4 : MISSING BRACES ──────────────────
console.log("\n─── Braces trap ───");

// Without braces — dangerous!
// if (true)
//     console.log("Line 1");  // inside if
//     console.log("Line 2");  // ALWAYS runs — outside if!

// Always use braces
if (true) {
    console.log("Line 1");     // inside if
    console.log("Line 2");     // inside if
}

// ─── NESTED IF ────────────────────────────────
console.log("\n─── Nested if ───");

let userAge = 20;
let hasID = false;

if (userAge >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("No ID — rejected");  // runs
    }
} else {
    console.log("Too young");
}

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Login check
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Admin dashboard");
} else if (isLoggedIn) {
    console.log("User dashboard");  // runs
} else {
    console.log("Please login");
}

// ─── CHEATSHEET ───────────────────────────────
// Only FIRST true condition runs — rest are skipped
// if(a = 0)  → assigns 0 → falsy → else runs
// if(a = 1)  → assigns 1 → truthy → if runs
// []  → truthy in conditions
// {}  → truthy in conditions
// ""  → falsy in conditions
// 0   → falsy in conditions
// Always use === not = inside conditions
// Always use curly braces even for single lines