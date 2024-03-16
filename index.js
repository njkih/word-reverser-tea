// index.js

function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  const word = 'hello';
  const reversedWord = reverseWord(word);
  console.log(`Original word: ${word}`);
  console.log(`Reversed word: ${reversedWord}`);
  