# fix-floats
**A function which fixes floating-point rounding errors in JavaScript**

Importing fixFloat:
```js
import fixFloat from "fix-floats";
```

Fix floating-point errors to specified number of decimal places:
```js
const num = 0.101 + 0.202; // 0.30300000000000005

// to significant decimal places:
fixFloat(num, 3) // 0.303

// with less decimal places:
fixFloat(num, 2) // 0.3
fixFloat(num, 1) // 0.3

// with more decimal places:
fixFloat(num, 4) // 0.303
fixFloat(num, 5) // 0.303
```

Fix floating-point errors with predicted number of wanted decimal places:
```js
const num = 0.101 + 0.202; // 0.30300000000000005

// decimal place prediction:
fixFloat(num) // 0.303
```
