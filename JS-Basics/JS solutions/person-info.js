function createAndPrintPerson(firstName, lastName, age) {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;  
}

let person1 = createAndPrintPerson("Peter", "Pan", "20");
