// const prom = Promise.resolve({ name: 'Guvi B41 WD' });
// prom.then(result => console.log(result));

// const promRej = Promise.reject(new Error('Error occured...'));
// promRej.catch(error => console.log(error));

// const promRejWOErrorClass = Promise.reject('Error occured...');
// promRejWOErrorClass.catch(error => console.log(error));


const prom1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async 1');
    resolve(1);
  }, 2000)
})

const prom2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async 2');
    resolve(2);
  }, 2000)
})

Promise.all([prom1, prom2])
  .then(res => console.log(res));

