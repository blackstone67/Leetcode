function findMedianSortedArrays(nums1, nums2) {
    let array = nums1.concat(nums2);
    array.sort(function (a, b) { return a - b; });
    let n = array.length;
    console.log(n % 2 == 0 ? (array[Math.trunc(n / 2) - 1] + array[Math.trunc(n / 2)]) / 2 : array[Math.trunc(n / 2)]);
    return n % 2 == 0 ? (array[Math.trunc(n / 2) - 1] + array[Math.trunc(n / 2)]) / 2 : array[Math.trunc(n / 2)];
}
;
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);
//# sourceMappingURL=app.js.map