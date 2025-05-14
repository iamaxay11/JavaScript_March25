function Palindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
}
console.log(Palindrome("madam"));