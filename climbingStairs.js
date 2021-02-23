// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

// function climbStairs (n) {
//     if (n === 0) return 1
//     if (n === 1) return 1

//     return climbStairs(n - 1) + climbStairs(n - 2)
// }

// function climbStairs (n, cache = {}) {
//     if (n === 0) return 1
//     if (n === 1) return 1

//     let result1
//     let result2

//     if (cache[n - 1]) {
//         result1 = cache[n - 1]
//     } else {
//         result1 = climbStairs(n - 1, cache)
//         cache[n - 1] = result1
//     }

//     if (cache[n - 2]) {
//         result2 = cache[n - 2]
//     } else {
//         result2 = climbStairs(n - 2, cache)
//         cache[n - 2] = result2
//     }

//     return result1 + result2
// }

function climbStairs (n) {
    const cache = [1, 1]

    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }

    return cache[n]
}