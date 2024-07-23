

var twoSum = function(nums, target) {
    const table = new Map();
    const pairs = []

    for(let i = 0; i < nums.length; i++) {
        const result = target - nums[i];

        if(table.has(result)) {
            const t = nums.indexOf(result)
            pairs.push(t, i)
        }

        table.set(nums[i], nums[i])
    }

    return pairs;
};

console.log(twoSum([2,7,11,15], 9));