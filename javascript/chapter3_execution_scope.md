# 3. JavaScript Execution & Scope


## 3.1 Execution Context

### What is Execution Context?
Execution Context is the environment in which JavaScript code is evaluated and executed. It contains all the information required to run the code, such as:
- Variables
- Functions
- Scope information
- The value of `this`

JavaScript creates an execution context whenever code needs to be executed.

### Types of Execution Context

JavaScript mainly has:
1. Global Execution Context
2. Function Execution Context

#### Global Execution Context (GEC)

Created when JavaScript starts executing a program. Responsibilities:
- Creates global scope
- Stores global variables and functions
- Sets up the global object
Only one Global Execution Context exists for a program.

#### Function Execution Context (FEC)

Created whenever a function is called. Each function call gets its own execution context.
It contains:
- Function parameters
- Local variables
- Inner functions
- Scope references

### Execution Context Phases
Every execution context has two phases:
1. Creation Phase
2. Execution Phase

####  Creation Phase

Before executing code, JavaScript prepares the environment.It creates:
- Memory space for variables
- Function declarations
- Scope chain
- `this` value

#### Execution Phase

JavaScript executes the code line by line. During this phase:
- Variables get assigned values
- Functions are executed
- Expressions are evaluated

### Execution Context Stack

Execution contexts are managed using a stack called the Call Stack.

Rules:
- Global context is created first
- Function contexts are pushed when functions are called
- They are removed when execution completes

## 3.2 Call Stack

### What is Call Stack?

Call Stack is a data structure used by JavaScript to keep track of execution contexts.
It follows:
- LIFO (Last In First Out)
The function that is added last is executed and removed first.

### How Call Stack Works

When JavaScript starts:
1. Global Execution Context is pushed into the stack
2. When a function is called, a new Function Execution Context is pushed
3. After the function finishes, it is removed from the stack

## 3.3 Hoisting
### What is Hoisting?

Hoisting is JavaScript's behavior where declarations are processed before the code execution phase. During the creation phase of an execution context, JavaScript allocates memory for:
- Variables
- Function declarations

Important:
Hoisting does not move code physically to the top. It is a result of how JavaScript creates the execution environment before execution.

### Variable Hoisting

Different declarations behave differently:

#### var
`var` declarations are hoisted and initialized with `undefined`. Meaning:
- Memory is allocated
- Default value is assigned as undefined

#### let and const
`let` and `const` declarations are also hoisted.
However:
- Memory is allocated
- They are not initialized immediately
- They remain in Temporal Dead Zone (TDZ) Until the declaration line is executed.

#### Function Hoisting

Function declarations are fully hoisted. This means:
- Function name is stored
- Function definition is available before execution reaches the declaration

### Temporal Dead Zone (TDZ)

TDZ is the time period between:
- Entering the scope
- Reaching the declaration of let/const

During TDZ:
- Variable exists
- But cannot be accessed
Accessing a let/const variable during TDZ causes an error.

### Hoisting Summary
var:
- Hoisted
- Initialized with undefined
- Can be accessed before declaration

let:
- Hoisted
- Not initialized
- In TDZ

const:
- Hoisted
- Not initialized
- In TDZ
- Must be initialized during declaration

## 3.4 Scope
### What is Scope?

Scope defines where variables and functions can be accessed in a JavaScript program.
It determines:
- Where a variable exists
- Where a variable can be used
- How JavaScript finds variables

### Types of Scope

JavaScript mainly has:
- Global Scope
- Function Scope
- Block Scope

#### Global Scope

Variables declared outside any function or block belong to the global scope. Global variables can be accessed from anywhere in the program. Global scope is created with the Global Execution Context.

#### Function Scope

Variables declared inside a function are accessible only inside that function. Each function creates its own scope. Function-scoped variables cannot be accessed outside the function.

#### Block Scope

A block is code inside curly braces `{}`.
Examples:
- if statements
- loops
- standalone blocks

Variables declared using:
- let
- const
follow block scope.

`var` does not follow block scope.
It is function scoped.

### Scope and Variable Lookup

When JavaScript encounters a variable:
1. It checks the current scope
2. If not found, it checks the outer scope
3. Continues until global scope
This lookup process is connected to the scope chain.

### Scope vs Execution Context

Scope:
- Determines variable accessibility
Execution Context:
- Environment where code is executed
Every execution context has access to its scope information.

## 3.5 Lexical Scope + Scope Chain 

### Lexical Scope 

Lexical Scope means the accessibility of variables is determined by where the code is written, not where the code is executed.
JavaScript decides scope during the creation of the function based on its position in the source code.

### Inner and Outer Scope

A function can access:
- Its own variables
- Variables from its outer scope
- Global variables
An outer scope cannot access variables inside an inner scope.

### Scope Chain

Scope chain is the mechanism JavaScript uses to find variables.

When searching for a variable:
1. JavaScript checks the current scope
2. If not found, it checks the outer scope
3. Continues until global scope

