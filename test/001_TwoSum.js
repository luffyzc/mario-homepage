/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var n = nums.length,i;
    var restMap = new Map();
    for (i = 0; i < n; i++) {
        restMap.set(nums[i], i);
    }
    for (i = 0; i < n; i++) {
        if (restMap.has(target-nums[i])) {
            var j = restMap.get(target - nums[i]);
            if (i > j) return [j + 1, i + 1];
            else if (i < j) return [i + 1, j + 1];
        }
    }
};
