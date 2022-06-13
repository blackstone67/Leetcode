import { exit } from "process";

function threeSumClosest(nums: number[], target: number): number {

    let a = new Array(7001);
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++) {
            if (a[nums[i] + nums[j]] == undefined) {
                a[nums[i] + nums[j]] = [];
                a[nums[i] + nums[j]].push([i, j]);
            } 
        }
    for (let i = 0; i < nums.length; i++) {
        if (a[target - nums[i]] != undefined) {
            for (let j = 0; j < a[target - nums[i]].length; j++) {
                let value = a[target - nums[i]][j];
                if (value[0] != i && value[1] != i) {
                    return target;
                }
            }
        }
    }
    let preTarget = target - 1, afterTarget = target + 1;
    while (true) {
        for (let i = 0; i < nums.length; i++) {
            if (a[preTarget - nums[i]] != undefined) {
                for (let j = 0; j < a[preTarget - nums[i]].length; j++) {
                    let value = a[preTarget - nums[i]][j];
                    if (value[0] != i && value[1] != i) {
                        return preTarget;
                    }
                }
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (a[afterTarget - nums[i]] != undefined) {
                for (let j = 0; j < a[afterTarget - nums[i]].length; j++) {
                    let value = a[afterTarget - nums[i]][j];
                    if (value[0] != i && value[1] != i) {
                        return afterTarget;
                    }
                }
            }
        }
        preTarget--;
        afterTarget++;
    }
};

//threeSumClosest([-1, 2, 1, -4], 1);
threeSumClosest([0,0,0], 0);