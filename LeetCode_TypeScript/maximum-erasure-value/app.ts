function max(a: number, b: number) {
    return a > b ? a : b;
}
function maximumUniqueSubarray(nums: number[]): number {
    let s, f, g, a: number[];
    g = [], f = [], a = [], s = [];
    f[0] = nums[0];
    s[0] = nums[0];
    g[0] = 0;
    a[nums[0]] = 0;
    let result = f[0];
    for (let i = 1; i < nums.length; i++) {
        s[i] = s[i - 1] + nums[i];
        if (a[nums[i]] == undefined) {
            a[nums[i]] = i;
            f[i] = f[i - 1] + nums[i];
            g[i] = g[i - 1];
        } else {
            if (g[i - 1] > a[nums[i]]) {
                f[i] = f[i - 1] + nums[i];
                g[i] = g[i - 1];
            }
            else {
                f[i] = s[i] - s[a[nums[i]]];
                g[i] = a[nums[i]];
            }
            a[nums[i]] = i;
        }
        result = max(result, f[i]);
    }
    return result;
};

maximumUniqueSubarray([4, 2, 4, 5, 6]);
maximumUniqueSubarray([10000, 1, 10000, 1, 1, 1, 1, 1, 1]);
maximumUniqueSubarray([1,2,3,4,5,1,2,3,4,5,1,2,6,7]);
maximumUniqueSubarray([187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434]);
maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]);