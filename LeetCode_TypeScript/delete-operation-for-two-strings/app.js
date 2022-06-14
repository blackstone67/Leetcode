function minDistance(word1, word2) {
    let f = [];
    let n = word1.length, m = word2.length;
    for (let i = -1; i < n; i++) {
        f[i] = [];
        for (let j = -1; j < m; j++) {
            f[i][j] = 0;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (word1[i] == word2[j]) {
                f[i][j] = f[i - 1][j - 1] + 1;
            }
            else {
                f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]);
            }
        }
    }
    return n + m - 2 * f[n - 1][m - 1];
}
;
minDistance("sea", "eat");
minDistance("leetcode", "etco");
//# sourceMappingURL=app.js.map