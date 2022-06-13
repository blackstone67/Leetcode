function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0;
    let result: number[] = [];
    result[0] = 1;
    for (let i = 1; i < s.length; i++) {
        result[i] = 1;
        for (let j = 1; j <= result[i - 1]; j++) {
            if (s[i - j] != s[i]) {
                result[i]++;
            } else {
                break;
            }
        }
    }
    return Math.max(...result);
};

lengthOfLongestSubstring("a");