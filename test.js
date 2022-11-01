let nums = [3, 2, 3];
let target = 6;
let result = [];

var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        // console.log("n=", n)

        if (map[target - n] >= 0) {
            return [map[target - n], i]
        }
        else {
            map[n] = i;   //use map to store the value and index position
            console.log(map[n] + '=' + i)
        }
    }
};

console.log(twoSum(nums, target))
ok
console.log(1)