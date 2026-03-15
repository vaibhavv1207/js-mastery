# Day 01 — Interview Questions: Variables

## Q1. What is hoisting?
JS moves variable declarations to the top of their scope before execution.
Only the declaration is hoisted, not the value.
var → hoisted as undefined
let/const → hoisted but in TDZ (Temporal Dead Zone)

## Q2. What is the Temporal Dead Zone?
The period between when a let/const variable is hoisted
and when it is actually declared in the code.
Accessing it in this zone throws a ReferenceError.

## Q3. What is the difference between undefined and ReferenceError?
undefined  → variable exists, has no value yet
ReferenceError → variable does not exist at all

## Q4. Can you mutate a const object?
Yes. const locks the reference, not the value.
const user = { name: "A" };
user.name = "B"; // ✅ works
user = {};       // ❌ TypeError

## Q5. Why should you avoid var in modern JS?
- Leaks out of blocks
- Can be redeclared (silent bugs)
- Hoisting causes confusing undefined behavior
- Use let/const always

## Q6. Output question — what prints and why?
console.log(x);
var x = 5;
→ undefined (hoisted but not initialized)

## Q7. Output question — what prints and why?
for (var i = 0; i < 3; i++) {}
console.log(i);
→ 3 (var leaks out of the for block)
```

---

## Your folder structure right now
```
js-mastery/
├── README.md
├── Day-01/
│   ├── day-01-variables.js
│   └── interview-questions.md
```

Tonight after data types add:
```
├── Day-01/
│   ├── day-01-datatypes.js
│   └── (add datatype questions to interview-questions.md)