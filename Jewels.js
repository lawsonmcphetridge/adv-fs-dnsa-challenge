function countJewels(jewels, stones) {
  var count = 0;
  for (var i = 0; i < stones.length; i++) {
    if (jewels.indexOf(stones[i]) != -1) {
      count++;
    }
  }
  return count;
}

console.log(countJewels('aA', 'aAAbbbb') === 3);
console.log(countJewels('z', 'ZZ') === 0);
