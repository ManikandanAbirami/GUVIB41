const walk = () => {
  console.log('Walking!!!!!');
  run();
}
const run = () => {
  console.log('Running!!!!!');
  setTimeout(() => {
    console.log("Running to check!!!");
  }, "5000");
  rest();
}
const rest = () => {
  console.log('Take rest!!!!!');
  setTimeout(() => {
    console.log("Drinking water!!!");
  }, "2000");
}
walk();