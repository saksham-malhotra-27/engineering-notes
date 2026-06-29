# 7. this, call, apply, bind 

## 7.1 `this` keyword

### What is `this`?

The `this` keyword refers to the current object in which a function is executed.

### Rules for `this`

1. Global context: `window` (browser)
2. Object method: the object itself
3. Constructor function: the new instance
4. Arrow function: lexical scope


### `this` in Different Contexts

#### Global Scope

```javascript
console.log(this);
```

Browser:
```
window
```

---

#### Regular Function

```javascript
function greet() {
    console.log(this);
}

greet();
```

Browser:
```
window
```

Strict Mode:
```
undefined
```

---

#### Object Method

```javascript
const person = {
    name: "Saksham",
    greet() {
        console.log(this.name);
    }
};

person.greet();
```

Output:
```
Saksham
```

---

#### Constructor Function

```javascript
function Person(name) {
    this.name = name;
}

const p = new Person("Saksham");

console.log(p.name);
```

Output:
```
Saksham
```

---

#### Arrow Function

Arrow functions do not have their own `this`.

They inherit `this` from their lexical scope.


## 7.2 `call()` 

### What is `call()`?

`call()` is a function method that allows you to call a function with a specific `this` value.

### Syntax

```javascript
func.call(thisArg, arg1, arg2, ...);
```

## 7.3 `apply()` 

### What is `apply()`?

`apply()` is a function method that allows you to call a function with a specific `this` value.

### Syntax

```javascript
func.apply(thisArg, [argsArray]);
```

## 7.3 `bind()`

### What is `bind()`?

- `bind()` is also a function method that allows you to call a function with a specific `this` value.

- Unlike `call()` and `apply()`, `bind()` returns a new function with the specified `this` value.

```javascript 
const newFunc = func.bind(thisArg, arg1, arg2, ...);
```

## 7.5 Difference between `call()`, `apply()` and `bind()`

Suppose we have:

```javascript
const person = {
    name: "Saksham"
};

function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}
```

### Using `call()`
Invokes the function immediately and accepts arguments individually.

```javascript
introduce.call(person, "Delhi", "India"); 
```
Output: Saksham lives in Delhi, India

### `apply()` 
Invokes the function immediately with provided arguments.

```javascript 
introduce.apply(person, ["Delhi", "India"]); 
```
Output: Saksham lives in Delhi, India

### `bind()` 

Returns a new function with provided `this` value.

```javascript
const newFunc = introduce.bind(person, "delhi", "India");
newFunc();
```
Output: Saksham lives in delhi, India

## Important - Global Scope

Top-level `this` depends on the environment:

- Browser (normal `<script>`) → `window`
- Browser (ES Module) → `undefined`
- Node.js (CommonJS) → `module.exports`
- Node.js (ES Module) → `undefined`

## 7.6 Method Borrowing 

``` javascript
const person1 = {
    name: "Saksham",
    greet() {
        console.log(`Hello ${this.name}`);
    }
};

const person2 = {
    name: "John"
};

person1.greet.call(person2);
```
Output: Hello John

This is method borrowing. What happened here is that we borrowed the `greet()` method from `person1` and called it with `this` context from person2 which had `name`, hence `this.name` resolved to `John` not `Saksham`

