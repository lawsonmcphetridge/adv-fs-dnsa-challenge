function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return true;
    }
  }
  return false;
}


const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
console.log(some(arr, isEven)); // test, if works returns true
