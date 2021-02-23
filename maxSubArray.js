// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// O(n^3)
function maxSubArray (nums) {
    let maxSum = -Infinity

    for (let leftBound = 0; leftBound < nums.length; leftBound++) {
        for (let rightBound = leftBound; rightBound < nums.length; rightBound++) {
            let sum = 0

            for (let currentIndex = leftBound; currentIndex <= rightBound; currentIndex++) {
                sum += nums[currentIndex]
            }

            if (maxSum < sum) {
                maxSum = sum
            }
        }
    }

    return maxSum
}

// O(n)
function maxSubArray (nums) {
    let max = -Infinity
    let sumSoFar = 0
    
    for (const num of nums) {
        sumSoFar += num

        if (max < sumSoFar) {
            max = sumSoFar
        }

        if (sumSoFar < 0) {
            sumSoFar = 0
        }
    }

    return max
}
