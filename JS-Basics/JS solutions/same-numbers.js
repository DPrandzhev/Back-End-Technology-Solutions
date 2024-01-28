function solve(inputNumber) {


        let sum = 0;
        const firstDigit = inputNumber % 10;
        let is_same = true;


        while (inputNumber > 0) {

            const currentDigit = inputNumber % 10;

            if (firstDigit != currentDigit) {
               is_same = false;     
            } 

            sum += inputNumber % 10;
            inputNumber = parseInt(inputNumber / 10, 10);
        }

    console.log(is_same);
    console.log(sum);
}

solve(22222);