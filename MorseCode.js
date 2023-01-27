function uniqueWords(words, codes) {
  let transformations = new Set();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let transformation = '';
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      let code = codes[letter.charCodeAt(0) - 'a'.charCodeAt(0)];
      transformation += code;
    }
    transformations.add(transformation);
  }
  return transformations.size;
}

const words = ['cab', 'abc', 'xyz'];
const codes = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];
console.log(uniqueWords(words, codes)); // should output 3
