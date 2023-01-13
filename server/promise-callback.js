

function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting a product from the available list...')
      resolve({ id: id, productName: 'Mobile' });
    }, 2000);
  });
}


function getListofMobiles(item, callback) {
  setTimeout(() => {
    console.log('Getting mobiles from the available list...')
    callback(['Apple', 'Samsung', 'MI', 'Oppo', 'OnePlus'])
  }, 2000);
}

function getItems(item, callback) {
  setTimeout(() => {
    console.log('Items list.....')
    callback(['MAC', 'IPHONE', 'AirPods', 'IWatch', 'Tab'])
  }, 2000);
}
