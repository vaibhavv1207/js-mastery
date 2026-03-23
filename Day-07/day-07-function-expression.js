// ============================================
// DAY 06 — Function Expression
// Author  : Vaibhav
// Topic   : expression, hoisting, named, objects
// ============================================

// ─── BASIC FUNCTION EXPRESSION ────────────────
console.log("─── Basic ───");

const greet = function() {
    console.log("Hello Vaibhav!");
};
greet();  // "Hello Vaibhav!"

// ─── WITH PARAMETERS ──────────────────────────
console.log("\n─── Parameters ───");

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));   // 8
console.log(typeof add);  // "function"

// ─── DECLARATION vs EXPRESSION ────────────────
console.log("\n─── Declaration vs Expression ───");

// Declaration — fully hoisted ✅
sayHello();
function sayHello() { console.log("Hello!"); }

// Expression — NOT hoisted ❌
// sayHi();  // ReferenceError!
const sayHi = function() { console.log("Hi!"); };
sayHi();  // works after declaration

// ─── TRAP 1 : VAR WITH EXPRESSION ─────────────
console.log("\n─── var trap ───");

console.log(typeof fn);   // "undefined" ← var hoisted as undefined
var fn = function() { return 42; };
console.log(typeof fn);   // "function" ← after assignment

// const/let — TDZ
// console.log(fn2);  // ReferenceError — TDZ!
const fn2 = function() { return 42; };

// ─── TRAP 2 : SEMICOLON ───────────────────────
console.log("\n─── Semicolon ───");

// Declaration — no semicolon
function noSemi() {
    return "no semi needed";
}  // ← no semicolon

// Expression — semicolon required
const withSemi = function() {
    return "semi needed";
};  // ← semicolon! it's a variable assignment

// ─── NAMED FUNCTION EXPRESSION ────────────────
console.log("\n─── Named expression ───");

const multiply = function multiplyNums(a, b) {
    return a * b;
};
console.log(multiply(4, 5));      // 20
console.log(multiply.name);       // "multiplyNums"

// Name useful inside function — recursion
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);  // 'fact' usable inside
};
console.log(factorial(5));  // 120

// ─── VAR REDECLARE ────────────────────────────
console.log("\n─── var redeclare ───");

var x = function() { return 1; };
var x = function() { return 2; };  // redeclare allowed with var
console.log(x());   // 2 — second wins

// ─── FUNCTIONS IN OBJECTS ─────────────────────
console.log("\n─── In objects ───");

const calculator = {
    add      : function(a, b) { return a + b; },
    subtract : function(a, b) { return a - b; },
    multiply : function(a, b) { return a * b; },
};
console.log(calculator.add(10, 5));       // 15
console.log(calculator.subtract(10, 5));  // 5
console.log(calculator.multiply(10, 5));  // 50

// ─── FUNCTIONS AS VALUES ───────────────────────
console.log("\n─── Functions as values ───");

const sayBye = function() { console.log("Bye!"); };

function runTwice(fn) {
    fn();
    fn();
}
runTwice(sayBye);
// Bye!
// Bye!

// ─── CHEATSHEET ───────────────────────────────
// const fn = function() {}  ← expression — NOT hoisted
// function fn() {}          ← declaration — FULLY hoisted
// var fn = function() {}    ← hoisted as undefined (var)
// const fn = function name(){}  ← named expression
// fn.name                   ← returns function name as string
// typeof fn                 ← always returns a STRING
// semicolon after expression ← required! it's a variable assignment