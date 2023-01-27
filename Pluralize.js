function pluralize(words) {
  var wordCounts = {};
  var uniqueWords = new Set();

  // Count the number of occurrences of each word
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  // Check if a word appears more than once, and if so, add the pluralized version to the set of unique words
  for (var word in wordCounts) {
    if (wordCounts[word] > 1) {
      uniqueWords.add(word + 's');
    } else {
      uniqueWords.add(word);
    }
  }
  return uniqueWords;
}

console.log(pluralize(['cow', 'pig', 'cow', 'cow']));
console.log(pluralize(['table', 'table', 'table']));
console.log(pluralize(['chair', 'pencil', 'arm']));
