function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function processArray(arr) {
    let arrayNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        arrayNumbers.push(factorial(arr[i]));
    }
    return arrayNumbers;
}

processArray([1, 2, 3, 4, 5]);