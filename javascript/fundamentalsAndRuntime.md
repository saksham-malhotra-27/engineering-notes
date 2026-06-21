# 1. JavaScript Fundamentals & Runtime

## 1.1 What is JavaScript?

JavaScript is a high-level, dynamically typed, interpreted programming language used to build interactive and dynamic applications.


Originally created for browsers, JavaScript is now used for:

- Frontend development
- Backend development (Node.js)
- Mobile applications
- Desktop applications


### Key Characteristics

#### High-Level Language
- Developer does not manage memory manually.
- Memory allocation and garbage collection are handled by the runtime.


#### Dynamically Typed

Variable types are determined at runtime.

Example:

```javascript
let value = 10;

value = "hello";
```
The same variable can hold different types.

#### Interpreted Language

JavaScript code is executed by a JavaScript engine at runtime.

Example engines:

- Chrome → V8
- Firefox → SpiderMonkey
- Safari → JavaScriptCore


#### Single Threaded

JavaScript executes one task at a time using a single call stack.

Example 
```
console.log("Hello");

console.log("World");

Execution order-

Hello
World
```

#### Multi-paradigm Language
JavaScript supports:

- Procedural programming
- Object-oriented programming
- Functional programming

## 1.2 ECMAScript

### What is ECMAScript?

ECMAScript is the official standard/specification that defines how JavaScript should work.

JavaScript is an implementation of ECMAScript.

Think of it like:

- ECMAScript → Rule book / specification
- JavaScript → Actual language following that specification

### Why was ECMAScript created?

Different companies created different JavaScript engines, so a standard was needed to make sure JavaScript behaved consistently across platforms.

ECMAScript is updated through yearly releases.

Important versions:
- ES5
- ES6/ES2015
- ES2016+

## 1.3 JavaScript Runtime

### What is a JavaScript Runtime?

A JavaScript runtime is an environment where JavaScript code can be executed.

It provides everything required to run JavaScript, including:

- JavaScript Engine
- Memory management
- APIs
- Event loop
- Callback mechanisms

### Components of JavaScript Runtime

#### 1. JavaScript Engine

The engine is responsible for executing JavaScript code.


#### 2. Memory Heap

Memory area where JavaScript stores:

- Objects
- Arrays
- Functions
- Variables

JavaScript automatically manages memory using garbage collection.

#### 3. Call Stack

The call stack manages the order in which functions execute.

JavaScript is single-threaded, meaning it has one main call stack.

It follows:

- Last In First Out (LIFO)

The function added last executes first.

#### 4. Web APIs / Runtime APIs

The JavaScript engine itself cannot perform tasks like:

- Timers
- Network requests
- DOM manipulation

The runtime provides these APIs.

#### 5. Event Loop

The event loop allows JavaScript to handle asynchronous operations.

It continuously checks:

- Is the call stack empty?
- Are there completed tasks waiting?

Then it moves tasks for execution.

## 1.4 JavaScript Event Loop

### What is Event Loop?
JavaScript is single-threaded, meaning it can execute only one task at a time using the call stack.
The event loop allows JavaScript to handle asynchronous operations without blocking the main thread.

### Execution Priority

JavaScript executes tasks in this order:
1. Synchronous tasks
2. Microtasks
3. Macrotasks (Callback tasks)

#### 1. Synchronous Tasks

Normal JavaScript code executes immediately.
Examples:

- Variable declarations
- Function calls

These tasks are directly pushed into the call stack and executed.

#### 2. Asynchronous Tasks

Async operations are handled by the runtime environment.
Examples:
- setTimeout
- API calls
- Promises
- Event listeners
These tasks do not block the call stack.

##### 2a. Microtask Queue

Microtasks have higher priority than macrotask.
Examples:
- Promise callbacks
- async/await continuation
- queueMicrotask
After the call stack becomes empty, microtasks execute first.

##### 2b. Macrotask / Callback Queue

Tasks that execute after microtasks.
Examples:
- setTimeout
- setInterval
- DOM events 

### Event Loop Flow

Execution flow:
1. Execute all synchronous code
2. Empty the microtask queue
3. Execute macrotask

## Interview Points

**Q: Is JavaScript compiled or interpreted?**

Modern JavaScript engines use JIT (Just-In-Time) compilation.
The code is:
- Parsed
- Compiled
- Optimized
- Executed

**Q: Why is JavaScript called single-threaded?**

Because it has one main call stack, meaning only one piece of code executes at a time.

**Q: Is ECMAScript and JavaScript same?**

No.
ECMAScript is the standard, JavaScript is the implementation.

**Q: What is ES6?**

ES6 (ECMAScript 2015) is a major JavaScript update that introduced modern JavaScript features like let, const, arrow functions, promises, and classes.

**Q: Why do we need ECMAScript?**

To maintain consistency and compatibility across different JavaScript engines.

**Q: Is JavaScript itself asynchronous?**

No. JavaScript execution is synchronous by default.
Asynchronous behavior comes from the runtime environment using APIs and the event loop.

**Q: What is the difference between JavaScript engine and runtime?**

JavaScript Engine:
- Executes JavaScript code
JavaScript Runtime:
- Engine + additional features required to run applications

**Q: Why can JavaScript handle multiple tasks if it is single-threaded?**

Because the runtime provides asynchronous mechanisms like APIs and the event loop.

**Q: What is the Event Loop in JavaScript?**

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations while being single-threaded.
It continuously checks:
- Is the call stack empty?
- Are there any pending tasks in the queues?
It moves tasks to the call stack for execution.


**Q: If JavaScript is single-threaded, how does it handle asynchronous operations?**

JavaScript uses the runtime environment which provides:
- APIs
- Task queues
- Event loop
The runtime handles asynchronous work while JavaScript continues executing synchronous code.


**Q: What is the execution priority in JavaScript Event Loop?**

The order is:

1. Synchronous code
2. Microtasks
3. Macrotasks


**Q: What are microtasks and macrotasks?**

Microtasks:
- Higher priority asynchronous tasks
- Executed immediately after synchronous code finishes

Examples:
- Promise callbacks
- async/await
- queueMicrotask()

Macrotasks:
- Lower priority asynchronous tasks

Examples:
- setTimeout
- setInterval
- DOM events


**Q: Why do Promise callbacks execute before setTimeout?**

Because Promise callbacks are stored in the Microtask Queue, while setTimeout callbacks are stored in the Macrotask Queue. The Event Loop always clears the Microtask Queue before executing Macrotasks.


**Q: Why are Promise callbacks not placed in the callback queue?**

Promises use the Microtask Queue instead of the Callback/Macrotask Queue because they need higher priority execution.
This allows promise-based operations to continue immediately after the current synchronous code completes.


**Q: Why does setTimeout(fn, 0) not execute immediately?**

0ms only means the timer has no minimum delay.
The callback still waits for:
- Current synchronous code to finish
- Microtasks to complete
- Event loop to pick the callback


**Q: What happens if both Promise and setTimeout are present?**

Execution order:

1. Synchronous code
2. Promise callbacks
3. setTimeout callbacks


**Q: Does async/await make JavaScript synchronous?**

No. async/await is built on top of Promises.
It only makes asynchronous code look synchronous while internally using Promise-based execution.


**Q: What happens if the call stack is blocked for a long time?**

The Event Loop cannot execute pending tasks.
This causes:
- Delayed callbacks
- Frozen UI
- Poor application performance