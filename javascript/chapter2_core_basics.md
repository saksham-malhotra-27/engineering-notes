# 2. JavaScript Core Basics

## 2.1 Variables & Declarations
### What are Variables?

Variables are containers used to store data values in JavaScript.
JavaScript allows variables to be declared using:
- var
- let
- const

#### var

`var` is the older way of declaring variables in JavaScript.
Characteristics:
- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with undefined

#### let

`let` was introduced in ES6 as a modern replacement for var.
Characteristics:
- Block scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but remains in Temporal Dead Zone until declaration

#### const

`const` is used when a variable should not be reassigned.
Characteristics:
- Block scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized during declaration

Important:

const prevents reassignment, not mutation.

For objects and arrays:
- The reference cannot change
- Internal values can still change

### Declaration vs Initialization

#### Declaration

Creating a variable without assigning a value.

#### Initialization
Assigning the first value to a variable.
A variable can be:
- Declared
- Initialized later
- Declared and initialized together

### Redeclaration vs Reassignment
#### Redeclaration
Creating the same variable again in the same scope.

#### Reassignment
Changing the value stored in an existing variable.

Rules:

var:
- Redeclaration allowed
- Reassignment allowed

let:
- Redeclaration not allowed
- Reassignment allowed

const:
- Redeclaration not allowed
- Reassignment not allowed

## 2.2 Data Types in JavaScript
JavaScript data types define the kind of value a variable can store.
JavaScript has two main categories:
1. Primitive Data Types
2. Reference Data Types

### 1. Primitive Data Types

Primitive values represent single, immutable values. They are stored directly and copied by value.
JavaScript has 7 primitive data types:
- String
- Number
- Boolean
- Undefined - "Value is not assigned yet"
- Null - "The value is deliberately empty"
- Symbol - Used to create unique identifiers
- BigInt - Allows handling very large numbers, cannot represent floats

### 2. Reference Data Types

Reference types store references to data stored in memory. They are copied by reference.
Every reference type is an Object including: 
- Arrays
- Functions
- Obj

### Immutable vs Mutable
#### Immutable

A value whose content cannot be changed after creation. Primitive values are immutable.

Example:
If a string value changes, JavaScript creates a new value instead of modifying the existing one.

```
let name = "abc";

name = "xyz";
```
looks like "abc" changed but actually, the value still exists. new "xyz" value is assigned. 

#### Mutable

A value whose internal content can be modified after creation. Objects and arrays are mutable.

Example:
An object property can be changed without creating a new object.

## 2.3 JavaScript Type System

### Dynamic Typing

JavaScript is a dynamically typed language.
This means:
- Variable types are determined at runtime
- A variable can store different types of values during execution

####  typeof Operator

`typeof` is used to check the type of a value.

Returns a string representing the data type.

Common outputs:

- string
- number
- boolean
- undefined
- object
- function
- bigint
- symbol

#### Special typeof Cases
- null -> Object - reason: historical bug 
- array -> Object - reason: internally, arrays are object
- function -> function - reason: internally, functions are object but JavaScript provides special handling for functions

### Type Conversion

Type conversion means manually changing one data type into another. It is also called explicit conversion.

Common conversion methods:

- String()
- Number()
- Boolean()

### Type Coercion

Type coercion is JavaScript automatically converting one type into another during an operation. This happens implicitly.

```
String + Number:
Number gets converted into String

String - Number:
String gets converted into Number
```

#### Equality and Type Coercion

JS has two equality operators: 
1. == - allows coercion, "1"==1: true
2. === - strict, no type conversion happens

#### NaN

NaN means "Not a Number". It represents an invalid numeric operation. It's still `number` type.

## 2.4 Truthy & Falsy Values

### Boolean Conversion

In JavaScript, every value can be converted into either:
- true
- false
This conversion is done using Boolean() internally.

### Falsy Values

Falsy values are values that become false when converted to Boolean. JavaScript has only a few falsy values:
- false
- 0
- -0
- "" (empty string)
- null
- undefined
- NaN

### Truthy Values

Any value that is not falsy is considered truthy.
Examples:
- Non-empty strings
- Any non-zero number
- Objects (empty too)
- Arrays (empty too since they are reference values and exist in memory)
- Functions

## 2.5 Operators in JavaScript

Operators are symbols or keywords used to perform operations on values. Main categories:
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Unary Operators

### Arithmetic Operators

Used to perform mathematical operations. E.g:
```
+
-
*
/
%
**
```

### Assignment Operators

Used to assign values to variables. Common operators:
```
=
+=
-=
*=
/=
```

### Comparison Operators

Used to compare values. Common operators:
```
>
<
>=
<=
==
===
!=
!==
```

### Logical Operators

