function minimumTotal(triangle: number[][]): number {
    //let result = JSON.parse(JSON.stringify(triangle));
    //result.forEach((array, i) => {
    //    array.forEach((value, j) => {
    //        result[i][j] = 99999999;
    //    })
    //})
    //result[-1] = [];
    //result[0][0] = triangle[0][0];
    triangle.forEach((array, i) => {
        if (i > 0) {
            array.forEach((value, j) => {
                triangle[i][j] = Math.min(triangle[i - 1][j] != undefined ? triangle[i - 1][j] : 99999999, triangle[i - 1][j - 1] != undefined ? triangle[i - 1][j - 1] : 99999999) + triangle[i][j];
            })
        }
    })
    return Math.min(...triangle[triangle.length - 1]);
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);