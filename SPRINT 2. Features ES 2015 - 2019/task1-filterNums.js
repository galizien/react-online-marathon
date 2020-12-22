const filterNums = (nums, pointer, direction) => {
    if (direction === "less") {

    }
    let result = nums.filter(num => num > pointer);
    console.log(result);
    return result;
};
filterNums([-1, 2, 4, 0, 55, -12, 3], 1, "less");

