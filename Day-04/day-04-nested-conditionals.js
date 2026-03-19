// ============================================
// DAY 04 — Nested Conditionals
// Author  : Vaibhav
// Topic   : Nested if, else pairing, early return
// ============================================

// ─── BASIC NESTED IF ──────────────────────────
console.log("─── Basic nested ───");

let age = 20;
let hasID = true;
let hasMoney = true;

if (age >= 18) {
    if (hasID) {
        if (hasMoney) {
            console.log("Entry allowed");   // runs
        } else {
            console.log("No money");
        }
    } else {
        console.log("No ID");
    }
} else {
    console.log("Too young");
}

// ─── TRAP 1 : ELSE NEAREST IF ─────────────────
console.log("\n─── Else nearest if ───");

let a = 10;
let b = 5;

if (a > 5)
    if (b > 10)
        console.log("A");
    else
        console.log("B");   // belongs to inner if — runs
// "B"

// Always use braces to avoid this trap
if (a > 5) {
    if (b > 10) {
        console.log("A");
    } else {
        console.log("B");   // clear which if this belongs to
    }
}

// ─── TRAP 2 : FLATTEN DEEP NESTING ────────────
console.log("\n─── Flatten nesting ───");

let isLoggedIn   = true;
let isVerified   = true;
let hasPermission = true;
let isActive     = true;

// BAD way — deep nesting
if (isLoggedIn) {
    if (isVerified) {
        if (hasPermission) {
            if (isActive) {
                console.log("Access granted — nested way");
            }
        }
    }
}

// GOOD way — flatten with &&
if (isLoggedIn && isVerified && hasPermission && isActive) {
    console.log("Access granted — flat way");
}

// ─── TRAP 3 : EARLY RETURN ────────────────────
console.log("\n─── Early return ───");

// BAD — nested
function checkAgeBad(age) {
    if (age >= 18) {
        if (age <= 60) {
            console.log("Valid age");
        } else {
            console.log("Too old");
        }
    } else {
        console.log("Too young");
    }
}

// GOOD — early return
function checkAge(age) {
    if (age < 18) return console.log("Too young");
    if (age > 60) return console.log("Too old");
    console.log("Valid age");
}

checkAge(15);   // Too young
checkAge(65);   // Too old
checkAge(25);   // Valid age

// ─── REAL WORLD : LOGIN SYSTEM ────────────────
console.log("\n─── Login system ───");

let userLoggedIn = true;
let isAdmin      = false;
let isBanned     = false;

if (isBanned) {
    console.log("Account banned");
} else if (userLoggedIn && isAdmin) {
    console.log("Admin dashboard");
} else if (userLoggedIn) {
    console.log("User dashboard");   // runs
} else {
    console.log("Please login");
}

// ─── REAL WORLD : DELIVERY SYSTEM ─────────────
console.log("\n─── Delivery system ───");

let orderPlaced = true;
let isPaid      = true;
let inStock     = true;
let distance    = 15;

if (orderPlaced) {
    if (isPaid) {
        if (inStock) {
            if (distance <= 20) {
                console.log("Delivery in 2 days");  // runs
            } else {
                console.log("Delivery in 5 days");
            }
        } else {
            console.log("Out of stock");
        }
    } else {
        console.log("Payment pending");
    }
} else {
    console.log("No order placed");
}

// Same thing — flat with early return
function processOrder(orderPlaced, isPaid, inStock, distance) {
    if (!orderPlaced) return console.log("No order placed");
    if (!isPaid)      return console.log("Payment pending");
    if (!inStock)     return console.log("Out of stock");
    if (distance > 20) return console.log("Delivery in 5 days");
    console.log("Delivery in 2 days");
}
processOrder(true, true, true, 15);  // Delivery in 2 days

// ─── CHEATSHEET ───────────────────────────────
// else pairs with NEAREST if — always use braces
// deep nesting → flatten with && or ||
// early return → exit function early, keeps code flat
// real pattern → check failure conditions first, return early
// happy path → last line after all checks pass