// const nums = [-1, 2, 4, 0, 55, -12, 3];
// const result = nums.filter(num => num < 1);
// console.log(result);

const filterNums = (nums, pointer, direction) => {
    if (direction === "less") {

    }
    let result = nums.filter(num => num < pointer);
    return result;
};

filterNums([-1, 2, 4, 0, 55, -12, 3], 1, "less");

