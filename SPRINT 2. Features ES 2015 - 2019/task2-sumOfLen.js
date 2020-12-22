const sumOfLen = (...strings) => {
    let sum = strings.join('').length;
    console.log(sum);
    return sum;
}

sumOfLen('hello', 'hi', 'my name', 'is');