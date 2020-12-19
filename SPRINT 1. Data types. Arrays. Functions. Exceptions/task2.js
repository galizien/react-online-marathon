// Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array
// consisting only of numeric elements of arrays arr1 and arr2.
//     Function example:
//     combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]
//
//

function combineArray(arr1, arr2) {
    arr1 = [12, "User01", 22, true, -8];
    arr2 = ["Index", 6, null, 15];
    let combinedArray = arr1.concat(arr2);
    let removeValueFromIndex = [1, 3, 5, 7];
    for (let i = removeValueFromIndex.length - 1; i >= 0; i--) {
        combinedArray.splice(removeValueFromIndex[i], 1);
    }
    // console.log(combinedArray);
}