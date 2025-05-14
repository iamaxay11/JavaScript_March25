let person ={

    name : "akki",
    age : 28,
    salary : 50000,
    bonus : function(){
        console.log(0.1 * salary)
    }
}

let count = Object.keys(person).length
console.log(count)