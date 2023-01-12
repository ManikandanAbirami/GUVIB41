
// const product = getProduct(1);
// console.log(product);

getProduct(1, function (product) {
  console.log('Product', product);
})

function getProduct(id, callback) {
  setTimeout(() => {
    console.log('Getting a product from the available list...')
    callback({ id: id, productName: 'Mobile phones' })
    // return { id: id, productName: 'Mobile phones' }
  }, 2000);
}


function getMobiles(item) {
  return ['Apple', 'Samsung', 'MI', 'Oppo', 'OnePlus'];
}
