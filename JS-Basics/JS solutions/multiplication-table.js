function multiplication(param) {
    `use strict`;
    
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result = i * param

        console.log(`${param} X ${i} = ${result}`);
    }

}

multiplication(5)

multiplication(2)