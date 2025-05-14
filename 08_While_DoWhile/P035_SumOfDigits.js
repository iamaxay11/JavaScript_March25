// Sum of digits of a number using while
let num = 1357;
let sum = 0;


while(num > 0){
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num/10)
}
console.log(sum)