function combineArray(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    return combinedArray.filter(elem => typeof elem == "number");
}

combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]);