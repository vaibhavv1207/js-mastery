// ============================================
// DAY 03 — Ternary Operator
// Author  : Vaibhav
// Topic   : condition ? true : false
// ============================================

// ─── BASIC TERNARY ────────────────────────────
console.log("─── Basic ───");

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // "Adult"

let num = 10;
console.log(num % 2 === 0 ? "Even" : "Odd");  // "Even"

let score = 75;
console.log(score >= 50 ? "Pass" : "Fail");   // "Pass"

// ─── TERNARY vs IF/ELSE ───────────────────────
console.log("\n─── vs if/else ───");

let a = 10;

// if/else way
if (a > 5) {
    console.log("Big");
} else {
    console.log("Small");
}

// Ternary way — same result
console.log(a > 5 ? "Big" : "Small");  // "Big"

// ─── NESTED TERNARY ───────────────────────────
console.log("\n─── Nested ───");

let marks = 85;
let grade = marks >= 90 ? "A"
          : marks >= 80 ? "B"
          : marks >= 70 ? "C"
          : "F";
console.log(grade);  // "B"

// Step by step:
// marks >= 90 ? → 85 >= 90 → false
// marks >= 80 ? → 85 >= 80 → true → "B" ✅

// ─── TRAP 1 : FALSY IN CONDITION ──────────────
console.log("\n─── Falsy traps ───");

let userName = "";
let display = userName ? userName : "Guest";
console.log(display);  // "Guest" — "" is falsy

let count = 0;
let countResult = count ? count : "No items";
console.log(countResult);  // "No items" — 0 is falsy

// ─── TRAP 2 : TERNARY IN FUNCTIONS ────────────
console.log("\n─── In functions ───");

function getDiscount(isMember) {
    return isMember ? 20 : 5;
}
console.log(getDiscount(true));   // 20
console.log(getDiscount(false));  // 5

// ─── REAL CODE PATTERNS ───────────────────────
console.log("\n─── Real patterns ───");

// Login message
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please login");

// Theme toggle — used heavily in React
let isDark = true;
let theme = isDark ? "dark-mode" : "light-mode";
console.log(theme);  // "dark-mode"

// Max of two numbers
let x = 5;
let y = 10;
let max = x > y ? x : y;
console.log(max);  // 10

// Ternary + nullish
let val = null;
let output = val ? val : val ?? "final";
console.log(output);  // "final"

// ─── CHEATSHEET ───────────────────────────────
// condition ? valueIfTrue : valueIfFalse
// Nested ternary → first true condition wins, left to right
// Falsy values in condition → 0, "", null, undefined → goes to false side
// Use ternary for SHORT conditions — nested more than 2 levels = use if/else