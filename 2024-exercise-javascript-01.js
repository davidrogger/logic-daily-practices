function CreateLetterHeightDictionary(heights) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return heights.reduce((letterWithHeights, height, position) => {
    letterWithHeights[letters[position]] = height;
    return letterWithHeights;
  }, {})
}

function FindHigherLetter(lettersHeight, word) {
  return word.split('').reduce((higherLetter, letter) => {
    if (lettersHeight[letter] > higherLetter) higherLetter = lettersHeight[letter];
    return higherLetter
  }, 0)
}

function designerPdfViewer(heights, word) {
  const lettersWithHeight = CreateLetterHeightDictionary(heights);
  const wordSize = word.length;

  const higherLetterValue = FindHigherLetter(lettersWithHeight, word);

  return higherLetterValue * wordSize;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
