

function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting a product from the available list...')
      resolve({ id: id, productName: 'Mobile' });
    }, 2000);
  });
}

function getListofMobiles(item, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting mobiles from the available list...')
      // resolve(['Apple', 'Samsung', 'MI', 'Oppo', 'OnePlus'])
      reject(new Error("$$$$$$$$ Error $$$$$$$$"));
    }, 2000);
  })
}

function getItems(item, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Items list.....')
      resolve(['MAC', 'IPHONE', 'AirPods', 'IWatch', 'Tab'])
    }, 2000);
  })
}


// getProduct(1, function (product) {
//   console.log('Product', product);
//   getListofMobiles(product.productName, (items) => {
//     console.log('Mobiles', items);
//     getItems(items[1], getItems(items));
//   })
// })

// const prom = getProduct(1);
// prom.then(product => console.log(product));

// getProduct(1)
//   .then(product => getListofMobiles(product.productName))
//   .then(items => getItems(items[1]))
//   .then(item => console.log('Item name: ', item))
//   .catch(err => console.log('Error: ', err.message));

// console.log(getProduct(1));

// Async and Await approach
async function display() {
  try {
    const product = await getProduct(1);
    const listofMobiles = await getListofMobiles(product.productName);
    const items = await getItems(listofMobiles[0]);
    console.log(items);
  }
  catch (err) {
    console.log('Entered catch error: ', err.message);
  }
}

display();