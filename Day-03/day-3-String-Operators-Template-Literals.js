// ============================================
// DAY 03 — String Operators & Template Literals
// Author  : Vaibhav
// Topic   : +, template literals, escape chars
// ============================================

// ─── THREE WAYS TO CREATE STRINGS ─────────────
console.log("─── String creation ───");
let single   = 'Hello';
let double   = "Hello";
let backtick = `Hello`;
console.log(single, double, backtick);  // Hello Hello Hello

// ─── + CONCATENATION — old way ────────────────
console.log("\n─── Concatenation ───");
let firstName = "Vaibhav";
let lastName  = "Singh";
let fullName  = firstName + " " + lastName;
console.log(fullName);  // "Vaibhav Singh"

let age = 20;
console.log("Name: " + firstName + " Age: " + age);
// "Name: Vaibhav Age: 20"

// ─── TEMPLATE LITERALS — modern way ───────────
console.log("\n─── Template literals ───");
let name = "Vaibhav";
console.log(`Name: ${name} Age: ${age}`);
// "Name: Vaibhav Age: 20"

// ${} holds any expression
let a = 10;
let b = 20;
console.log(`Sum is ${a + b}`);                      // "Sum is 30"
console.log(`Is adult: ${age >= 18}`);               // "Is adult: true"
console.log(`${a > b ? "a wins" : "b wins"}`);       // "b wins"

// ─── TRAP 1 : + LEFT TO RIGHT ─────────────────
console.log("\n─── + trap ───");
let x = 5;
let y = 10;
console.log("Result: " + x + y);    // "Result: 510" ← concat!
console.log("Result: " + (x + y));  // "Result: 15"  ← brackets first
console.log(`Result: ${x + y}`);    // "Result: 15"  ← always safe

// ─── TRAP 2 : QUOTES INSIDE STRINGS ───────────
console.log("\n─── Quotes trap ───");
let msg1 = "He said \"Hello\"";     // escape
let msg2 = 'He said "Hello"';       // single outside
let msg3 = `He said "Hello"`;       // template literal
console.log(msg1);  // He said "Hello"
console.log(msg2);  // He said "Hello"
console.log(msg3);  // He said "Hello"

// ─── TRAP 3 : MULTIPLICATION ON STRINGS ───────
console.log("\n─── String * number ───");
console.log("Ha" * 3);         // NaN ← can't multiply!
console.log("Ha".repeat(3));   // "HaHaHa" ✅ use repeat()

// ─── ESCAPE CHARACTERS ────────────────────────
console.log("\n─── Escape chars ───");
console.log("Hello\nWorld");    // new line
console.log("Hello\tWorld");    // tab
console.log("C:\\Users\\vaibh"); // backslash

// ─── MULTI-LINE STRINGS ───────────────────────
console.log("\n─── Multi-line ───");
let modern = `Line 1
Line 2
Line 3`;
console.log(modern);

// ─── STRING COMPARISON ────────────────────────
console.log("\n─── String comparison ───");
console.log("apple" === "apple");  // true
console.log("Apple" === "apple");  // false — case sensitive!
console.log("b" > "a");            // true
console.log("abc" > "abb");        // true — char by char

// ─── CHEATSHEET ───────────────────────────────
// + with strings    → concat left to right — use () or ${}
// `${}`             → can hold any JS expression
// "Ha" * 3          → NaN — use .repeat(3) instead
// \n                → new line
// \t                → tab
// \\                → backslash
// "Apple" !== "apple" → strings are case sensitive