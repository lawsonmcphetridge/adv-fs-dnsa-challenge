function progressDays(miles) {
  let progressDays = 0;
  for (let i = 1; i < miles.length; i++) {
    if (miles[i] > miles[i - 1]) {
      progressDays++;
    }
  }
  return progressDays;
}


console.log(progressDays([10, 11, 12, 9, 10])); // will output 3
console.log(progressDays([6, 5, 4, 3, 2, 9])); // will output 1
console.log(progressDays([9, 9])); // will output 0
