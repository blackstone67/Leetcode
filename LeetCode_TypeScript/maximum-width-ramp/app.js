function maxWidthRamp(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push({ value: nums[i], index: i });
    }
    arr.sort(function (a, b) { return a.value - b.value; });
    let result = 0;
    let f = [], fSize = nums.length + 1;
    while (fSize--)
        f[fSize] = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        f[i] = Math.max(f[i + 1], arr[i].index);
    }
    for (let i = 0; i < nums.length; i++) {
        result = Math.max(result, f[i] - arr[i].index);
    }
    return result;
}
;
maxWidthRamp([6, 0, 8, 2, 1, 5]);
maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]);
//# sourceMappingURL=app.js.map