// ============================================
// DAY 08 — Block Scope
// Author  : Vaibhav
// Topic   : block scope, var vs let, loop trap
// ============================================

// ─── WHAT IS A BLOCK ──────────────────────────
// Anything inside {} is a block
// if(){} for(){} while(){} or just {}

// ─── BASIC BLOCK SCOPE ────────────────────────
console.log("─── Basic block scope ───");

{
    let x = 10;    // block scoped ✅
    const y = 20;  // block scoped ✅
    var z = 30;    // NOT block scoped ❌
    console.log(x);  // 10
    console.log(y);  // 20
    console.log(z);  // 30
}
console.log(z);    // 30 ✅ — var leaked!
// console.log(x); // ❌ ReferenceError
// console.log(y); // ❌ ReferenceError

// ─── BLOCK SCOPE IN IF ────────────────────────
console.log("\n─── Block scope in if ───");

let age = 20;
if (age >= 18) {
    let message = "Adult";    // block scoped
    var status  = "verified"; // leaks out!
    console.log(message);     // "Adult"
}
console.log(status);    // "verified" ✅ — leaked
// console.log(message); // ❌ ReferenceError

// ─── BLOCK SCOPE IN FOR LOOP ──────────────────
console.log("\n─── Block scope in loop ───");

for (var i = 0; i < 3; i++) {
    console.log(i);   // 0 1 2
}
console.log(i);  // 3 ✅ — var leaked!

for (let j = 0; j < 3; j++) {
    console.log(j);   // 0 1 2
}
// console.log(j);  // ❌ ReferenceError

// ─── TRAP 1 : FAMOUS VAR LOOP BUG ─────────────
console.log("\n─── var loop bug ───");

// var — all share same i — prints 3 3 3
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var:", i);  // 3 3 3 ← bug!
    }, 100);
}

// let — each iteration own i — prints 0 1 2
for (let k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log("let:", k);  // 0 1 2 ✅
    }, 200);
}

// ─── TRAP 2 : BLOCK INSIDE BLOCK ──────────────
console.log("\n─── Nested blocks ───");

{
    let outer = "outer block";
    {
        let inner = "inner block";
        console.log(outer);  // ✅ inner accesses outer
        console.log(inner);  // ✅ own variable
    }
    console.log(outer);   // ✅ own variable
    // console.log(inner); // ❌ ReferenceError
}

// ─── TRAP 3 : REDECLARE IN SAME BLOCK ─────────
console.log("\n─── Redeclare trap ───");

{
    var a = 10;
    var a = 20;  // ✅ var allows redeclare
    console.log(a);  // 20
}

// {
//     let b = 10;
//     let b = 20;  // ❌ SyntaxError — can't redeclare let!
// }

// ─── TRAP 4 : SAME NAME DIFFERENT BLOCKS ──────
console.log("\n─── Same name different blocks ───");

let x = "global";
{
    let x = "block 1";
    console.log(x);  // "block 1"
}
{
    let x = "block 2";
    console.log(x);  // "block 2"
}
console.log(x);  // "global" — unchanged!

// ─── FUNCTION + BLOCK SCOPE TOGETHER ──────────
console.log("\n─── Function + Block ───");

function test() {
    var a = 1;    // function scoped
    let b = 2;    // function scoped
    const c = 3;  // function scoped

    if (true) {
        var d = 4;   // function scoped — leaks to function!
        let e = 5;   // block scoped — stays here
    }

    console.log(a);  // 1  ✅
    console.log(b);  // 2  ✅
    console.log(c);  // 3  ✅
    console.log(d);  // 4  ✅ — var leaked to function
    // console.log(e); // ❌ ReferenceError
}
test();

// ─── CHEATSHEET ───────────────────────────────
// Block = anything inside {}
// let/const → block scoped → stay inside {}
// var → NOT block scoped → leaks out of {} (but stays in function)
// var in loop → all iterations share same variable → bug!
// let in loop → each iteration has own variable → correct!
// nested blocks → inner can access outer, outer cannot access inner
// same name different blocks → completely independent variables