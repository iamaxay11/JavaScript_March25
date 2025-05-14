let person ={

    name : "akki",
    age : 28,
    salary : 50000,
    bonus : function(){
        console.log(0.1 * this.salary)
    }
}
// keys
for(key in person){
    console.log(key);
    
}

// values
for(key in person){
    console.log(person[key]);    
}

// key values
for(key in person){
    console.log(key , ": ",person[key])    
}

person.bonus()
