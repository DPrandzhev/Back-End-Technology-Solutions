function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        const digit = number % 10;
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
        number = Math.floor(number / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}