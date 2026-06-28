# 5. Objects, Prototypes & OOP 

## 5.1 Objects Basics 

### What is an Object? 
An object is a collection of key-value pairs used to represent real-world entities in JavaScript. 
Unlike primitive values, objects can store multiple related values and functions together.

### Creating Objects 

Object can be created in multiple ways: 

- Object Literal 
- `new` operator 
- `Object.create()` method

#### Object Literal
This is the most common and recommended way to create objects in JavaScript. In this method, we create an object using curly braces `{}` and store key-value pairs inside it.

```javascript 
// Creating an object using object literal 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
}; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York' } 
```

#### `new` operator
```javascript 
// Creating an object using new operator 
let person = new Object(); 
person.name = "John"; 
person.age = 30; 
person.city = "New York"; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York' } 
```

#### `Object.create()` method
```javascript 
// Creating an object using Object.create() method 
let person = Object.create(null); 
person.name = "John"; 
person.age = 30; 
person.city = "New York"; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York' } 
```

### Properties & Methods 
Properties are the data stored in an object. Methods are the functions stored in an object.

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York", 
    
    greet: function() { 
        console.log("Hello, my name is " + this.name); 
    } 
}; 

// Accessing properties 
console.log(person.name); // Output: John 
console.log(person.age); // Output: 30 
console.log(person.city); // Output: New York 

// Calling methods 
person.greet(); // Output: Hello, my name is John 
```

### Dot & Bracket Notation 
Dot notation is used to access properties and methods of an object. Bracket notation is also used to access properties and methods of an object.

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York", 
    
    greet: function() { 
        console.log("Hello, my name is " + this.name); 
    } 
}; 

// Accessing properties using dot notation 
console.log(person.name); // Output: John 
console.log(person.age); // Output: 30 
console.log(person.city); // Output: New York 

// Accessing properties using bracket notation 
console.log(person["name"]); // Output: John 
console.log(person["age"]); // Output: 30 
console.log(person["city"]); // Output: New York 

// Calling methods using dot notation 
person.greet(); // Output: Hello, my name is John 

// Calling methods using bracket notation 
person["greet"](); // Output: Hello, my name is John 
```

## 5.2 Object Operations 

### Adding properties 
New properties can be added to an object at any time using:

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

// Adding properties to an object 
person.email = "[EMAIL_ADDRESS]"; 
person.phone = "1234567890"; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York', email: '[EMAIL_ADDRESS]', phone: '1234567890' } 
```

### Deleting properties 
Properties can be deleted from an object using the `delete` operator:

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

// Deleting properties from an object 
delete person.email; 
delete person.phone; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York' } 
```

### Updating properties 
Properties can be updated at any time using the `delete` operator:

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

// Updating properties of an object 
person.email = "[EMAIL_ADDRESS]"; 
person.phone = "1234567890"; 

console.log(person); 
// Output: { name: 'John', age: 30, city: 'New York', email: '[EMAIL_ADDRESS]', phone: '1234567890' } 
```

### Dynamic Property Existence 
Bracket notation allows props to be accessed or created dynamically. Example:

```javascript 
// Creating an object with properties and methods 
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

// Dynamic property existence 
console.log(person["name"]); // Output: John 
console.log(person["email"]); // Output: undefined 
```

### Checking Property Existence 
JavaScript provides multiple ways to check whether a prop exists 

Common approaches include: 
- `in` 
- `hasOwnProperty` 
- `Object.hasOwn()` (modern & recommended)

Example:
```javascript
const obj = { a: 1 };
console.log("a" in obj); // true
console.log(obj.hasOwnProperty("a")); // true
console.log(Object.hasOwn(obj, "a")); // true

console.log("b" in obj); // false
```

#### Note: `hasOwnProperty` ignores inherited props, while `in` checks prototype chain too.

## 5.3 Built-in Object methods 

JavaScript provides several utility methods for working with Objects. 

### Object.keys() 
Returns an array containing all property names. 
Example: 
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(Object.keys(person)); 
// Output: [ 'name', 'age', 'city' ]
```
This doesn't include prototype chain properties.

### Object.values()
Returns an array containing all property values.
Example:
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};


