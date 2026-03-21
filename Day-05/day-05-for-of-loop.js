// ============================================
// DAY 05 — for...of Loop
// Author  : Vaibhav
// Topic   : for...of, arrays, strings, entries
// ============================================

// ─── BASIC FOR...OF ───────────────────────────
console.log("─── Basic for...of ───");

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
// apple banana mango

// ─── FOR...OF vs FOR LOOP ─────────────────────
console.log("\n─── for...of vs for ───");

// Old way
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Modern way — cleaner
for (let fruit of fruits) {
    console.log(fruit);
}

// ─── LOOPING STRINGS ──────────────────────────
console.log("\n─── Strings ───");

let name = "Vaibhav";
for (let char of name) {
    console.log(char);
}
// V a i b h a v

// ─── ENTRIES — INDEX + VALUE ──────────────────
console.log("\n─── entries() ───");

let arr = [1, 2, 3];
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}
// 0 1
// 1 2
// 2 3

// ─── TRAP 1 : OBJECTS NOT ITERABLE ────────────
console.log("\n─── Object trap ───");

let user = { name: "Vaibhav", age: 20 };
// for (let item of user) {}  // ❌ TypeError!
console.log("Objects not iterable — use for...in instead");

// ─── TRAP 2 : MODIFYING ARRAY ─────────────────
console.log("\n─── Modify trap ───");

let nums = [1, 2, 3];
for (let num of nums) {
    num = num * 10;        // only changes local copy
    console.log(num);      // 10 20 30
}
console.log(nums);         // [1,2,3] — unchanged!

// ─── TRAP 3 : NUMBER NOT ITERABLE ─────────────
console.log("\n─── Number trap ───");

let n = 123;
// for (let digit of n) {}  // ❌ TypeError!

// Fix — convert to string first
for (let digit of String(n)) {
    console.log(digit);    // 1 2 3 ✅
}

// ─── REAL PATTERNS ────────────────────────────
console.log("\n─── Real patterns ───");

// Sum of array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);   // 150

// Find max value
let scores = [45, 89, 23, 67, 92];
let max = scores[0];
for (let score of scores) {
    if (score > max) max = score;
}
console.log("Max:", max);   // 92

// Count vowels
let str = "Vaibhav";
let vowels = 0;
for (let char of str) {
    if ("aeiouAEIOU".includes(char)) vowels++;
}
console.log("Vowels:", vowels);  // 3

// Sum of digits
let num2 = 456;
let digitSum = 0;
for (let digit of String(num2)) {
    digitSum += Number(digit);
}
console.log("Digit sum:", digitSum);  // 15

// ─── CHEATSHEET ───────────────────────────────
// for...of → gives VALUE directly, no index needed
// works on → arrays, strings, Maps, Sets
// fails on → objects, numbers (not iterable)
// modifying item → only changes local copy, not original
// need index? → use arr.entries() with destructuring
// string loop → goes character by character