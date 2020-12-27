const maxInterv = (...nums) => {
    let interval = 0;
    for (let i = 1; i < nums.length; i++) {
        const interv = Math.abs(nums[i - i] - nums[i]);
        if (interval > interv) {
            interval = interv;
        }
    }
    console.log(interval);
    return interval;
}
maxInterv(3, 5, 2, 7);