The lookup happens from:
Local scope → Outer scope → Global scope


### Lexical Environment

Every execution context has a lexical environment.
It contains:
- Local variables
- References to outer environments
This connection between environments creates the scope chain.

### Relationship Between Lexical Scope and Closures

Closures work because functions remember their lexical environment.
A function can access variables from where it was created, even after that outer function has finished execution.

## 3.6 Closures

### What is a Closure?

A closure is created when a function remembers variables from its lexical scope even after the outer function has finished execution.

In simple terms:

A function + its lexical environment = Closure


### Why Closures Happen

Closures exist because JavaScript uses lexical scoping.

A function carries a reference to its outer scope, not just its own variables.

Even if the outer function execution is completed, the inner function still has access to its variables.

### Example Behavior

An inner function accessing variables of an outer function even after the outer function has returned is a closure.

### Closures and Memory

Closures keep outer variables alive in memory as long as they are referenced by inner functions.

This is why closures can sometimes lead to memory leaks if not handled properly.


## Interview Points

**Q: What is an Execution Context?**

Execution Context is the environment where JavaScript executes code and stores information required for execution.

**Q: What are the types of Execution Context?**

Mainly:
- Global Execution Context
- Function Execution Context

**Q: When is function execution context created?**

Whenever a function is invoked.

**Q: What happens during the creation phase?**

JavaScript allocates memory for variables, functions, scope chain, and determines `this`.

**Q: What happens during the execution phase?**

JavaScript executes statements and assigns values to variables.

**Q: What is the relationship between Execution Context and Call Stack?**

Execution contexts are stored and managed inside the call stack.


**Q: What is the Call Stack in JavaScript?**

Call Stack is a mechanism that tracks the order in which functions are executed using the LIFO principle.

**Q: What causes stack overflow?**

Infinite or very deep recursive function calls can fill the call stack and cause a stack overflow.

**Q: What will be the output and why?**

Example:

```javascript
console.log(a);

var a = 10;
```

undefined
Reason:
During the creation phase, memory is allocated for `a` and is initialized with undefined.

**Q: What will happen in case of let/const?**

ReferenceError; They are in TDZ and cannot be accessed before declaration. 

IMPORTANT- If it was a function- 
```
greet();

function greet(){
    console.log("Hello");
}
```
Output:
Hello

Reason:
Function declarations are completely hoisted during the creation phase.

**Q: What is scope in JavaScript?**

Scope defines the accessibility and lifetime of variables and functions in a program.

**Q: Difference between global scope and local scope?**

Global scope:
- Accessible throughout the program

Local scope:
- Accessible only inside the block/function where it is declared

**Q: Difference between var and let/const scope?**

var:
- Function scoped

let/const:
- Block scoped

**Q: Why is block scope important?**

It prevents variables from leaking outside the block where they are needed, reducing accidental overwriting and bugs.

**Q: Can a child scope access variables from a parent scope?**

Yes. Inner scopes can access variables from outer scopes. The reverse is not possible.

**Q: What is lexical scope in JavaScript?**

Lexical scope means variable accessibility is decided by where code is written in the source code.

**Q: What is scope chain?**

Scope chain is the process JavaScript uses to look for variables by searching the current scope and then moving to outer scopes.


**Q: Does JavaScript use dynamic scope?**

No. JavaScript uses lexical scope. Variable lookup depends on where functions are defined, not where they are called.

**Q: What is a closure in JavaScript?**

A closure is a function that remembers variables from its lexical scope even after the outer function has finished execution.


---

**Q: How does lexical scope relate to closures?**

Closure works because JavaScript uses lexical scope.

A function has access to variables from the scope where it was defined, not where it is called.

This preserved lexical environment allows closures to exist.


---

**Q: What will be the output and why?**

Example:

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const fn = outer();
console.log(fn());
console.log(fn());
```

Output:
1
2

Reason:
inner function forms a closure over count
count persists even after outer() finishes execution

IMPORTANT:
Ques - Memoization using closures 
```
function memoize (func){
    const cache = {};

    return function (...args){
        const key = JSON.stringify(args)

        if(cache[key])
            return cache[key];
        
        const result = func(...args); 
        cache[key] = result;
        return result;
    }
}

const slowAdd = (a , b) => {
    console.log("Computing...)
    return a+b; 
}
const memoizedAdd = memoize(slowAdd); 
console.log(memoizedAdd(2, 3)); // Computing... 5
console.log(memoizedAdd(2, 3)); // 5
```

Ques - Memoization using closures and TTL

```
function memoizedWithTTL(func, ttl){
    const cache = {};

    return function (... args){
        const key = JSON.stringify(args);
        const now = Date.now(); 
        if(cache[key]){
            const { value, time } = cache[key];
            if(now - time < ttl) return value; 
        }

        const result = func(...args);
        cache[key] = {
            value: result, 
            time: now
        };
        return result;
    }
}
```