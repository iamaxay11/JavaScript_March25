// Palindrome number checker using do while

let num = 1234321;
let num1 = num;
let reverseNo = 0;
let digit;

do{
    digit = num1 % 10;
    reverseNo = (reverseNo * 10) + digit;
    num1 = Math.floor(num1/10);
}while(num1 > 0)

console.log(reverseNo)

if(num === reverseNo){
    console.log("Its Palindrome")
}else{
    console.log("Not Palindrome")
}