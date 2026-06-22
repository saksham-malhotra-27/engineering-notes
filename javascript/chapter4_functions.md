# JS Functions

## 4.1 Function Basics

### What is a Function?

A function is a reusable block of code that performs a specific task. Functions help in:
- Code reusability
- Modularity
- Better structure

### Function Declaration

A function defined using the `function` keyword. It is fully hoisted.

### Function Expression

A function assigned to a variable. It behaves like a variable and follows variable hoisting rules.

### First-Class Nature

In JavaScript, functions are treated as values:
- Can be stored in variables
- Can be passed as arguments
- Can be returned from other functions

## 4.2 Arrow Functions

### What are Arrow Functions?

Arrow functions are a shorter syntax for writing functions introduced in ES6.

### Key Difference: `this`

Arrow functions do NOT have their own `this`. They inherit `this` from their lexical scope.

Arrow functions should NOT be used for:
- Object methods (when `this` is needed)
- Constructors
- Prototype methods

## 4.3 Higher Order Functions (HOF)

### What is a Higher Order Function?

A function that:
- takes another function as argument OR
- returns another function

### Why HOFs are Important

They allow:
- abstraction
- reusable logic
- functional programming style

#### Common Examples
- map
- filter
- reduce

### Custom HOF Example Idea

Any function that accepts a callback is a HOF.

## 4.4 Callback Functions

### What is a Callback?

A callback is a function passed into another function to be executed later.

### Why Callbacks are Used

- Async operations
- Event handling
- Control flow customization

### Synchronous Callbacks

Executed immediately inside another function.

### Asynchronous Callbacks

Executed later (e.g., setTimeout, API calls).

### Callback Hell

Nested callbacks leading to unreadable code.

This problem led to:
- Promises
- async/await

## 4.5 IIFE (Immediately Invoked Function Expression)

### What is IIFE?

A function that executes immediately after it is defined.

### Why IIFE is Used

- To create a private scope
- To avoid polluting global scope
- Used in module patterns (older JS)

### Key Idea

IIFE creates its own execution context and gets destroyed after execution.

## 4.6 Functions and Closures Connection

### Why Functions Create Closures

Every function creates a lexical environment. Inner functions retain access to outer variables even after outer function execution ends.

### Key Insight

Functions are not just execution blocks. They are also:
- scope creators
- closure generators
- state holders

## Interview Points

**Q: What is the output? (HOF + basic callback)**

i)
```javascript
function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    return callback("Saksham");
}
// callback here
console.log(processUser(greet));
```

`Hello Saksham`

ii)
```javascript
function process(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

process([1, 2, 3], function (num) {
    console.log(num * 2);
});
```

output:
```
2
4
6
```

iii) async- 

```
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 0);

console.log("End");
```

output:
```
Start
End
Inside Timeout
```

