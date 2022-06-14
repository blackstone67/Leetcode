function countDigitOne(n: number): number {
    let result = 0;
    let k = 1;
    while (k <= n) {
        result += ((n % (k * 10)) - k >= k ? k : (Math.max(0, (n % (k * 10)) - k + 1))) + k * Math.trunc((n) / (k * 10));
        k = k * 10;
    }
    return result;
};
countDigitOne(9123456789);