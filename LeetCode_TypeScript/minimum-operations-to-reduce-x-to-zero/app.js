function minOperations(nums, x) {
    let n = nums.length;
    if (n == 1) {
        if (nums[0] != x) {
            return -1;
        }
        else {
            return 1;
        }
    }
    let leftHash = new Map();
    let rightHash = new Map();
    leftHash.set(nums[0], 0);
    rightHash.set(nums[n - 1], n - 1);
    let f, g;
    f = [], g = [];
    f[0] = nums[0];
    g[n - 1] = nums[n - 1];
    let result = 100000000;
    for (let i = 1; i < n; i++) {
        f[i] = f[i - 1] + nums[i];
        leftHash.set(f[i], i);
    }
    for (let j = n - 2; j >= 0; j--) {
        g[j] = g[j + 1] + nums[j];
        rightHash.set(g[j], j);
    }
    if (leftHash.get(x) != undefined) {
        result = Math.min(result, leftHash.get(x) + 1);
    }
    if (rightHash.get(x) != undefined) {
        result = Math.min(result, n - rightHash.get(x));
    }
    for (let i = 0; i < n; i++) {
        let j = rightHash.get(x - f[i]);
        if (j != undefined) {
            if (j > i) {
                result = Math.min(result, i + 1 + n - j);
            }
        }
    }
    result = result == 100000000 ? -1 : result;
    console.log(result);
    return result;
}
;
minOperations([1, 1, 4, 2, 3], 5);
minOperations([5, 6, 7, 8, 9], 4);
minOperations([3, 2, 20, 1, 1, 3], 10);
//# sourceMappingURL=app.js.map