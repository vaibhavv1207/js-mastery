// ============================================
// CHALLENGE 01 — Variable Swap
// Concepts : Variables, Operators
// Level    : 🟢 Easy
// Score    : 7/10
// ============================================

// ─── METHOD 1 : USING SUM ─────────────────────
console.log("─── Method 1: Sum ───");

let a = 20;
let b = 10;

let sum = a + b;  // store sum first
a = sum - a;      // 30 - 20 = 10
b = sum - b;      // 30 - 10 = 20

console.log(a);   // 10 ✅
console.log(b);   // 20 ✅

// ─── METHOD 2 : DESTRUCTURING (ES6) ───────────
console.log("\n─── Method 2: Destructuring ───");

let x = 20;
let y = 10;

[x, y] = [y, x];  // most modern way

console.log(x);   // 10 ✅
console.log(y);   // 20 ✅

// ─── METHOD 3 : XOR (most impressive) ─────────
console.log("\n─── Method 3: XOR ───");

let p = 20;
let q = 10;

p = p ^ q;
q = p ^ q;
p = p ^ q;

console.log(p);   // 10 ✅
console.log(q);   // 20 ✅

// ─── MISTAKE TO AVOID ─────────────────────────
// let a = 20, b = 10;
// c = (a+b) - a;   // ❌ c not declared with let
// b = (a+b) - b;   // ❌ b already changed — wrong result
// Always store sum FIRST before modifying variables