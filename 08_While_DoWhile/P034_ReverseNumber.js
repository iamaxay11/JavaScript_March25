// Reverse a given number using while

let num = 1432;
let reverseNo = 0;
let digit;

while (num > 0){
    digit = num % 10;
    reverseNo = (reverseNo * 10) + digit ;
    num = Math.floor(num/10) // Note: In JS, this is floating-point division.
                             // For robust integer reversal, consider using Math.floor()
}
console.log(reverseNo)