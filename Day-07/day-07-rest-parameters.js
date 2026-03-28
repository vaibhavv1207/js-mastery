// ============================================
// DAY 06 — Rest Parameters
// Author  : Vaibhav
// Topic   : ...rest, real array, traps
// ============================================

// ─── OLD WAY vs REST PARAMS ───────────────────
console.log("─── Old vs Rest ───");

// Old way — arguments object (not real array)
function sumOld() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumOld(1, 2, 3, 4, 5));  // 15

// New way — rest params (real array!)
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(10, 20));          // 30
console.log(sum());                // 0

// ─── REST WITH REGULAR PARAMS ─────────────────
console.log("\n─── Mixed params ───");

function greet(firstName, lastName, ...hobbies) {
    console.log(`${firstName} ${lastName}`);
    console.log("Hobbies:", hobbies);
}
greet("Vaibhav", "Singh", "coding", "gaming", "reading");
// Vaibhav Singh
// Hobbies: ["coding", "gaming", "reading"]

function test(a, b, ...rest) {
    console.log(a);     // 1
    console.log(b);     // 2
    console.log(rest);  // [3, 4, 5]
}
test(1, 2, 3, 4, 5);

// ─── TRAP 1 : REST MUST BE LAST ───────────────
console.log("\n─── Rest must be last ───");

// function bad(...a, b) {}  // ❌ SyntaxError!

function good(a, ...b) {    // ✅ rest at end
    console.log(b);
}
good(1, 2, 3, 4);  // [2, 3, 4]

// ─── TRAP 2 : ONLY ONE REST ───────────────────
// function bad(...a, ...b) {}  // ❌ SyntaxError!
// Only ONE rest param allowed

// ─── TRAP 3 : REST IS ALWAYS ARRAY ───────────
console.log("\n─── Always array ───");

function single(a, ...rest) {
    console.log(rest);          // [] when no extra args
    console.log(Array.isArray(rest));  // true — real array!
}
single(1);      // [] — empty array not "nothing"!
single(1, 2);   // [2] — array with one item

// ─── TRAP 4 : REST vs SPREAD ──────────────────
console.log("\n─── Rest vs Spread ───");

// REST — in function DEFINITION — collects into array
function collect(...args) {
    console.log(args);  // [1, 2, 3]
}
collect(1, 2, 3);

// SPREAD — in function CALL — spreads array out
let nums = [1, 2, 3];
console.log(Math.max(...nums));  // 3

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Find max
function findMax(...nums) {
    let max = nums[0];
    for (let n of nums) {
        if (n > max) max = n;
    }
    return max;
}
console.log(findMax(3, 1, 8, 2, 9));  // 9

// Logger
function logger(level, ...messages) {
    console.log(`Messages: ${messages.length}`);
    for (let msg of messages) {
        console.log(`[${level}] ${msg}`);
    }
}
logger("INFO", "Started", "Ready", "Done");
// Messages: 3
// [INFO] Started
// [INFO] Ready
// [INFO] Done

// Merge arrays
function mergeArrays(...arrays) {
    let merged = [];
    for (let arr of arrays) {
        for (let item of arr) {
            merged.push(item);
        }
    }
    return merged;
}
console.log(mergeArrays([1,2], [3,4], [5,6]));
// [1, 2, 3, 4, 5, 6]

// Sum with reduce
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));   // 15
console.log(sumAll(10, 20, 30, 40));  // 100

// ─── CHEATSHEET ───────────────────────────────
// ...rest → collects remaining args into REAL array
// rest must be LAST param always
// only ONE rest param allowed
// rest always gives array — even empty [] or single [2]
// rest vs spread → same syntax, different context
// rest in definition → collects | spread in call → expands
// arguments → not real array | rest → real array ✅  