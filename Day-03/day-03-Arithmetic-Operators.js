// ============================================
// DAY 03 — Arithmetic Operators
// Author  : Vaibhav
// Topic   : +, -, *, /, %, **, ++, --
// ============================================

// ─── BASIC OPERATORS ──────────────────────────
console.log("─── Basic ───");
console.log(10 + 5);   // 15
console.log(10 - 5);   // 5
console.log(10 * 5);   // 50
console.log(10 / 3);   // 3.3333...
console.log(10 % 3);   // 1
console.log(2 ** 10);  // 1024

// ─── MODULUS USE CASES ────────────────────────
console.log("\n─── Modulus ───");

// Even or Odd check
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");  // Odd

// Divisibility check
console.log(10 % 5);  // 0 — divisible
console.log(10 % 3);  // 1 — not divisible

// ─── PRE vs POST INCREMENT ────────────────────
console.log("\n─── ++ and -- ───");

// Post-increment — use first, then increment
let a = 5;
console.log(a++);  // 5 — old value printed
console.log(a);    // 6 — now incremented

// Pre-increment — increment first, then use
let b = 5;
console.log(++b);  // 6 — incremented first
console.log(b);    // 6

// Classic trap — assignment with post increment
let x = 10;
let y = x--;       // y gets 10, then x becomes 9
console.log(x);    // 9
console.log(y);    // 10

// Pre vs post in assignment
let p = 5;
let q = ++p;       // p increments first, q gets new value
console.log(p);    // 6
console.log(q);    // 6

let m = 5;
let n = m++;       // n gets old value, then m increments
console.log(m);    // 6
console.log(n);    // 5

// ─── DIVISION EDGE CASES ──────────────────────
console.log("\n─── Edge Cases ───");
console.log(5 / 0);    // Infinity
console.log(-5 / 0);   // -Infinity
console.log(0 / 0);    // NaN

// ─── NaN BEHAVIOR ─────────────────────────────
console.log("\n─── NaN ───");
console.log(typeof NaN);        // "number" ← confusing but true
console.log(NaN === NaN);       // false ← NaN never equals itself
console.log(isNaN(NaN));        // true ✅
console.log(Number.isNaN(NaN)); // true ✅ more reliable

// ─── OPERATOR PRECEDENCE ──────────────────────
console.log("\n─── Precedence ───");
console.log(2 + 3 * 4);    // 14 — * first
console.log((2 + 3) * 4);  // 20 — () first
console.log(2 ** 3 ** 2);  // 512 — right to left

// ─── CHEATSHEET ───────────────────────────────
// %         → remainder | use for even/odd, divisibility
// a++       → use then increment
// ++a       → increment then use
// 5/0       → Infinity (not an error!)
// 0/0       → NaN
// NaN===NaN → false ALWAYS — use isNaN() instead
// typeof NaN→ "number" ← historic quirk