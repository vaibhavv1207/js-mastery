// ============================================
// DAY 09 — Array Transform Methods
// Author  : Vaibhav
// Topic   : map, reduce, flat, flatMap, join
// ============================================

// ─── MAP ──────────────────────────────────────
console.log("─── map ───");

let nums = [1, 2, 3, 4, 5];

let doubled  = nums.map(n => n * 2);
let squared  = nums.map(n => n * n);
let strings  = nums.map(n => `Item ${n}`);
let withIdx  = nums.map((n, i) => `${i}:${n}`);

console.log(doubled);   // [2, 4, 6, 8, 10]
console.log(squared);   // [1, 4, 9, 16, 25]
console.log(strings);   // ["Item 1", "Item 2"...]
console.log(withIdx);   // ["0:1", "1:2"...]
console.log(nums);      // [1,2,3,4,5] — UNCHANGED!

// ─── TRAP 1 : MAP SAME LENGTH ─────────────────
console.log("\n─── map same length trap ───");

let result1 = nums.map(n => {
    if (n > 3) return n * 2;
    // no return for others → undefined!
});
console.log(result1);  // [undefined, undefined, undefined, 8, 10]

// ─── REDUCE ───────────────────────────────────
console.log("\n─── reduce ───");

// Sum
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 15

// Step by step:
// acc=0,  curr=1 → 1
// acc=1,  curr=2 → 3
// acc=3,  curr=3 → 6
// acc=6,  curr=4 → 10
// acc=10, curr=5 → 15

// Product
let product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product);  // 120

// Max value
let max = nums.reduce((acc, curr) => curr > acc ? curr : acc, nums[0]);
console.log(max);  // 5

// Count occurrences
let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);  // { apple: 3, banana: 2, mango: 1 }

// ─── TRAP 2 : REDUCE WITHOUT INITIAL VALUE ────
console.log("\n─── reduce initial value ───");

let safe   = nums.reduce((acc, curr) => acc + curr, 0);   // ✅
// let danger = [].reduce((acc, curr) => acc + curr);     // ❌ TypeError!
let empty  = [].reduce((acc, curr) => acc + curr, 0);     // 0 ✅ safe

// ─── FLAT ─────────────────────────────────────
console.log("\n─── flat ───");

let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());           // [1, 2, 3, 4, [5, 6]] — 1 level
console.log(nested.flat(2));          // [1, 2, 3, 4, 5, 6]  — 2 levels
console.log(nested.flat(Infinity));   // flatten all levels!

// ─── FLATMAP ──────────────────────────────────
console.log("\n─── flatMap ───");

let arr = [1, 2, 3];
let result2 = arr.flatMap(n => [n, n * 2]);
console.log(result2);  // [1, 2, 2, 4, 3, 6]
// Same as arr.map(n => [n, n*2]).flat()

// ─── JOIN ─────────────────────────────────────
console.log("\n─── join ───");

let words = ["JS", "is", "awesome"];
console.log(words.join(" "));   // "JS is awesome"
console.log(words.join("-"));   // "JS-is-awesome"
console.log(words.join(""));    // "JSisawesome"
console.log(words.join());      // "JS,is,awesome" — default comma

// ─── TRAP 3 : MAP vs FOREACH ──────────────────
console.log("\n─── map vs forEach ───");

let arr2 = [1, 2, 3];
let mapResult     = arr2.map(n => n * 2);
let forEachResult = arr2.forEach(n => n * 2);
console.log(mapResult);      // [2, 4, 6] ← returns new array
console.log(forEachResult);  // undefined ← forEach never returns!

// ─── TRAP 4 : CHAINING ────────────────────────
console.log("\n─── Chaining ───");

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chainResult = nums2
    .filter(n => n % 2 === 0)   // [2, 4, 6, 8, 10]
    .map(n => n * 2)             // [4, 8, 12, 16, 20] ← ONE array!
    .reduce((acc, n) => acc + n, 0); // 60

console.log(chainResult);  // 60

// filter + map = ONE array not separate values!
let evensDoubled = nums2
    .filter(n => n % 2 === 0)
    .map(n => n * 2);
console.log(evensDoubled);  // [4, 8, 12, 16, 20] ← array!

// ─── CHEATSHEET ───────────────────────────────
// map()     → transforms each element → same length array
// reduce()  → reduces to single value → any type
// flat()    → flattens nested arrays  → new array
// flatMap() → map + flat in one step  → new array
// join()    → array to string         → string
// ALL of these → do NOT mutate original array
// map missing return → undefined for that element
// reduce empty array → always provide initial value!
// forEach → returns undefined — never use to transform!
// chaining → each method returns array for next method