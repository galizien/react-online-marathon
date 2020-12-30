function add(x, y) {
    return new Promise(function (resolve, reject) {
        if ((typeof (x) === "number") && (typeof (y) === "number")) {
            resolve(x + y);
        }
        else {
            reject("Error!");
        }
    });
}
let result = add(2, 2);
