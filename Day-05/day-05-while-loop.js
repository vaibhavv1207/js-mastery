// ============================================
// DAY 05 — while Loop
// Author  : Vaibhav
// Topic   : while loop, traps, real patterns
// ============================================

// ─── BASIC WHILE LOOP ─────────────────────────
console.log("─── Basic while ───");

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// 0 1 2 3 4

// ─── FOR vs WHILE ─────────────────────────────
console.log("\n─── for vs while ───");

// for — know exact iterations
for (let x = 0; x < 5; x++) {
    console.log(x);
}

// while — don't know how many times
let userInput = "";
while (userInput !== "quit") {
    userInput = "quit";
    console.log("Running...");
}

// ─── TRAP 1 : INFINITE LOOP ───────────────────
console.log("\n─── Infinite loop trap ───");
// NEVER do this
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     // forgot j++ — runs forever!
// }

// ─── TRAP 2 : CONDITION NEVER TRUE ────────────
console.log("\n─── Condition never true ───");

let k = 10;
while (k < 5) {
    console.log(k);   // never runs!
}
console.log("Done");  // runs directly

// ─── TRAP 3 : COMPLEX CONDITION ───────────────
console.log("\n─── Complex condition ───");

let num = 1;
while (num < 100) {
    num *= 2;
    console.log(num);
}
// 2 4 8 16 32 64 128

// ─── TRACING EXAMPLE ──────────────────────────
console.log("\n─── Tracing ───");

let n = 1;
while (n < 10) {
    n *= 3;
    console.log(n);   // prints EVERY iteration
}
// 3 → 9 → 27 (all three print!)

// ─── COUNTDOWN ────────────────────────────────
console.log("\n─── Countdown ───");

let count = 5;
while (count > 0) {
    console.log(count);  // 5 4 3 2 1
    count--;
}
console.log("Blast off!");

// ─── REAL WORLD : RETRY LOGIC ─────────────────
console.log("\n─── Retry logic ───");

let attempts = 0;
let maxAttempts = 3;
let loggedIn = false;

while (attempts < maxAttempts && !loggedIn) {
    attempts++;
    console.log(`Attempt ${attempts}`);
    if (attempts === 3) {
        loggedIn = true;
    }
}
console.log(loggedIn ? "Logged in!" : "Failed");
// Attempt 1
// Attempt 2
// Attempt 3
// Logged in!

// ─── REAL WORLD : NUMBER GUESSING ─────────────
console.log("\n─── Number guessing ───");

let secret = 7;
let guess = 0;
let tries = 0;

while (guess !== secret) {
    tries++;
    guess++;
    console.log(`Guess ${tries}: ${guess}`);
}
console.log(`Found in ${tries} tries!`);

// ─── CHEATSHEET ───────────────────────────────
// while(condition) — checks condition BEFORE running
// forget update inside loop = infinite loop
// condition false from start = loop never runs
// console.log inside loop = prints EVERY iteration
// use while when you don't know exact iteration count
// use for when you know exact iteration count