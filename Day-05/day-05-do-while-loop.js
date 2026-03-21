// ============================================
// DAY 05 — do-while Loop
// Author  : Vaibhav
// Topic   : do-while, always runs once
// ============================================

// ─── BASIC DO-WHILE ───────────────────────────
console.log("─── Basic do-while ───");

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// 0 1 2 3 4

// ─── KEY DIFFERENCE — RUNS AT LEAST ONCE ──────
console.log("\n─── Runs at least once ───");

// while — condition false = never runs
let a = 10;
while (a < 5) {
    console.log("while:", a);   // never runs
}

// do-while — always runs once first
let b = 10;
do {
    console.log("do-while:", b);  // prints 10!
} while (b < 5);

// ─── TRAP 1 : SEMICOLON REQUIRED ──────────────
console.log("\n─── Semicolon trap ───");

do {
    console.log("Hello");
} while (false);   // ← semicolon required!
// "Hello" — runs once, condition false, stops

// ─── TRAP 2 : CONDITION FALSE FROM START ──────
console.log("\n─── Condition false ───");

let x = 100;
do {
    console.log(x);   // prints 100 — ran once!
    x++;
} while (x < 5);

// ─── TRACING EXAMPLE ───────────