// ============================================
// DAY 05 — for Loop
// Author  : Vaibhav
// Topic   : for loop, nested, traps
// ============================================

// ─── BASIC FOR LOOP ───────────────────────────
console.log("─── Basic for loop ───");

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0 1 2 3 4

// ─── LOOPING ARRAYS ───────────────────────────
console.log("\n─── Array loop ───");

let fruits = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
// 0 apple
// 1 banana
// 2 mango
// 3 orange

// ─── COUNTING BACKWARDS ───────────────────────
console.log("\n─── Backwards ───");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// 5 4 3 2 1

// ─── LOOPING WITH STEPS ───────────────────────
console.log("\n─── Steps ───");

// Even numbers
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// 0 2 4 6 8 10

// Multiples of 3
for (let i = 3; i <= 15; i += 3) {
    console.log(i);
}
// 3 6 9 12 15

// ─── TRAP 1 : INFINITE LOOP ───────────────────
console.log("\n─── Infinite loop trap ───");
// NEVER run this — crashes browser
// for (let i = 0; i < 5; i--) {
//     console.log(i);
// }

// ─── TRAP 2 : VAR vs LET ──────────────────────
console.log("\n─── var vs let trap ───");

for (var i = 0; i < 3; i++) {}
console.log(i);   // 3 — var leaked out!

for (let j = 0; j < 3; j++) {}
// console.log(j);  // ReferenceError — let stays inside

// ─── TRAP 3 : OFF BY ONE ──────────────────────
console.log("\n─── Off by one trap ───");

let arr = ["a", "b", "c"];

// Wrong — <= causes undefined
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
// a b c undefined ← bug!

// Correct — use 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// a b c ✅

// JS never throws index out of bounds — returns undefined
console.log(arr[5]);   // undefined — not an error!
console.log(arr[-1]);  // undefined — not an error!

// ─── NESTED FOR LOOP ──────────────────────────
console.log("\n─── Nested loop ───");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// ─── CHEATSHEET ───────────────────────────────
// for(init; condition; update) — 3 parts
// Always use let not var in loops
// < not <= when looping arrays — off by one bug
// JS returns undefined for missing index — no error thrown
// Nested loops — outer controls rows, inner controls columns
// i-- in increment = infinite loop — never do this