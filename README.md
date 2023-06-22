# Greek Utilities


A JavaScript library for Modern Greek language with utilities such as removing and putting accents,
transcription from Greek script into Latin script (both Erasmian and phonetic), dividing words into syllables.

[![NPM](https://nodei.co/npm/modern-greek-accentuation.png)](https://nodei.co/npm/modern-greek-accentuation/)

Installation
----------
```javascript
npm install --save modern-greek-accentuation
````

Usage
-----

### Node.js
```javascript
const mga = require('modern-greek-accentuation');
```
### React.js
```javascript
import mga from "modern-greek-accentuation"
```

### - convertToMonotonic(sentence_or_word)
Converts polytonic to monotonic Greek


Example:
```javascript
var monotonic = mga.convertToMonotonic('Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος');
console.log(monotonic); //Μήνιν άειδε, θεά, Πηληϊάδεω Αχιλήος
```

### - sanitizeGreek

### - whereIsAccent

### - putAccent

### - modernGreekSyllabify

### - erasmianTranscription

### - modernTranscription