Used to combine or invert conditions. Operators:
```
&&
||
!
```

### Short Circuit Evaluation

Logical operators stop evaluating once the result is already determined.

- For `&&`: If the first value is falsy, the second value is not evaluated.
- For `||`: If the first value is truthy, the second value is not evaluated.

### Nullish Coalescing Operator (??)
Used to provide a default value only when the left side is:
- null
- undefined

Difference from OR:
- `||` considers all falsy values.
- `??` only considers null and undefined.

### Optional Chaining (?.)

Used to safely access nested properties. If a value is null or undefined, it returns undefined instead of throwing an error.

## 2.6 Memory & References

JavaScript stores and accesses values differently depending on whether they are primitive or reference types.

### Stack and Heap Memory (High Level)

JavaScript uses memory areas to store data:

Stack:
- Stores primitive values
- Stores references to objects
- Has faster access

Heap:
- Stores objects, arrays, and functions
- Used for dynamically allocated memory

### Primitive Value Storage

Primitive values are stored as actual values.
When a primitive value is copied:
- A new independent copy is created
- Changes to one variable do not affect another variable
Example concept:
Two variables containing the same primitive value are independent.

### Reference Value Storage

Reference types store a reference to the actual object in memory.
When a reference value is copied:
- The reference is copied
- Both variables point to the same object
Changes through one reference can affect the other.

### Pass by Value vs Pass by Reference

JavaScript is technically:
`Pass by Value`
For primitive types:
 - The actual value is copied
For objects:
 - The value being copied is the reference to the object


### Object Comparison

Objects are compared by reference, not by content. Two different objects with identical properties are still considered different because they have different references.

#### Shallow Copy

A shallow copy creates a new object but only copies the first level. Nested objects still share the same reference.

#### Deep Copy

A deep copy creates a completely independent copy. Nested objects are also copied separately.

## Interview Points

**Q: Difference between var, let, and const?**

var:
- Function scoped
- Can redeclare
- Can reassign
let:
- Block scoped
- Cannot redeclare
- Can reassign
const:
- Block scoped
- Cannot redeclare
- Cannot reassign


**Q: Why was let/const introduced if var already existed?**

Because var has confusing behavior due to:
- Function scope
- Redeclaration issues
- Hoisting behavior
let and const provide safer block-level scoping.


**Q: Does const make objects immutable?**

No. const only prevents reassignment of the reference.
The internal properties of objects and arrays can still be modified.

**Q: Which should we prefer: var, let, or const?**

Prefer:
1. const by default
2. let when reassignment is needed
3. Avoid var in modern JavaScript


**Q: Difference between primitive and reference types?**

Primitive:
- Stores actual value
- Copied independently
- Immutable

Reference:
- Stores memory reference
- Multiple variables can point to same data
- Mutable

**Q: Is array a data type in JavaScript?**

Technically no. Arrays are objects in JavaScript.

**Q: Is function a data type in JavaScript?**

Functions are objects, but typeof returns "function" because JavaScript provides special handling.

**Q: Why is null typeof object?**

Because of an old JavaScript implementation bug that was never fixed due to backward compatibility.

**Q: Why does typeof [] return object?**

Because arrays are internally objects in JavaScript.

**Q: How do you check if a value is an array?**

Using Array.isArray()

**Q: What are falsy values in JavaScript?**

Falsy values are values that evaluate to false in boolean context:
- false
- 0
- ""
- null
- undefined
- NaN

**Q: Is an empty array truthy or falsy?**

Truthy. Arrays and objects are always truthy, even if they are empty.

**Q: Is an empty object truthy or falsy?**

Truthy. Objects are reference types and are truthy values.

**Q: What happens when a non-boolean value is used inside an if condition?**

JavaScript automatically converts it into a boolean value using truthy/falsy rules.

**Q: Difference between null and undefined?**

undefined:
- Variable declared but value not assigned
null:
- Intentional absence of value

**Q: Difference between || and ?? operators?**

||:
- Works with all falsy values

??:
- Works only with null and undefined

**Q: What is short circuit evaluation?**

A feature where JavaScript stops evaluating an expression once the result is already known.

**Q: What is optional chaining?**

A way to safely access properties of objects without getting errors when intermediate values are null or undefined.

**Q: Is JavaScript pass by value or pass by reference?**

JavaScript is pass by value. For objects, the value being passed is the reference.

**Q: Why does changing one object affect another object?**

Because both variables store the same reference pointing to the same object in memory.

**Q: Why do primitive values not change after assignment?**

Because primitives are immutable. Updating a primitive creates a new value instead of modifying the existing one.

**Q: What is the difference between shallow copy and deep copy?**

Shallow copy:
- Copies only first level
- Nested objects share references

Deep copy:
- Creates completely independent nested copies