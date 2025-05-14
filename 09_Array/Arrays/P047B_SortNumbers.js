// Ascending Order

let num = [12, 34, 65, 23, 15, -12, 0, 35, 99]

console.log(num.sort((a,b)=> a-b));

// Descending Order

let num2 = [12, 66, 78, 33, -13, 0, 34, 76]
const decArray = num.sort(function(a, b){
    return b-a;
})

console.log(decArray)