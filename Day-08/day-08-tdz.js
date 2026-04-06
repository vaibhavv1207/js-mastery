// ============================================
// DAY 08 — Temporal Dead Zone (TDZ)
// Author  : Vaibhav
// Topic   : TDZ, let, const, hoisting phases
// ============================================

// ─── WHAT IS TDZ ──────────────────────────────
// Period between hoisting and declaration line
// Variable EXISTS in memory but CANNOT be accessed
// let/const → TDZ | var → no TDZ (initialized as undefined)

// ─── VAR vs LET vs CONST ──────────────────────
console.log("─── var vs let vs const ───");

console.log(a);  // undefined ✅ — var no TDZ
// console.log(b);  // ❌ ReferenceError — let TDZ!
// console.log(c);  // ❌ ReferenceError — const TDZ!
var a = 10;
let b = 20;
const c = 30;
console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 30

// ─── TDZ VISUALIZED ───────────────────────────
// Start of scope
// │← TDZ zone for x (exists but can't touch!)
// │  console.log(x); ❌ ReferenceError
// let x = 10;  ← TDZ ends here
// │  console.log(x); ✅ 10
// End of scope

// ─── TRAP 1 : TDZ IN FUNCTIONS ────────────────
console.log("\n─── TDZ in functions ───");

function test() {
    // console.log(x);  // ❌ ReferenceError — TDZ!
    let x = 10;
    console.log(x);  // 10 ✅
}
test();

// ─── TRAP 2 : TDZ IN BLOCKS ───────────────────
console.log("\n─── TDZ in blocks ───");

{
    // console.log(y);  // ❌ ReferenceError — TDZ!
    let y = 20;
    console.log(y);  // 20 ✅
}

// ─── TRAP 3 : TYPEOF IN TDZ ───────────────────
console.log("\n─── typeof in TDZ ───");

console.log(typeof undeclared);  // "undefined" ✅ — safe!
// console.log(typeof z);        // ❌ ReferenceError — NOT safe in TDZ!
let z = 10;
console.log(typeof z);           // "number" ✅

// ─── TRAP 4 : SNEAKIEST TDZ TRAP ──────────────
console.log("\n─── Sneakiest trap ───");

let x = "global";
{
    // console.log(x);  // ❌ ReferenceError — NOT "global"!
    // Block has own let x → creates TDZ from block start
    // Global x is IGNORED inside this block!
    let x = "block";
    console.log(x);  // "block" ✅
}
console.log(x);  // "global" ✅

// KEY: if block has own let x → TDZ applies from BLOCK START
// even if global x exists — local declaration creates TDZ!

// ─── TRAP 5 : TYPEOF RETURNS NUMBER NOT INTEGER ─
console.log("\n─── typeof numbers ───");

var num1 = 1;
let num2 = 2;
console.log(typeof num1);  // "number" ← not "integer"!
console.log(typeof num2);  // "number" ← not "integer"!
// JS has NO integer type — all numbers are "number"

// ─── TRAP 6 : DEFAULT PARAMS TDZ ──────────────
console.log("\n─── Default params TDZ ───");

// function bad(a = b, b = 2) {}  // ❌ b in TDZ when a uses it!

function good(a = 2, b = a * 2) {  // ✅ a initialized first
    return a + b;
}
console.log(good());      // 6  — a=2, b=4
console.log(good(3));     // 9  — a=3, b=6
console.log(good(3, 4));  // 7  — a=3, b=4

// ─── THREE PHASES ─────────────────────────────
console.log("\n─── Three phases ───");

// Phase 1 — HOISTING (before code runs)
// Variable created in memory — NOT initialized
// Accessing = ReferenceError

// Phase 2 — TDZ (start of scope to declaration)
// Variable EXISTS but DEAD — can't touch!

// Phase 3 — INITIALIZED (after declaration line)
// Variable alive — can read and write!

// ─── WHY TDZ EXISTS ───────────────────────────
// Prevents confusing var behavior:
// console.log(x);  // undefined ← confusing with var
// var x = 10;

// With let — clear error:
// console.log(y);  // ReferenceError ← obvious bug!
// let y = 10;

// TDZ makes JS more predictable and bug-free ✅

// ─── CHEATSHEET ───────────────────────────────
// var     → hoisted + initialized as undefined → no TDZ
// let     → hoisted + NOT initialized → TDZ until declaration
// const   → hoisted + NOT initialized → TDZ until declaration
// typeof  → safe for undeclared | NOT safe in TDZ
// block with own let → TDZ from BLOCK START — ignores outer!
// typeof  → returns "number" not "integer" — no integer in JS
// TDZ exists → prevent confusing undefined bugs from var