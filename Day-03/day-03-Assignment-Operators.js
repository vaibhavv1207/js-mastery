// ============================================
// DAY 03 — Assignment Operators
// Author  : Vaibhav
// Topic   : =, +=, -=, *=, /=, %=, **=
// ============================================

// ─── BASIC ASSIGNMENT OPERATORS ───────────────
console.log("─── Basic ───");
let a = 10;
console.log(a);    // 10

a += 5;
console.log(a);    // 15

a -= 3;
console.log(a);    // 12

a *= 2;
console.log(a);    // 24

a /= 4;
console.log(a);    // 6

a %= 4;
console.log(a);    // 2

a **= 3;
console.log(a);    // 8

// ─── TRAP 1 : += WITH STRINGS ─────────────────
console.log("\n─── += with strings ───");
let str = "Hello";
str += " World";
console.log(str);          // "Hello World"

// number + string = string forever
let num = 5;
num += "3";
console.log(num);          // "53"
console.log(typeof num);   // "string" ← changed type!

// ─── TRAP 2 : CHAINED ASSIGNMENT ──────────────
console.log("\n─── Chained assignment ───");
let x, y, z;
x = y = z = 10;    // right to left: z=10, y=10, x=10
console.log(x);    // 10
console.log(y);    // 10
console.log(z);    // 10

// ─── TRAP 3 : ASSIGNMENT INSIDE CONDITION ─────
console.log("\n─── Assignment in if ───");
let b = 10;
if (b = 0) {                      // assigns 0 — not comparison!
    console.log("Inside if");
} else {
    console.log("Inside else");   // runs — 0 is falsy
}
console.log(b);                   // 0 — b was changed!

// CORRECT way — always use ===
if (b === 0) {
    console.log("b is zero");     // this is safe comparison
}

// ─── TRAP 4 : /= WITH ZERO ────────────────────
console.log("\n─── Division edge cases ───");
let c = 10;
c /= 0;
console.log(c);    // Infinity

let d = 0;
d /= 0;
console.log(d);    // NaN

// Infinity + anything = Infinity
let e = 10;
e /= 0;
e += 5;
console.log(e);    // Infinity ← not NaN!

// ─── CHEATSHEET ───────────────────────────────
// +=        → adds AND assigns in one step
// num += "3"→ becomes "53" string — type changes!
// x=y=z=10  → right to left assignment
// if(a = 0) → assigns 0, condition is FALSY → goes to else
// n /= 0    → Infinity
// 0 /= 0    → NaN
// Infinity + 5 → Infinity (not NaN!)