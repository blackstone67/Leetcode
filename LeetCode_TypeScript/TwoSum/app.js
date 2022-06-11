function twoSum(nums, target) {
    let result;
    nums.forEach((value_i, index_i) => {
        let valueSecond = nums.findIndex((value_j, index_j) => (target - value_j == value_i) && (index_j != index_i));
        if (valueSecond > 0) {
            result = [index_i, valueSecond];
            return true;
        }
    });
    console.log(result);
    return result;
}
;
twoSum([2, 7, 11, 15], 9);
//# sourceMappingURL=app.js.map