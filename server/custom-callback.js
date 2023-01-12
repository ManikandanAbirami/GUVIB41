
// const product = getProduct(1);
// console.log(product);

getProduct(1, function (product) {
  console.log('Product', product);
  getListofMobiles(product.productName, (items) => {
    console.log('Mobiles', items);
    getItems(items[1], function (items) {
      console.log('Items', items);
    })
  })
})

function getProduct(id, callback) {
  setTimeout(() => {
    console.log('Getting a product from the available list...')
    callback({ id: id, productName: 'Mobile' })
    // return { id: id, productName: 'Mobile phones' }
  }, 2000);
}


function getListofMobiles(item, callback) {
  setTimeout(() => {
    console.log('Getting mobiles from the available list...')
    callback(['Apple', 'Samsung', 'MI', 'Oppo', 'OnePlus'])
  }, 2000);
}

function getItems(item, callback) {
  if (item == 'Apple') {
    setTimeout(() => {
      console.log('Items list.....')
      callback(['MAC', 'IPHONE', 'AirPods', 'IWatch', 'Tab'])
    }, 2000);
  }
  if (item == 'Samsung') {
    setTimeout(() => {
      console.log('Items list.....')
      callback(['Flip', 'Fold', 'Watch', 'Tab'])
    }, 2000);
  }
}
