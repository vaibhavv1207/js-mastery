// ============================================
// DAY 04 — Switch Statement
// Author  : Vaibhav
// Topic   : switch, break, fall through, default
// ============================================

// ─── BASIC SWITCH ─────────────────────────────
console.log("─── Basic switch ───");

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");  // runs
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
}

// ─── TRAP 1 : FALL THROUGH ────────────────────
console.log("\n─── Fall through ───");

let x = 2;
switch(x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");    // runs
    case 3:
        console.log("Three");  // ALSO runs — no break!
        break;
    case 4:
        console.log("Four");   // skipped
}
// Two
// Three

// ─── TRAP 2 : STRICT COMPARISON ───────────────
console.log("\n─── Strict === ───");

let val = "2";
switch(val) {
    case 2:
        console.log("Number 2");   // skipped — "2" !== 2
        break;
    case "2":
        console.log("String 2");   // runs — "2" === "2"
        break;
    default:
        console.log("No match");
}

// ─── TRAP 3 : DEFAULT WITHOUT BREAK ───────────
console.log("\n─── Default trap ───");

let n = 5;
switch(n) {
    default:
        console.log("Default");  // runs
    case 1:
        console.log("One");      // ALSO runs — no break after default!
        break;
    case 2:
        console.log("Two");
        break;
}
// Default
// One

// ─── INTENTIONAL FALL THROUGH ─────────────────
console.log("\n─── Intentional fall through ───");

let month = 4;
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");   // runs
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    default:
        console.log("Autumn");
}

// Weekend checker
let weekDay = 6;
switch(weekDay) {
    case 6:
    case 7:
        console.log("Weekend");   // runs
        break;
    default:
        console.log("Weekday");
}

// ─── DUPLICATE CASES ──────────────────────────
console.log("\n─── Duplicate cases ───");

let a = 1;
switch(a) {
    case 1:
        console.log("One");        // runs — first match wins
        break;
    case 1:
        console.log("One again");  // never runs
        break;
    default:
        console.log("Default");
}

// ─── SWITCH vs IF ELSE ────────────────────────
console.log("\n─── Switch vs if/else ───");

// Switch — clean for exact values
let color = "red";
switch(color) {
    case "red":   console.log("Stop");    break;
    case "green": console.log("Go");      break;
    case "amber": console.log("Wait");    break;
    default:      console.log("Invalid");
}

// if/else — needed for ranges
let marks = 85;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");   // runs
} else if (marks >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}

// ─── CHEATSHEET ───────────────────────────────
// switch uses === strict comparison always
// missing break → fall through — runs all cases below!
// default without break → falls through to next case
// duplicate cases → first one wins
// intentional fall through → group cases without break
// use switch for exact values, if/else for ranges