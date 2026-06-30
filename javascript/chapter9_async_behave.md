# 9. Asynchronous JS & Browser APIs

## 9.1 Timers 

### setTimeout()

It is used to execute a function once after a give delay. 

```javascript 
console.log("Start")

setTimeout(()=>{
    console.log("Inside timeout")
}, 1000)

console.log("end")
```

```
Output: 

Start
end
(after 1 sec)
Inside timeout
```

### setInterval()

`setInterval` runs a function repeatdely after a fixed interval.

Example:

```javascript 
console.log("Start")

setInterval(()=>{
    console.log("Inside setInterval")
}, 1000)

console.log("end")
```

Output: 

Start
end
(after 1 sec)
Inside setInterval
(after 2 sec)
Inside setInterval
(after 3 sec)
Inside setInterval
...

### clearInterval()

`clearInterval` stops the `setInterval` from running.

Example:

```javascript
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Count:", count);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);
```

### clearTimeout()

`clearTimeout()` stops the `setTimeout()` from executing.

Example:

```javascript
const timeoutId = setTimeout(() => {
    console.log("This will not run");
}, 1000);

clearTimeout(timeoutId);
```

## 9.2 Callback hell

Callback hell is a situation where multiple callbacks are nested inside each other leading to unreadable and unmaintainable code.

Example:


```javascript
loginUser(user, () => {
    getProfile(user, () => {
        getOrders(user, () => {
            sendEmail(user, () => {
                console.log("Done");
            });
        });
    });
});
```

This problem led to:
- Promises
- async/await

## 9.3 Promises

### What is a Promise?

A Promise represents a value that may be available now, later, or never.

It is used to handle asynchronous operations.

### Promise States

A Promise has three states:

- Pending
- Fulfilled
- Rejected

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Done");
    } else {
        reject("Failed");
    }
});
```

### then()

Runs when the promise is fulfilled.

```javascript
promise.then((result) => {
    console.log(result);
});
```

### catch()

Runs when the promise is rejected.

```javascript
promise.catch((error) => {
    console.log(error);
});
```

### finally()

Runs regardless of success or failure.

```javascript
promise.finally(() => {
    console.log("Cleanup");
});
```

## 9.4 Promise Chaining

Promise chaining is used to run async operations one after another. 

```javascript
function step1() {
    return Promise.resolve("Step 1 done")
}

function step2() {
    return Promise.resolve("Step 2 done")
}

step1()
    .then((result)=>{
        console.log(result)
        return step2()
    })
    .then((result2)=>{
        console.log(result2)
    })
```

Important : 
Always return the next promise inside `.then()`. If chaining is needed. 

## 9.5 async/await 

It is syntactic sugar over promises.

An async function always returns a promise. 

```javascript 
async function greet(){
    // do nothing 
}

console.log(greet()); 
```
Output -> Promise{} 

`await` pauses execution inside async function until promise settles. 

```javascript
async function run() {
    const result = await Promise.resolve("Done");
    console.log(result);
}

run();
```

Output:
```
Done
```

```javascript
async function fetchData() {
    try {
        const result = await Promise.reject("Failed");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
```

Output:
```
Failed
```

### Sequential vs Parallel Await

```javascript
const a = await task1();
const b = await task2();
```

Here `task2()` starts only after `task1()` completes.

Parallel:

```javascript
const [a, b] = await Promise.all([task1(), task2()]);
```

Here both tasks start together.

## 9.6 Promise APIs

### Promise.all()

Waits for all promises to resolve, if any one rejects, the whole rejects. 

```javascript
Promise.all([
    Promise.resolve(1), Promise.resolve(2)
]).then()
```


### Promise.allSettled()

Waits for all promises to settle, whether fulfilled or rejected.

```javascript
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
]).then((res) => {
    console.log(res);
});
```

Output:
```
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" }
]
```
### Promise.race()

Returns the result of the first settled promise.

```javascript
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("A"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("B"), 500))
]).then((res) => {
    console.log(res);
});
```

Output:
```
B
```

### Promise.any()

Returns the first fulfilled promise.

Ignores rejected promises unless all promises reject.

```javascript
Promise.any([
    Promise.reject("Failed"),
    Promise.resolve("Success")
]).then((res) => {
    console.log(res);
});
```

Output:
```
Success
```

## 9.7 Fetch API

### fetch()

`fetch()` is used to make HTTP requests.

It returns a Promise.

```javascript
async function getData() {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();

    console.log(data);
}
```

It gives a response object first not directly JSON data

```javascript
await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Saksham"
    })
});
```

Important:

`fetch()` only rejects on network failure, not on HTTP error status like 404 or 500.
Use response.ok() for that 

If we use promises for fetch, then we have to manage the promise manually using AbortController. 


## 9.8 AbortController

`AbortController` is used to cancel a fetch request.

```javascript
const controller = new AbortController();

fetch("/api/data", {
    signal: controller.signal
})

controller.abort();
```

Common Use case:
- search base cancellation
- compount unmount cleanup in react
- timeout-based request cancellation

## 9.9 Event Loop Advanced 

### Execution Order

JavaScript executes in this order:

1. Synchronous code
2. Microtasks
3. Macrotasks

### Microtasks

Examples:
- Promise callbacks
- async/await continuation
- queueMicrotask()

### Macrotasks

Examples:
- setTimeout()
- setInterval()
- DOM events

### Example

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:
```
A
D
C
B
```

- `A` and `D` are synchronous
- Promise callback goes to microtask queue
- setTimeout callback goes to macrotask queue
- Microtasks run before macrotasks


## 9.10 Browser Storage

### localStorage

Stores data with no expiry.

Data remains even after closing the browser.

```javascript
localStorage.setItem("name", "Saksham");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");
```

### sessionStorage

Stores data for one browser tab session.

Data is removed when tab is closed.

```javascript
sessionStorage.setItem("token", "abc");

console.log(sessionStorage.getItem("token"));
```

### Cookies

Cookies are small pieces of data stored in the browser and sent with HTTP requests.

Used for:
- Sessions
- Authentication
- Tracking

Important:

Cookies can be marked as:
- HttpOnly
- Secure
- SameSite

## 9.11 Events

### Event Listener

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

### Event Bubbling

Event bubbling means the event starts from the target element and moves upward to parent elements.

```javascript
parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});
```

If child is clicked:

Output:
```
Child clicked
Parent clicked
```

### Event Capturing

Event capturing means the event moves from parent to child before reaching the target.

```javascript
parent.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", () => {
    console.log("Child clicked");
});
```

If child is clicked:

Output:
```
Parent clicked
Child clicked
```

### stopPropagation()

Stops event from moving further.


```javascript
child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked");
});
```

### Event Delegation

Event delegation means attaching one event listener to a parent instead of attaching listeners to each child.

Useful for:
- Lists
- Dynamic elements
- Performance

```javascript
document.querySelector("#list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```


