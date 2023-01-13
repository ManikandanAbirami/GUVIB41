const prom = new Promise((resolve, reject) => {
  //async work!
  setTimeout(() => {
    resolve("welcome!!!"); // pending, resolved(fulfilled)
    reject(new Error('Error occured!!!')); // pending, rejected
    // reject('Error occured!!!');
  }, 2000);
})

// prom.then(res => console.log('Final value: ', res));
prom.then(res => console.log('Final value: ', res))
  .catch(err => console.log('Err: ', err.message));