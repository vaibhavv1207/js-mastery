// ============================================
// DAY 03 — Logical Operators
// Author  : Vaibhav
// Topic   : &&, ||, !, ??
// ============================================

// ─── && AND OPERATOR ──────────────────────────
console.log("─── && AND ───");
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false

// Short circuit — stops at first FALSY
console.log(0 && "Hello");    // 0       — stopped at 0
console.log("" && "Hello");   // ""      — stopped at ""
console.log("Hi" && "Hello"); // "Hello" — both truthy, returns last
console.log(null && "Hello"); // null    — stopped at null

// ─── || OR OPERATOR ───────────────────────────
console.log("\n─── || OR ───");
console.log(true || false);   // true
console.log(false || false);  // false

// Short circuit — stops at first TRUTHY
console.log(0 || "Hello");               // "Hello"
console.log("Hi" || "Hello");            // "Hi"
console.log(null || undefined || "found"); // "found"

// Default value pattern
let userName = "";
let displayName = userName || "Guest";
console.log(displayName);  // "Guest"

// BUG with || and 0
let age = 0;
console.log(age || 18);    // 18 ← WRONG! 0 is valid age

// ─── ?? NULLISH COALESCING ────────────────────
console.log("\n─── ?? Nullish ───");

// Only triggers on null or undefined
console.log(age ?? 18);    // 0  ← CORRECT! 0 is not null/undefined

let name = "";
console.log(name || "Guest");  // "Guest" — may be wrong
console.log(name ?? "Guest");  // ""      — keeps empty string

let val = null;
console.log(val ?? "default");      // "default"

let val2 = undefined;
console.log(val2 ?? "default");     // "default"

// ?? skips ONLY null and undefined — NOT 0, "", false
let a = null;
let b = undefined;
let c = 0;
let d = "Vaibhav";
console.log(a ?? b ?? c ?? d);  // 0 ← stops at c because 0 is valid

// ─── ! NOT OPERATOR ───────────────────────────
console.log("\n─── ! NOT ───");
console.log(!true);    // false
console.log(!false);   // true
console.log(!0);       // true  — 0 is falsy
console.log(!"");      // true  — "" is falsy
console.log(!"Hi");    // false — truthy
console.log(!null);    // true  — null is falsy

// !! Double NOT — convert to boolean
console.log("\n─── !! Double NOT ───");
console.log(!!0);          // false
console.log(!!"");         // false
console.log(!!null);       // false
console.log(!!undefined);  // false
console.log(!!1);          // true
console.log(!!"Hello");    // true
console.log(!![]);         // true  — array is truthy!

// ─── PRECEDENCE ───────────────────────────────
console.log("\n─── Precedence ───");
// ! first → && second → || last
console.log(true || false && false);  // true
console.log(!true || false);          // false
console.log(!(true || false));        // false

// ─── REAL CODE PATTERNS ───────────────────────
console.log("\n─── Real patterns ───");

// Guard pattern with &&
let user = { name: "Vaibhav" };
user && console.log(user.name);  // "Vaibhav"

// Default with ??
let score = null;
let finalScore = score ?? 0;
console.log(finalScore);  // 0

// Chaining ??
console.log(null ?? undefined ?? "found");  // "found"

// ─── CHEATSHEET ───────────────────────────────
// &&   → returns first FALSY or last value
// ||   → returns first TRUTHY or last value
// ??   → returns right side ONLY if left is null/undefined
// !    → flips boolean
// !!   → converts any value to boolean
// ||   vs ?? → || skips 0,"",false | ?? only skips null/undefined