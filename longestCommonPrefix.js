// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

function longestCommonPrefix (strs) {
    let prefix = ''
    let index = 0

    if (strs.length === 0) return prefix
    if (strs.length === 1) return strs[0]

    while (true) {
        for (let i = 0; i < strs.length - 1; i++) {
            const currentString = strs[i]
            const nextString = strs[i + 1]
            const currentChar = currentString[index]
            const nextChar = nextString[index]
    
            if (currentChar === undefined || nextChar === undefined || currentChar !== nextChar) {
                return prefix
            }
        }

        prefix += strs[0][index]
        index++
    }
}
