// ============================================
// DAY 09 — Array Add/Remove Methods
// Author  : Vaibhav
// Topic   : push, pop, shift, unshift, splice, slice
// ============================================

// ─── PUSH — add to end ────────────────────────
console.log("─── push ───");

let arr1 = [1, 2, 3];
let len1 = arr1.push(4);      // returns NEW LENGTH
console.log(arr1);             // [1, 2, 3, 4]
console.log(len1);             // 4 ← length not array!

arr1.push(5, 6, 7);           // push multiple
console.log(arr1);             // [1, 2, 3, 4, 5, 6, 7]

// ─── POP — remove from end ────────────────────
console.log("\n─── pop ───");

let arr2 = [1, 2, 3, 4, 5];
let removed2 = arr2.pop();     // returns REMOVED ITEM
console.log(arr2);             // [1, 2, 3, 4]
console.log(removed2);         // 5

let empty = [];
console.log(empty.pop());      // undefined — no error

// ─── UNSHIFT — add to start ───────────────────
console.log("\n─── unshift ───");

let arr3 = [1, 2, 3];
let len3 = arr3.unshift(0);    // returns NEW LENGTH
console.log(arr3);             // [0, 1, 2, 3]
console.log(len3);             // 4

arr3.unshift(-2, -1);
console.log(arr3);             // [-2, -1, 0, 1, 2, 3]

// ─── SHIFT — remove from start ────────────────
console.log("\n─── shift ───");

let arr4 = [1, 2, 3, 4, 5];
let removed4 = arr4.shift();   // returns REMOVED ITEM
console.log(arr4);             // [2, 3, 4, 5]
console.log(removed4);         // 1

// ─── SPLICE — add/remove anywhere ─────────────
console.log("\n─── splice ───");

// Remove items
let arr5 = [1, 2, 3, 4, 5];
let removed5 = arr5.splice(1, 2);  // start=1, remove=2
console.log(arr5);                  // [1, 4, 5] ← mutated!
console.log(removed5);              // [2, 3] ← removed items

// Insert without removing
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 0, 99);         // start=2, remove=0, add 99
console.log(arr6);              // [1, 2, 99, 3, 4, 5]

// Replace items
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 2, 10, 20);     // remove 2 from index 1, add 10,20
console.log(arr7);              // [1, 10, 20, 4, 5]

// Negative index
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(-2, 1);            // 2nd from last, remove 1
console.log(arr8);              // [1, 2, 3, 5] ← removed 4

// ─── SLICE — copy portion ─────────────────────
console.log("\n─── slice ───");

let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.slice(1, 3));  // [2, 3] — end NOT included
console.log(arr9.slice(2));     // [3, 4, 5] — to end
console.log(arr9.slice(-2));    // [4, 5] — last 2
console.log(arr9.slice());      // [1,2,3,4,5] — full copy
console.log(arr9);              // [1,2,3,4,5] — UNCHANGED!

// ─── TRAP 1 : PUSH RETURNS LENGTH ─────────────
console.log("\n─── push trap ───");

let t1 = [1, 2, 3];
let result = t1.push(4, 5);
console.log(result);  // 5 ← length not array!
console.log(t1);      // [1, 2, 3, 4, 5]

// ─── TRAP 2 : SPLICE vs SLICE ─────────────────
console.log("\n─── splice vs slice ───");

let s1 = [1, 2, 3, 4, 5];
s1.splice(1, 2);               // MUTATES!
console.log(s1);                // [1, 4, 5]

let s2 = [1, 2, 3, 4, 5];
let copy = s2.slice(1, 3);     // does NOT mutate
console.log(s2);                // [1, 2, 3, 4, 5] unchanged
console.log(copy);              // [2, 3]

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Stack — LIFO
let stack = [];
stack.push("first");
stack.push("second");
stack.push("third");
console.log(stack.pop());   // "third"
console.log(stack.pop());   // "second"

// Queue — FIFO
let queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
console.log(queue.shift());  // "first"
console.log(queue.shift());  // "second"

// ─── CHEATSHEET ───────────────────────────────
// push()    → add end    → returns NEW LENGTH  → mutates ✅
// pop()     → remove end → returns REMOVED ITEM → mutates ✅
// unshift() → add start  → returns NEW LENGTH  → mutates ✅
// shift()   → remove start → returns REMOVED ITEM → mutates ✅
// splice()  → anywhere   → returns REMOVED ITEMS → mutates ✅
// slice()   → copy       → returns NEW ARRAY   → NO mutate ❌
// push/pop  → O(1) fast  | shift/unshift → O(n) slow
// Stack = push + pop | Queue = push + shift