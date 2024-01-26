function sortNumbers(arr) {

    arr.sort((a, b) => a - b);

    
    const result = [];
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        result.push(arr[i]);
        if (i !== j) {
            result.push(arr[j]);
        }
    }

    return result;
}

const inputArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
const outputArray = sortNumbers(inputArray);
console.log(outputArray);
