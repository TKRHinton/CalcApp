let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function sumNumbers(request, response) {

  let num1 = 2;
  let num2 = 3;

  let sum = logic.addNumbers(num1, num2)

  response.send(sum.toString());
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.sumNumbers = sumNumbers;