// Count the number of vowels

function countVowels(str){

    vowels = "aeiouAEIOU";
    count = 0;
    for(let char of str){
        if (vowels.includes(char)) {
            count++;
          }
    }
    return count;
}
console.log(countVowels("Mumbai Indians"))
