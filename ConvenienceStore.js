function changeEnough(coins, amount) {
  var total =
    coins[0] * 0.25 + coins[1] * 0.1 + coins[2] * 0.05 + coins[3] * 0.01;
  if (total >= amount) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough([2, 100, 0, 0], 14.11) === false);
console.log(changeEnough([0, 0, 20, 5], 0.75) === true);
console.log(changeEnough([30, 40, 20, 5], 12.55) === true);
console.log(changeEnough([10, 0, 0, 50], 3.85) === false);
console.log(changeEnough([1, 0, 5, 219], 19.99) === false);

