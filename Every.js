function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return false;
    }
  }
  return true;
}


const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
console.log(every(arr, isEven)); // test to see if it returns false.
