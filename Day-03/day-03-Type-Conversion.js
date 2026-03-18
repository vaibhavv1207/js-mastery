// ============================================
// DAY 03 — Type Conversion
// Author  : Vaibhav
// Topic   : Explicit vs Implicit conversion
// ============================================

// ─── EXPLICIT : STRING() ──────────────────────
console.log("─── String() ───");
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(String(false));      // "false"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
console.log(String([1,2,3]));    // "1,2,3"

// ─── EXPLICIT : NUMBER() ──────────────────────
console.log("\n─── Number() ───");
console.log(Number("123"));      // 123
console.log(Number(""));         // 0
console.log(Number(" "));        // 0
console.log(Number("123abc"));   // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Number([]));         // 0
console.log(Number([1]));        // 1
console.log(Number([1,2]));      // NaN

// ─── EXPLICIT : BOOLEAN() ─────────────────────
console.log("\n─── Boolean() ───");
// FALSY values
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
// TRUTHY values
console.log(Boolean("Hello"));   // true
console.log(Boolean(1));         // true
console.log(Boolean([]));        // true  ← empty array truthy!
console.log(Boolean({}));        // true  ← empty object truthy!

// ─── PARSEINT & PARSEFLOAT ────────────────────
console.log("\n─── parseInt / parseFloat ───");
console.log(parseInt("123abc"));    // 123 — stops at letter
console.log(parseInt("abc123"));    // NaN — starts with letter
console.log(parseInt("12.99"));     // 12  — cuts decimal
console.log(parseFloat("12.99"));   // 12.99 — keeps decimal
console.log(parseInt("0xFF", 16));  // 255 — hex to decimal

// ─── IMPLICIT : + OPERATOR ────────────────────
console.log("\n─── Implicit + ───");
console.log(5 + "3");          // "53"  — number to string
console.log("5" + 3);          // "53"
console.log(true + "1");       // "true1"
console.log(null + "test");    // "nulltest"

// ─── IMPLICIT : - * / OPERATORS ───────────────
console.log("\n─── Implicit - * / ───");
console.log("10" - 5);         // 5   — string to number
console.log("10" * 2);         // 20  — string to number
console.log("10" / 2);         // 5   — string to number
console.log("abc" - 1);        // NaN — can't convert
console.log(true - 1);         // 0   — true = 1
console.log(false * 5);        // 0   — false = 0
console.log(null * 5);         // 0   — null = 0
console.log(undefined * 5);    // NaN — undefined can't convert

// ─── TRAP : UNARY + OPERATOR ──────────────────
console.log("\n─── Unary + ───");
console.log(+"123");       // 123
console.log(+true);        // 1
console.log(+false);       // 0
console.log(+null);        // 0
console.log(+undefined);   // NaN
console.log(+"");           // 0
console.log(+"abc");        // NaN

// ─── TRAP : CONVERSION CHAIN ──────────────────
console.log("\n─── Conversion chain ───");
console.log(+"" + +"");        // 0   → 0 + 0
console.log(+[] + +[]);        // 0   → 0 + 0
console.log(+[] + +{});        // NaN → 0 + NaN
console.log(+"1" + +"2");      // 3   → 1 + 2

// ─── NUMBER CONVERSION CHEATSHEET ─────────────
console.log("\n─── Cheatsheet check ───");
let values = ["", " ", "123", "123abc", true, false, null, undefined, [], [1], [1,2]];
values.forEach(val => {
    console.log(`Number(${JSON.stringify(val)}) = ${Number(val)}`);
});

// ─── CHEATSHEET ───────────────────────────────
// String()      → converts anything to string
// Number()      → "" → 0 | "123abc" → NaN | null → 0 | undefined → NaN
// Boolean()     → 6 falsy: 0, "", null, undefined, NaN, false
// parseInt()    → extracts integer, stops at letter
// parseFloat()  → extracts decimal number
// +"123"        → same as Number("123") — unary + trick
// + operator    → if either side is string → concat
// - * /         → always forces number conversion
// [] and {}     → always TRUTHY in Boolean()