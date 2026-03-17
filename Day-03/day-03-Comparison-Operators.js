// ============================================
// DAY 03 — Comparison Operators
// Author  : Vaibhav
// Topic   : ==, ===, !=, !==, >, <, >=, <=
// ============================================

// ─── BASIC COMPARISON ─────────────────────────
console.log("─── Basic ───");
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false
console.log(5 != 3);    // true
console.log(5 !== "5"); // true

// ─── == vs === ────────────────────────────────
console.log("\n─── == vs === ───");

// == loose — converts types
console.log(5 == "5");      // true
console.log(0 == false);    // true
console.log(1 == true);     // true
console.log("" == false);   // true
console.log(null == undefined); // true — special rule

// === strict — no conversion
console.log(5 === "5");     // false
console.log(0 === false);   // false
console.log(1 === true);    // false
console.log(null === undefined); // false

// ─── TRAP 1 : NULL COMPARISONS ────────────────
console.log("\n─── null traps ───");
console.log(null == undefined);  // true  — only these two
console.log(null == 0);          // false — null != 0
console.log(null == false);      // false — null != false
console.log(null === undefined); // false — strict

// ─── TRAP 2 : NaN COMPARISONS ─────────────────
console.log("\n─── NaN traps ───");
console.log(NaN == NaN);    // false — NaN never equals itself
console.log(NaN === NaN);   // false
console.log(NaN != NaN);    // true
console.log(isNaN(NaN));    // true ✅ correct way to check

// ─── TRAP 3 : STRING COMPARISON ───────────────
console.log("\n─── String comparison ───");
console.log("a" > "A");    // true  — lowercase > uppercase
console.log("b" > "a");    // true  — b comes after a
console.log("10" > "9");   // false — "1" vs "9" char by char
console.log(10 > 9);       // true  — number comparison

// ─── TRAP 4 : OBJECT/ARRAY COMPARISON ─────────
console.log("\n─── Object/Array comparison ───");
console.log([] == []);     // false — different references
console.log({} == {});     // false — different references
console.log([] == false);  // true  — coercion: []→""→0, false→0

// ─── TRAP 5 : THE FAMOUS [] == ![] ────────────
console.log("\n─── Mind bender ───");
console.log([] == ![]);
// Step by step:
// ![] → false (array is truthy, ! flips it)
// [] == false
// [] → "" → 0
// false → 0
// 0 == 0 → true ✅

// ─── CHEATSHEET ───────────────────────────────
// ==          → loose, converts types before comparing
// ===         → strict, no conversion, always use this
// null        → only == undefined, nothing else
// NaN         → never equals anything including itself
// "10" > "9"  → false (char comparison, "1" < "9")
// [] == []    → false (different references)
// [] == false → true (coercion trap)
// [] == ![]   → true (most famous JS trap)