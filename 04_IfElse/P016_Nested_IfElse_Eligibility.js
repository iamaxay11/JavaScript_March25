// Nested Conditions (Eligibility based on multiple criteria)
// Program to check job eligibility based on age AND degree

let age = 17;
let degree = false;

if (age >= 18){
    if (degree == true){
        console.log("You are Eligible for Job ")
    }else{
        console.log("You are Not Eligible for Job as you don't have degree ")
    }
} else{
    console.log("You are Not Eligible for Job as either yon't have degree or your age is not greater than 18 years")
}
