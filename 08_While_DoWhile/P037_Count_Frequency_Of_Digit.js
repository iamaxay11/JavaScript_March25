// Count how many times a digit appears in a number

let num = 23456787654232;
let searchedDigit = 2;
let count = 0;

while(num > 0){
    let digit = num % 10;
    if(digit === searchedDigit){
        count++;
    }
    num = Math.floor(num/10);
}
console.log(count)