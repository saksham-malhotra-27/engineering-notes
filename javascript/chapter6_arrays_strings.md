# 6. Arrays & Strings

## 6.1 Arrays

### What is an Array?

An array is an ordered collection of values stored in a single variable.

Arrays in JavaScript:

* Are dynamically sized
* Can store different data types
* Are objects internally

```javascript
const arr = [1, 2, 3];

console.log(arr[0]); // 1
console.log(arr.length); // 3
```

### Creating Arrays

Arrays can be created in multiple ways.

```javascript
const arr1 = [1, 2, 3];

const arr2 = new Array(1, 2, 3);

const arr3 = Array.from("hello");
// ['h', 'e', 'l', 'l', 'o']

const arr4 = Array.of(1, 2, 3);
```

### Arrays are Objects

```javascript
const arr = [1, 2, 3];

console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
```

---

## 6.2 Basic Array Methods

### push()

Adds elements at the end.

```javascript
const arr = [1, 2];

arr.push(3);

console.log(arr); // [1,2,3]
```

### pop()

Removes the last element.

```javascript
const arr = [1,2,3];

console.log(arr.pop()); // 3
console.log(arr); // [1,2]
```

### shift()

Removes the first element.

```javascript
const arr = [1,2,3];

console.log(arr.shift()); // 1
console.log(arr); // [2,3]
```

### unshift()

Adds elements at the beginning.

```javascript
const arr = [2,3];

arr.unshift(1);

console.log(arr); // [1,2,3]
```

### indexOf()

Returns the first matching index.

```javascript
const arr = [10,20,30];

console.log(arr.indexOf(20)); // 1
```

### includes()

Checks if a value exists.

```javascript
const arr = [1,2,3];

console.log(arr.includes(2)); // true
```

### slice()

Returns a new array.

Does not modify the original array.

```javascript
const arr = [1,2,3,4];

console.log(arr.slice(1,3)); //[2,3]
// arr.slice(startIndex, endIndex) [start,end)
console.log(arr); //[1,2,3,4]
```

### splice()

Adds, removes or replaces elements.

Modifies the original array.

```javascript
const arr = [1,2,5];

arr.splice(2,0,3,4);

console.log(arr);
// [1,2,3,4,5]
// arr.splice(start, deleteCount, item1, item2 ...)
```

### concat()

Joins arrays.

```javascript
const a=[1,2];
const b=[3,4];

console.log(a.concat(b));
```

### join()

Converts array into string.

```javascript
const arr=[1,2,3];

console.log(arr.join("-"));
// 1-2-3
```
