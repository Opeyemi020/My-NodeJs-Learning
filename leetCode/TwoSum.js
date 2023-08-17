function twoSum(nums, target) {
    const numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }

        numToIndex[nums[i]] = i;
    }

    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("Output:", result);
