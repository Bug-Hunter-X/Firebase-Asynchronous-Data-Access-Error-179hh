The following Firebase code snippet demonstrates a common error related to asynchronous operations and data retrieval:

```javascript
// Incorrect way to access data from Firebase Realtime Database
db.ref('users').once('value').then(snapshot => {
  const userData = snapshot.val();
  console.log(userData.name); // This might throw an error if userData is null or undefined
});

// Accessing data outside of the promise chain
console.log(userData); // userData will be undefined here because the previous line is asynchronous
```

The problem arises because the `once('value')` method is asynchronous. The code following `then` will only execute *after* the data is retrieved from the database.  Accessing `userData` before the data has been fetched will result in an error.