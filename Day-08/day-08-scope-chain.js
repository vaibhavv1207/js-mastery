// ============================================
// DAY 08 — Scope Chain
// Author  : Vaibhav
// Topic   : scope chain, variable lookup, order
// ============================================

// ─── WHAT IS SCOPE CHAIN ──────────────────────
// JS searches for variables in this order:
// 1. Current scope
// 2. Outer scope
// 3. Outer's outer scope
// 4. Global scope
// 5. Not found → ReferenceError

// ─── BASIC SCOPE CHAIN ────────────────────────
console.log("─── Basic scope chain ───");

let a = "global";

function outer() {
    let b = "outer";

    function inner() {
        let c = "inner";
        console.log(c);  // found in current ✅
        console.log(b);  // not here → outer → found ✅
        console.log(a);  // not here → not outer → global → found ✅
    }
    inner();
}
outer();

// ─── STEP BY STEP SEARCH ──────────────────────
console.log("\n─── Step by step ───");

let x = 10;

function outerFn() {
    let y = 20;
    function innerFn() {
        let z = 30;
        console.log(x + y + z);  // 60
        // x → not inner → not outer → global → 10 ✅
        // y → not inner → outer → 20 ✅
        // z → inner → 30 ✅
    }
    innerFn();
}
outerFn();

// ─── TRAP 1 : NOT FOUND ANYWHERE ──────────────
console.log("\n─── Not found ───");

function test() {
    // console.log(mystery);  // ❌ ReferenceError!
    // searched: test → global → not found!
}
test();

// ─── TRAP 2 : NEAREST SCOPE WINS ──────────────
console.log("\n─── Nearest wins ───");

let name = "global";

function outerName() {
    let name = "outer";
    function innerName() {
        let name = "inner";
        console.log(name);  // "inner" — stops here!
    }
    innerName();
    console.log(name);  // "outer"
}
outerName();
console.log(name);  // "global"

// ─── TRAP 3 : CHAIN GOES UP ONLY ──────────────
console.log("\n─── Up only ───");

function outerUp() {
    function innerUp() {
        let secret = "inner secret";
    }
    innerUp();
    // console.log(secret);  // ❌ ReferenceError — chain goes UP not DOWN
}
outerUp();

// ─── TRAP 4 : SIBLINGS CANT SHARE ─────────────
console.log("\n─── Siblings can't share ───");

function funcA() {
    let x = "A's secret";
}
function funcB() {
    // console.log(x);  // ❌ ReferenceError — can't access funcA's scope!
    console.log("funcB can't see funcA's variables");
}
funcA();
funcB();

// ─── DEEP CHAIN EXAMPLE ───────────────────────
console.log("\n─── Deep chain ───");

let val = 10;

function level1() {
    let val = 20;
    function level2() {
        function level3() {
            console.log(val);  // 20 — found in level1 scope
            // not level3 → not level2 → level1 → found!
        }
        level3();
    }
    level2();
}
level1();
console.log(val);  // 10 — global unchanged

// ─── REAL WORLD EXAMPLE ───────────────────────
console.log("\n─── Real world ───");

let tax = 0.18;

function store(storeName) {
    let discount = 0.10;

    function calculatePrice(price) {
        let discounted = price - (price * discount);  // discount from store
        let final = discounted + (discounted * tax);  // tax from global
        return `${storeName}: ₹${final.toFixed(2)}`;
    }
    return calculatePrice;
}

let amazon   = store("Amazon");
let flipkart = store("Flipkart");
console.log(amazon(1000));    // Amazon: ₹954.00
console.log(flipkart(1000));  // Flipkart: ₹954.00

// ─── SCOPE CHAIN VISUALIZATION ────────────────
// Global Scope
// │── let a = "global"
// │── function outer()
// │   │── let b = "outer"
// │   └── function inner()
// │       │── let c = "inner"
// │       │   Looking for 'a':
// │       │   1. inner → not found
// │       │   2. outer → not found
// │       │   3. global → FOUND! ✅

// ─── CHEATSHEET ───────────────────────────────
// Scope chain → current → outer → global → ReferenceError
// Nearest scope wins → stops at first match
// Chain goes UP only → never down or sideways
// Siblings → can't access each other's variables
// Global → last place JS looks before giving up