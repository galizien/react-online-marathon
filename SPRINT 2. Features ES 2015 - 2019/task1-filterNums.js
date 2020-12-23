const filterNums = (nums, pointer = 0, direction = "greater") => {
    let result = 0;
    if (direction === "less") {
        result = nums.filter(num => num < pointer);
    }
    else if (direction === "greater") {
        result = nums.filter(num => num > pointer);
    }
    return result;
};

filterNums([-1, 2, 4, 0, 55, -12, 3], "less");