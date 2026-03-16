// ============================================
// DAY 02 — Data Types
// Author  : Vaibhav
// Topics  : Primitives, Reference, typeof,
//           Coercion, == vs ===, Falsy/Truthy
// ============================================

// ─── PART 1 : THE 8 DATA TYPES ───────────────

// PRIMITIVES — stores actual value
let userName    = "Vaibhav";          // String
let age         = 20;                 // Number
let isReady     = true;               // Boolean
let empty       = null;               // Null
let notDefined;                       // Undefined
let uniqueId    = Symbol("id");       // Symbol
let bigNumber   = 9999999999999n;     // BigInt

// NON-PRIMITIVE — stores reference (address)
let user        = { name: "Vaibhav" };  // Object
let numbers     = [1, 2, 3];            // Array (is an Object)
let greet       = function() {};        // Function (is an Object)

console.log("─── 8 Data Types ───");
console.log(userName, age, isReady, empty, notDefined, uniqueId, bigNumber);
console.log(user, numbers, greet);


// ─── PART 2 : PRIMITIVE vs REFERENCE ─────────

console.log("\n─── Primitive vs Reference ───");

// PRIMITIVE — copied by VALUE
let a = 10;
let b = a;      // b gets a COPY
b = 20;
console.log("Primitive:");
console.log("a =", a);   // 10 — unchanged
console.log("b =", b);   // 20

// REFERENCE — copied by ADDRESS
let user1 = { name: "Vaibhav" };
let user2 = user1;        // user2 points to SAME object
user2.name = "Rahul";
console.log("\nReference:");
console.log("user1.name =", user1.name);  // "Rahul" — BOTH changed!
console.log("user2.name =", user2.name);  // "Rahul"

// HOW TO COPY AN OBJECT PROPERLY (bonus — interview asked)
let user3 = { name: "Vaibhav" };
let user4 = { ...user3 };   // spread operator creates a NEW copy
user4.name = "Rahul";
console.log("\nProper Copy:");
console.log("user3.name =", user3.name);  // "Vaibhav" — unchanged!
console.log("user4.name =", user4.name);  // "Rahul"


// ─── PART 3 : typeof OPERATOR ─────────────────

console.log("\n─── typeof ───");
console.log(typeof "Vaibhav");      // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof Symbol());       // "symbol"
console.log(typeof 9999n);          // "bigint"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"  ← array is object!
console.log(typeof function(){});   // "function"

// 🚨 FAMOUS BUG — typeof null
console.log("\ntypeof null =", typeof null);  // "object" ← WRONG! historic bug
// null is a PRIMITIVE — not an object
// correct way to check for null:
let val = null;
console.log("val === null:", val === null);   // true ✅


// ─── PART 4 : TYPE COERCION ───────────────────

console.log("\n─── Type Coercion ───");

// + operator — tricky
console.log("5" + 2);        // "52"  — concat (string wins)
console.log("5" - 2);        // 3     — math   (- forces number)
console.log("5" * 2);        // 10    — math
console.log(true + 1);       // 2     — true = 1
console.log(false + 1);      // 1     — false = 0
console.log(null + 1);       // 1     — null = 0
console.log(undefined + 1);  // NaN   — can't convert

// Left to right evaluation
console.log("\nLeft to right:");
console.log(1 + 2 + "3");    // "33"  → (1+2)=3 → 3+"3"="33"
console.log("1" + 2 + 3);    // "123" → "1"+2="12" → "12"+3="123"


// ─── PART 5 : == vs === ───────────────────────

console.log("\n─── == vs === ───");

// == loose equality — allows coercion
console.log(5 == "5");            // true  — "5" converted to 5
console.log(0 == false);          // true  — false converted to 0
console.log(null == undefined);   // true  — special JS rule

// === strict equality — NO coercion
console.log(5 === "5");           // false — different types
console.log(0 === false);         // false — different types
console.log(null === undefined);  // false — different types

// RULE: Always use === in real code


// ─── PART 6 : FALSY & TRUTHY ──────────────────

console.log("\n─── Falsy & Truthy ───");

// THE 6 FALSY VALUES — memorize these
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(val => {
    console.log(`${String(val)} is falsy:`, !val);
});

// TRUTHY examples
console.log("\nTruthy values:");
console.log(Boolean("0"));   // true  — non-empty string
console.log(Boolean([]));    // true  — empty array
console.log(Boolean({}));    // true  — empty object
console.log(Boolean(-1));    // true  — non-zero number

// PRACTICAL USE
let inputName = "";
if (inputName) {
    console.log("Has name");
} else {
    console.log("No name entered");  // this runs — "" is falsy
}


// ─── INTERVIEW CHEATSHEET ─────────────────────
// Primitives  : String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Reference   : Object (Arrays + Functions are Objects)
// typeof null : "object" ← historic bug from 1995, null is actually primitive
// Coercion    : + with string = concat | - * / = forces number
// ==          : loose, allows coercion  | === : strict, no coercion
// 6 Falsy     : false, 0, "", null, undefined, NaN
// Truthy trap : "0" [] {} -1 are ALL truthy