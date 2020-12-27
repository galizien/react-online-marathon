function getMin(arr) {
    return Math.min.apply(Math, arr);
}
let result = getMin([12, -200, 22, 13, 7]);
console.log(result);