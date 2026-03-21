// ============================================
// DAY 05 — break & continue
// Author  : Vaibhav
// Topic   : break, continue, nested loops
// ============================================

// ─── BREAK — exits loop completely ────────────
console.log("─── break ───");

for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// 0 1 2

// ─── CONTINUE — skips current iteration ───────
console.log("\n─── continue ───");

for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// 0 1 2 4

// ─── BREAK IN WHILE ───────────────────────────
console.log("\n─── break in while ───");

let i = 0;
while (true) {
    if (i === 5) break;
    console.log(i);
    i++;
}
// 0 1 2 3 4

// ─── CONTINUE IN WHILE ────────────────────────
console.log("\n─── continue in while ───");

let j = 0;
while (j < 6) {
    j++;
    if (j % 2 === 0) continue;
    console.log(j);
}
// 1 3 5

// ─── TRAP 1 : BREAK IN NESTED LOOPS ───────────
console.log("\n─── Nested break trap ───");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break;      // breaks INNER only!
        console.log(i, j);
    }
}
// 0 0
// 1 0
// 2 0

// ─── TRAP 2 : CONTINUE IN WHILE ───────────────
console.log("\n─── Continue while trap ───");

let k = 0;
while (k < 5) {
    k++;
    if (k === 3) continue;   // k++ runs before continue ✅
    console.log(k);
}
// 1 2 4 5

// ─── TRAP 3 : BREAK IN SWITCH INSIDE LOOP ─────
console.log("\n─── Switch break trap ───");

for (let i = 0; i < 3; i++) {
    switch(i) {
        case 1:
            console.log("one");
            break;   // breaks switch NOT for loop!
    }
    console.log(i);
}
// 0
// one
// 1
// 2

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Find first match
let users = ["Rahul", "Vaibhav", "Amit", "Priya"];
for (let user of users) {
    if (user === "Amit") {
        console.log("Found:", user);
        break;
    }
}

// Skip negatives
let numbers = [1, -2, 3, -4, 5];
let sum = 0;
for (let num of numbers) {
    if (num < 0) continue;
    sum += num;
}
console.log("Sum:", sum);   // 9

// Search and process
let scores = [45, 82, 91, 37, 78];
for (let score of scores) {
    if (score < 50) continue;
    if (score > 90) {
        console.log("Topper:", score);
        break;
    }
    console.log("Pass:", score);
}
// Pass: 82
// Topper: 91

// ─── CHEATSHEET ───────────────────────────────
// break    → exits loop entirely
// continue → skips current iteration only
// break in nested loop → only breaks innermost loop
// break in switch → only breaks switch not outer loop
// continue in while → always update before continue!
// use break  → search problems, find first match
// use continue → skip invalid/unwanted values