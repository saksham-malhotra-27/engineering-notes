# Modern JS 

## 8.1 Template Literals

### What are Template Literals?

Template literals are a modern way of creating strings introduced in ES6.

They use backticks (`` ` ``) instead of single (`'`) or double (`"`) quotes.

### String Interplolation 
Variables and expressions can be embedded inside strings using `${}`.

```javascript
const name = "John";
const age = 30;

console.log(`Hello ${name}, you are ${age} years old.`);
// Output: Hello John, you are 30 years old.
```

### Multi-line Strings 

Template literals allow writing multi-line strings without using `\n`. 

Example:
```javascript
const greeting = `Hello, 
this is 
Saksham`;

console.log(greeting);
// Output:
// Hello,
// this is
// Saksham
```

## 8.2 Default Parameters 

### What are default parameters? 
Default parameters allow function parameters to have default values when no argument is provided. 

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
greet("Saksham");
greet(null)
// Output: Hello Guest
// Hello Saksham
// Hello null - only default when undefined not null
```

## 8.3 Rest 

Rest parameters collect multiple function arguments into a single array.

```javascript
function sum(...nums) {
    return nums.reduce((acc, curr)=> acc+curr, 0);
}

sum(1,2,3,4);
```

Note: Rest collects values and Spread expands values. 

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1,2,3,4]
```

## 8.4 Optional Chaining (`?.`)

It safely accesses nested properties without throwing an error if an intermediate property is `null` or `undefined`.

```javascript
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

console.log(user.address?.city); // "Delhi"
console.log(user.phone?.mobile); // undefined (no error)
``` 

### Optional Function Call

```javascript
const user = {};

user.sayHello?.();
```

## 8.6 Nullish Coalescing (`??`)

Returns the right-hand side operand when the left-hand side is `null` or `undefined`. 

```javascript
const name = null;
const displayName = name ?? "Guest";

console.log(displayName); // "Guest"
```

### Difference between `||` and `??`


Difference between this and `||` is that for every falsy value, the later will return the right-hand side operand but the former, will only return the right-hand side operand when the left-hand side is `null` or `undefined`.  


```javascript
console.log(0 || 100);
console.log(0 ?? 100);
```

Output:
```
100
0
```

