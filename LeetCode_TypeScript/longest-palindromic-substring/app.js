//function longestPalindrome(s: string): string {
//    let f: boolean[][] = [];
//    let result: string;
//    for (let i = 0; i < s.length; i++) {
//        result = s[i];
//        f[i] = [];
//        f[i][i] = true;
//        if (s[i] == s[i + 1]) {
//            f[i][i + 1] = true;
//            result = s[i] + s[i + 1];
//        }
//    }
//    for (let i = 0; i < s.length; i++) {
//        if (s[i] == s[i + 1]) {
//            f[i][i + 1] = true;
//            result = s[i] + s[i + 1];
//        }
//    }
//    if (s.length >= 3) {
//        for (let width = 3; width <= s.length; width++) {
//            for (let i = 0; i < s.length - width + 1; i++) {
//                if (f[i + 1][i + width - 2] && s[i] == s[i + width - 1]) {
//                    f[i][i + width - 1] = true;
//                    result = s.slice(i, i + width);
//                }
//            }
//        }
//    }
//    return result;
//};
function longestPalindrome(s) {
    let f = [];
    let result;
    result = 1;
    for (let i = 0; i < s.length; i++) {
        f[i] = [];
        f[i][i] = true;
        if (s[i] == s[i + 1]) {
            f[i][i + 1] = true;
            result = Math.max(result, 2);
        }
    }
    if (s.length >= 3) {
        for (let width = 3; width <= s.length; width++) {
            for (let i = 0; i < s.length - width + 1; i++) {
                if (f[i + 1][i + width - 2] && s[i] == s[i + width - 1]) {
                    f[i][i + width - 1] = true;
                    result = width;
                }
            }
        }
    }
    for (let i = 0; i < s.length - result + 1; i++) {
        if (f[i][i + result - 1]) {
            return s.slice(i, i + result);
        }
    }
}
;
longestPalindrome("aaaaa");
//# sourceMappingURL=app.js.map