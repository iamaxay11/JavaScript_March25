/*
&& checks both sides.
It returns the first falsy value it finds.
If all are truthy, it returns the last value.
*/

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

console.log(5 && 10);    // 10 (both truthy, so returns last value)
console.log(0 && 10);    // 0 (first falsy is 0)
console.log("hello" && "world");  // "world"
console.log("" && "world");       // "" (empty string is falsy)


/*
|| checks both sides.
It returns the first truthy value it finds.
If none are truthy, it returns the last falsy value.
*/

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

console.log(5 || 10);    // 5 (first truthy)
console.log(0 || 10);    // 10 (0 is falsy, so returns 10)
console.log("" || "world");  // "world"
console.log(null || undefined); // undefined (both falsy, so last)