console.log(Object.values(person)); 
// Output: [ 'John', 30, 'New York' ]
```

This doesn't include prototype chain properties. 

### Object.entries() 
Returns an array of key-value pairs. 
Example: 
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(Object.entries(person)); 
// Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
```

This doesn't include prototype chain properties. 

### Object.assign() 
Copies properties 
Example: 
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const newPerson = Object.assign({}, person);

console.log(newPerson); 
// Output: { name: 'John', age: 30, city: 'New York' }
```
This doesn't include prototype chain properties

In short, assign(), entries(), keys(), values() 
do not include prototype chain properties. 

### Object.freeze() && Object.seal() 

Prevents:
- Adding props (both)
- Removing props (both)
- Updating props (only freeze)

```javascript
const obj = { a: 1 };
const obj2 = { a: 1};
Object.freeze(obj); 
obj.a = 2; // will not update
console.log(obj.a); // Output: 1

Object.seal(obj2); 
obj2.a = 2; // will update
console.log(obj2.a); // Output: 2
```

## 5.4 Object Copying 

Assigning one object to another variable copies it's reference, not the object itself.  Example:
```javascript
const obj = { a: 1 };
const obj2 = obj;

obj2.a = 2;

console.log(obj.a); // Output: 2
```

### Shallow copy 

Copies only the top-level props. Only the premetive values are copied. Reference values are copied by reference. Example:

### Deep copy 

Copies the whole props. 

```javascript 

// Shallow copying
const obj = { a: 1, name:"saksham", skills:["javascript", "react"]}
const obj2 = {...obj}

obj2.skills.push("html")

console.log(obj.skills) // ['javascript', 'react', 'html']
console.log(obj2.skills) // ['javascript', 'react', 'html']

const obj3 = Object.assign({}, obj)
obj3.skills.push("html")

console.log(obj3.skills) // ['javascript', 'react', 'html']

// Deep copying 
//  Using `structuredClone()` (Recommended)

const obj4 = structuredClone(obj)
obj4.skills.push("html")
console.log(obj.skills) // ['Javascript', 'react']
console.log(obj4.skills) // ['javascript', 'react', 'html']

//  Using JSON 
const obj5 = JSON.parse(JSON.stringify(obj));
/* but this has limitation i.e 
 * It doesn't support 
 * Functions
 * Dates
 * RegEx
 * Maps, Sets
 * undefined
*/

**Till now, nothing copies/read/update/clone key/value pair from prototype chain.**

## 5.5 Object destructuing and spread 

### Object Destructuring

Allows extracting properties into separate variables.

### Nested Destructuring

Can directly extract values from nested objects.

### Default Values

Default values can be assigned while destructuring.

### Rest Operator

Collects remaining properties into another object.

### Spread Operator

Copies or merges object properties.


```javascript
const user = {
    name: "Saksham",
    age: 22,
    address: {
        city: "Delhi"
    }
};

// Object Destructuring
const { name, age } = user;

// Nested Destructuring
const {
    address: { city }
} = user;

 console.log(city) // prints Delhi

// Default Value
const { country = "India" } = user;

 console.log(country) // prints India if country is not present in user

// Rest Operator
const { age: _, ...remaining } = user;
// remaining = { name: "Saksham", address: { city: "Delhi" } }
// _ is a veriable name here nothing fancy 

// Spread Operator
const updatedUser = {
    ...user,
    age: 23
};
```

## 5.6 Prototype & Prototype chain 

### What is a prototype ? 
Every object in JS has an internal link to another object called its prototype.  

### What is a prototype chain ? 
If a property is not found in an object, it's prototype is searched. If not found, the prototype's prototype is searched, and so on. This continues until the property is found or the end of the chain is reached (null). This is called prototype chain. 

### Why do they exist? 
They allow objects to share methods instead of creating duplicate copies (DRY) 

### Method lookup 
Property Lookup follows prototypal chain including methods and properties. 

### `[[prototype]]` vs `prototype` 
`[[prototype]]` (double bracket) refers to the internal link.  `prototype` refers to the property of constructor function. 
Every object has an internal hidden link pointing to another object. This is `[[prototype]]`

