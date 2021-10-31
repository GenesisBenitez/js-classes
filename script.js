class Person {
    firstName;
    lastName;
    DOB;
    constructor(firstName, lastName, DOB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
    }

getFirstName(){
    return this.firstName;
}
setFirstName(firstName){
    this.firstName = firstName;
}

getLastName(){
    return this.lastName;
}

setLastName(lastName){
    this.lastName = lastName;
}

}

    // greeting(){
    //     console.log("hello " + this.firstName + " " + this.lastName);
    // }
// }

var personOne = new Person("Genesis", "Benitez", "08/20/1994");
var personTwo = new Person("Saul", "Canelo Alvarez", "10/23/1980");

// personOne.greeting();
// personTwo.greeting();

// console.log(personOne);
// console.log(personOne.getFirstName());
// personOne.setFirstName("Gen");
// console.log(personOne);

document.write(`
<h1>
${personOne.firstName + " " + personOne.lastName}
</h1>
<h2>
${personTwo.firstName + " " + personTwo.lastName}
</h2>
`)