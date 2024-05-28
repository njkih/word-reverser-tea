# Word Counter Tea

<p>Welcome to the <strong>Word Counter Tea</strong>. This library provides a simple and efficient way to count the number of words in a given text. It can be used in various applications where text analysis is required.</p>

## Features

<ul>
  <li>Count the number of words in a text</li>
  <li>Ignore punctuation and special characters</li>
  <li>Handle multiple languages</li>
  <li>Fast and lightweight</li>
</ul>

## Installation

<pre>
<code>
npm install word-counter-tea
</code>
</pre>

## Usage

<p>First, import the <code>countWords</code> function from the library:</p>

<pre>
<code>
const { countWords } = require('word-counter-tea');
</code>
</pre>

### Counting Words

<p>Use the <code>countWords</code> function to count the number of words in a text:</p>

<pre>
<code>
const text = "Hello, world! This is a simple word counter example.";
const wordCount = countWords(text);
console.log('Word count:', wordCount);
</code>
</pre>

## API

### countWords(text)

<p>Counts the number of words in a given text.</p>

<ul>
  <li><strong>text</strong> (string): The text to count words in.</li>
  <li><strong>Returns</strong>: The number of words in the text.</li>
</ul>

## Example

<pre>
<code>
const { countWords } = require('word-counter-tea');

const text = "OpenAI's ChatGPT is an advanced language model.";
const wordCount = countWords(text);
console.log('Word count:', wordCount);  // Output: Word count: 7
</code>
</pre>

## License

<p>This project is licensed under the MIT License.</p>
