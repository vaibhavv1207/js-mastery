// ============================================
// CHALLENGE 02 — Type Checker
// Concepts : typeof, ==, ===, Falsy values
// Level    : 🟢 Easy
// Score    : 8.5/10
// ============================================

let a = 0;
let b = false;
let c = "";
let d = null;
let e = undefined;

// ─── PART 1 : TYPEOF ──────────────────────────
console.log("─── typeof ───");
console.log(typeof a);   // "number"
console.log(typeof b);   // "boolean"
console.log(typeof c);   // "string"
console.log(typeof d);   // "object" ← historic bug! null is primitive
console.log(typeof e);   // "undefined"

// ─── PART 2 : == vs === ───────────────────────
console.log("\n─── == vs === ───");
console.log(a == b);    // true  — 0 == false (coercion)
console.log(a === b);   // false — different types
console.log(b == c);    // true  — false == "" (both become 0)
console.log(b === c);   // false — different types
console.log(c == d);    // false — "" != null
console.log(c === d);   // false — different types
console.log(d == e);    // true  — null == undefined (special rule)
console.log(d === e);   // false — different types

// ─── PART 3 : FALSY CHECK ─────────────────────
console.log("\n─── Falsy check ───");

let values = [a, b, c, d, e];

for (let val of values) {
    if (!val) {   // ✅ correct — !val catches ALL falsy values
        console.log(`${String(val)} is falsy`);
    }
}
// 0 is falsy
// false is falsy
//  is falsy
// null is falsy
// undefined is falsy

// ─── MISTAKE TO AVOID ─────────────────────────
// if (val === false) ❌ — only catches boolean false
// if (!val)          ✅ — catches all 6 falsy values

// ─── THE 6 FALSY VALUES ───────────────────────
// false, 0, "", null, undefined, NaN