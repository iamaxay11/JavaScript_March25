console.log("----------  ----------")
// 1.charAt(index) -> Returns the character at a given index.
let str = "Mumbai Indians";
console.log(str.charAt(2)); // Index starts with 0 -> m


console.log("---------- toUpperCase() and toLowerCase() ----------")
// 2.toUpperCase() and toLowerCase()
str = "Mumbai Indians";
console.log(str.toLowerCase())
console.log(str.toUpperCase())


console.log("---------- indexOf(substring) ----------")
// 3.indexOf(substring/ char)  -> Returns the first occurrence index, or -1 if not found.
str = "Mumbai Indians";
console.log(str.indexOf("Indians")); // 7
console.log(str.indexOf("indians")); // -1 (case Sensitive)
console.log(str.indexOf("b")); // 3


console.log("---------- lastIndexOf(substring) ----------")
// 4.lastIndexOf(substring/char) -> Returns the last occurrence.
str = "Mumbai Indians";
console.log(str.lastIndexOf("Indians")); // 7


console.log("---------- includes(substring) ----------")
// 5.includes(substring) -> Returns true if the string contains the substring.
str = "Mumbai Indians";
console.log(str.includes("Indians")); 


console.log("---------- startsWith(substring) ----------")
// 6.startsWith(substring) -> Returns true if the string contains the substring.
str = "Mumbai Indians";
console.log(str.startsWith("Indians"));  // false
console.log(str.startsWith("Mum"));  // true


console.log("---------- endsWith(substring) ----------")
// 7.endsWith(substring) -> Checks if string ends with given characters.
str = "Mumbai Indians";
console.log(str.endsWith("Indians"));  // true
console.log(str.endsWith("Mum"));  // false


console.log("---------- replace(oldValue, newValue) ----------")
// 8.replace(oldValue, newValue) -> Replaces part of the string.
str = "Mumbai Indians";
console.log(str.replace("Mumbai","Pune"));
console.log(str.replace("Mumbai","MUMBAI"));
//  Interview Tip: replace only replaces first match.


console.log("---------- replaceAll(oldValue, newValue) ----------")
// 9.replaceAll(oldValue, newValue) -> Replaces all matching values in the string.
str = "Mumbai Indians";
console.log(str.replace("a","A")); // MumbAi Indians
console.log(str.replaceAll("a","A")); // MumbAi IndiAns


console.log("---------- trim() ----------")
// 10.trim() -> Removes extra spaces from both sides.
str = "     Mumbai Indians      ";
console.log(str);
console.log(str.trim());


console.log("---------- split(separator) ----------")
// 11.split(separator) -> Splits a string into an array.
str = "a,b,c,d";
console.log(str.split(",")); // ["a", "b", "c", "d"]


console.log("---------- split(separator) ----------")
// 12.concat() -> Adds strings
str1 = "Mumbai";
str2 = " Indians";
console.log(str1.concat(str2));
console.log(str1.concat(str2.concat(" Winning the cup")))

// Escape Characters
/*
Escape | Meaning
\'     | Single quote
\"     | Double quote
\\     | Backslash
\n     | New Line
\t     | Tab Space
*/