This what JS uses for inheritance. 
Example: 
```javascript
const person = {
    greet(){
        console.log("hello")
    }
}

// JS creates a empty object and secretly stores : student.[[Prototype]] = person
// student itself has no properties 
// student.entries() -> will be empty array
const student = Object.create(person);

student.greet() // hello

// Is student's prototype exactly the person object?
console.log(student.__proto__ === person) // true
```

In the above example, what if we wrote `student.__proto__ === Object.prototype`? 
- Then it will be `false`. Every object has some properties/methods from `Object.prototype` on the prototype chain. That are like `toString()`, `hasOwnProperty()`, `valueOf`, etc. 
- `__proto__` returns the immediate prototype of an object, not the entire prototype chain.

#### Functions prototype

- `objectName.__proto__` and `functionName.__proto__` are equivalent in the sense that they both mean: "Give me the immediate prototype of this object." 
- functionName.prototype is a new Object created for that particular function by default. Example: 
```javascript
function greet(){
    console.log("hello")
}
function greet2(){

}

console.log(greet.__proto__ === Object.prototype) // true 
console.log(greet.prototype === Object.prototype) // true 
console.log(greet.__proto__ === greet2.__proto__) // true 
console.log(greet.__proto__ === greet2.prototype) // false 
console.log(greet.prototype === greet2.prototype) // false 
```

```
Person (function)
    │
    ├── __proto__ ─────────────► Function.prototype
    │
    └── prototype ─────────────► {}  (Person's own prototype object)
                                      │
                                      ▼
                               Object.prototype
```

**Tl;dr:**

- `__proto__` = "object's immediate prototype"
- `prototype` = "only in classes or functions"

### Methods to work with prototype chain 

#### Get Immediate Prototype 

- `Object.getPrototypeOf(obj)`  
- `obj.__proto__`  

#### Get Constructor's prototype

- `functionName.prototype`  
Example : 
```javascript
const animal = { name: "Animal" };
const rabbit = Object.create(animal, {
    legs: { value: 4 }
});
const proto = Object.getPrototypeOf(rabbit);
console.log(proto === animal); // true
console.log(animal.name);    // Animal
console.log(rabbit.name);    // Animal (inherited)
console.log(rabbit.legs);    // 4
```

#### Set or change prototype 
`Object.setPrototypeOf(obj, prototype)` changes the prototype of an existing object. 

```Javascript 
const car = {wheels:4}
const vehicle = {wheels:2}

Object.setPrototypeOf(car, vehicle)
// Now car inherits from vehicle
console.log(car.wheels) // 4 (own property) 
console.log(vehicle.wheels) // 2 (own property) 
console.log(Object.getPrototypeOf(car) === vehicle) // true 

// Important Note: 
// Never use `Object.setPrototypeOf()` to change prototype.  
// Prefer Object.create() instead of Object.setPrototypeOf(). 
// It modifies the internal [[Prototype]] link directly which can break the internal invariants of the object and break the internal link of the parent.  
```

#### Remove Prototype 
```javascript
const obj = {a:1}
Object.setPrototypeOf(obj, null) // Removes prototype

console.log(obj.__proto__) // null
console.log(obj.__proto__ === null) // true
console.log(Object.getPrototypeOf(obj) === null) // true
```

#### Get full prototype chain 

There is no single built-in method for this 
but you can do it - 
```javascript
function getPrototypeChain(obj){
    const chain = []; 
    let current = obj;
    while(current){
        chain.push(current)
        current = current.__proto__
        // or use standard API Object.getPrototypeOf(current)
    }
    return chain 
} 
```

## 5.7 Classes

### Why were Classes introduced?

Classes were introduced in ES6 to provide a cleaner syntax over JavaScript's prototype-based inheritance. Internally, classes still use prototypes.

### Constructor

The constructor initializes object properties when an object is created.

### Instance Methods

Methods available on every object created using the class.

### Static Methods

Static methods belong to the class itself and cannot be called by instances.

### Getters & Setters

Special methods that provide controlled access to object properties.

### extends

Used to inherit from another class.

### super

Used to access parent constructor or parent methods.

## 5.8 OOP Principles

### Encapsulation  

Bundling data and methods together while hiding implementation details 

### Abstraction 

Exposing only neccessary functionality while hiding internal complexity 

### Inheritance 
creating new classes using existing classes. 

### Polymorphism 

Allowing different objects to respond differently to the same method call. 

## Interview points 

