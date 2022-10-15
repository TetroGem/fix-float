import fixFloat from "./index.mjs";

console.log('Hello World');
const float = 0.101 + 0.202;
console.log(float);
console.log(fixFloat(float));
console.log(fixFloat(float, 3));
console.log(fixFloat(float, 2));
console.log(fixFloat(float, 1));