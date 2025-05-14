// Check Leap Year

let year = 1902;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Its a leap year ")
} else{
    console.log("Not a Leap year")
}